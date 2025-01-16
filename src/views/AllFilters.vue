<template>
  <div class="wrapper">
    <SearchBar @search="handleSearch" />
    <CategoryFilter :categories="categories" @filter="handleFilter" />
    <SortByFilter @sort="handleSort" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import CategoryFilter from '../components/CategoryFilter.vue'
import SortByFilter from '../components/SortByFilter.vue'
import { categories } from '@/utils/fetchCardsData'

const emit = defineEmits(['updateFilters'])
const searchQuery = ref('')
const selectedCategory = ref('')
const selectedSortBy = ref('')

const handleSearch = (query: string) => {
  searchQuery.value = query
  emit('updateFilters', {
    searchQuery: searchQuery.value,
    selectedCategory: selectedCategory.value,
    selectedSortBy: selectedSortBy.value,
  })
}

const handleFilter = (category: string) => {
  selectedCategory.value = category
  emit('updateFilters', {
    searchQuery: searchQuery.value,
    selectedCategory: selectedCategory.value,
    selectedSortBy: selectedSortBy.value,
  })
}

const handleSort = (sortedBy: string) => {
  selectedSortBy.value = sortedBy
  emit('updateFilters', {
    searchQuery: searchQuery.value,
    selectedCategory: selectedCategory.value,
    selectedSortBy: selectedSortBy.value,
  })
}
</script>

<style scoped>
.wrapper {
  margin-top: 20px;
  background-color: #e8f5e9;
  padding: 20px;
  border-radius: 8px;
}
</style>
