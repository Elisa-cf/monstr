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
import { ref, computed, onMounted } from 'vue'
import CardListMonsters from '../views/CardListMonsters.vue'
import AllFilters from '../views/AllFilters.vue'
import type { FilterParams } from '@/types/interfaces'
import RandomCardModal from '../components/RandomCardModal.vue'
import type { Card } from '@/types/interfaces'
import LoadingSpinner from '@/utils/LoadingSpinner.vue'
import { useCards } from '@/composables/useCards'

const searchQuery = ref('')
const selectedCategory = ref('')
const selectedSortBy = ref('')
const isRandomCardModalOpen = ref(false)
const randomCard = ref<Card | null>(null)
const favoriteCards = ref<Card[]>([])
const isLoading = ref(true)

const { cards, loadCards, loadCategories } = useCards()

const updateFilters = ({
  searchQuery: query,
  selectedCategory: category,
  selectedSortBy: sortBy,
}: FilterParams) => {
  searchQuery.value = query
  selectedCategory.value = category
  selectedSortBy.value = sortBy
  window.scrollTo(0, 0)
}

const filteredCards = computed(() => {
  // Filter the cards first
  const filtered = cards.value.filter((card) => {
    const matchesCategory = selectedCategory.value ? card.category === selectedCategory.value : true
    const matchesSearch = card.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Sort the filtered cards
  if (selectedSortBy.value === 'ascendent') {
    return filtered.sort((a, b) => a.name.localeCompare(b.name))
  } else if (selectedSortBy.value === 'descendent') {
    return filtered.sort((a, b) => b.name.localeCompare(a.name))
  }

  return filtered
})

const openRandomCardModal = () => {
  const randomIndex = Math.floor(Math.random() * cards.value.length)
  randomCard.value = cards.value[randomIndex]
  isRandomCardModalOpen.value = true
}

const toggleFavorite = (card: Card) => {
  const index = favoriteCards.value.findIndex((favCard) => favCard.id === card.id)
  if (index === -1) {
    favoriteCards.value.push(card)
  } else {
    favoriteCards.value.splice(index, 1)
  }
}

onMounted(async () => {
  try {
    await loadCards()
    await loadCategories()
  } catch (error) {
    console.error('Error fetching cards:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<style scoped></style>
