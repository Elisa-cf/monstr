<template>
  <main class="app">
    <AllFilters @updateFilters="updateFilters" />
    <FavoriteList :cards="cards" />
    <CardList :cards="filteredCards" />
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import CardList from '../views/CardList.vue'
import AllFilters from '../views/AllFilters.vue'
import { loadCards, loadCategories, cards } from '@/utils/fetchCardsData'
import type { FilterParams } from '@/types/interfaces'
import FavoriteList from './FavoriteList.vue'

const searchQuery = ref('')
const selectedCategory = ref('')
const selectedSortBy = ref('')

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

onMounted(() => {
  loadCards()
  loadCategories()
})
</script>
