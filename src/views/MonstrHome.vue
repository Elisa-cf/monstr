<template>
  <main>
    <AllFilters @updateFilters="updateFilters" @pickRandomCard="openRandomCardModal" />
    <div v-if="isLoading">
      <LoadingSpinner />
    </div>
    <div v-else>
      <div class="app">
        <CardListMonsters
          :cards="favoriteCards"
          title="darkest crushes"
          @toggleFavorite="toggleFavorite"
          :favoriteCards="favoriteCards"
          cardType="favorite"
        />
        <CardListMonsters
          :cards="filteredCards"
          title="top terrors"
          @toggleFavorite="toggleFavorite"
          :favoriteCards="favoriteCards"
          cardType="normal"
        />
      </div>

      <RandomCardModal
        v-if="isRandomCardModalOpen"
        :card="randomCard"
        @close="isRandomCardModalOpen = false"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import CardListMonsters from '../views/CardListMonsters.vue'
import AllFilters from '../views/AllFilters.vue'
import type { FilterParams } from '@/types/interfaces'
import RandomCardModal from '../components/RandomCardModal.vue'
import type { Card } from '@/types/interfaces'
import LoadingSpinner from '@/utils/LoadingSpinner.vue'
import { useCards } from '@/composables/useCards'
import { loadFromLocalStorage, saveToLocalStorage } from '@/utils/StorageUtils'

const searchQuery = ref('')
const selectedCategory = ref('')
const selectedSortBy = ref('')
const isRandomCardModalOpen = ref(false)
const randomCard = ref<Card | null>(null)
const favoriteCards = ref<Card[]>([])
const isLoading = ref(true)

const { cards, loadCards, loadCategories } = useCards()

/**
 * Updates the filter parameters and scrolls to the top of the window.
 * @param {FilterParams} param0 - The filter parameters.
 */
const updateFilters = ({
  searchQuery: query,
  selectedCategory: category,
  selectedSortBy: sortBy,
}: FilterParams): void => {
  searchQuery.value = query
  selectedCategory.value = category
  selectedSortBy.value = sortBy
  window.scrollTo(0, 0)
}

/**
 * Sorts the given array of cards based on the specified sort order.
 * @param {Card[]} cards - The array of cards to sort.
 * @param {string} sortBy - The sort order ('ascendent' or 'descendent').
 * @returns {Card[]} The sorted array of cards.
 */
const sortCards = (cards: Card[], sortBy: string): Card[] => {
  if (sortBy === 'ascendent') {
    return cards.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sortBy === 'descendent') {
    return cards.sort((a, b) => b.name.localeCompare(a.name))
  }
  return cards
}

/**
 * Computes the filtered and sorted array of cards based on the current filter parameters.
 * @returns {Card[]} The filtered and sorted array of cards.
 */
const filteredCards = computed(() => {
  // Filter the cards first
  const filtered = cards.value.filter((card) => {
    const matchesCategory = selectedCategory.value ? card.category === selectedCategory.value : true
    const matchesSearch = card.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Sort the filtered cards
  return sortCards(filtered, selectedSortBy.value)
})

/**
 * Opens the random card modal with a randomly selected card.
 */
const openRandomCardModal = (): void => {
  if (cards.value.length === 0) return
  const randomIndex = Math.floor(Math.random() * cards.value.length)
  randomCard.value = cards.value[randomIndex]
  isRandomCardModalOpen.value = true
}

/**
 * Toggles the favorite status of the given card.
 * @param {Card} card - The card to toggle favorite status for.
 */
const toggleFavorite = (card: Card): void => {
  const cardIndex = favoriteCards.value.findIndex((favCard) => favCard.id === card.id)
  if (cardIndex === -1) {
    favoriteCards.value.push(card)
  } else {
    favoriteCards.value.splice(cardIndex, 1)
  }
}

/**
 * Loads the initial data, including favorite cards from local storage and card data from the API.
 */
const loadInitialData = async (): Promise<void> => {
  favoriteCards.value = loadFromLocalStorage<Card[]>('favoriteCards', [])

  try {
    await loadCards()
    await loadCategories()
  } catch (error) {
    console.error('Error fetching cards:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(loadInitialData)

/**
 * Watches the favoriteCards array and saves it to local storage whenever it changes.
 */
watch(favoriteCards, () => saveToLocalStorage<Card[]>('favoriteCards', favoriteCards.value), {
  deep: true,
})
</script>

<style scoped></style>
