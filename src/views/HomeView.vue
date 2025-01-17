<template>
  <main>
    <AllFilters @updateFilters="updateFilters" @pickRandomCard="openRandomCardModal" />
    <div class="app">
      <CardList
        :cards="favoriteCards"
        title="darkest crushes"
        @toggleFavorite="toggleFavorite"
        :favoriteCards="favoriteCards"
      />
      <CardList
        :cards="filteredCards"
        title="top terrors"
        @toggleFavorite="toggleFavorite"
        :favoriteCards="favoriteCards"
      />
    </div>

    <RandomCardModal
      v-if="isRandomCardModalOpen"
      :card="randomCard"
      @close="isRandomCardModalOpen = false"
    />
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import CardList from '../views/CardList.vue'
import AllFilters from '../views/AllFilters.vue'
import { loadCards, loadCategories, cards } from '@/utils/fetchCardsData'
import type { FilterParams } from '@/types/interfaces'
import RandomCardModal from '../components/RandomCardModal.vue'
import type { Card } from '@/types/interfaces'

const searchQuery = ref('')
const selectedCategory = ref('')
const selectedSortBy = ref('')
const isRandomCardModalOpen = ref(false)
const randomCard = ref<Card | null>(null)
const favoriteCards = ref<Card[]>([])

const updateFilters = ({
  searchQuery: query,
  selectedCategory: category,
  selectedSortBy: sortBy,
}: FilterParams) => {
  console.log(sortBy)
  searchQuery.value = query
  selectedCategory.value = category
  selectedSortBy.value = sortBy
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

onMounted(() => {
  loadCards()
  loadCategories()
})
</script>
<style scoped>
.title {
  color: #8cef30;
}
</style>
