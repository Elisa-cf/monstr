<template>
  <div class="hero">
    <div class="wrapper">
      <SearchBar @search="handleSearch" />
      <div class="container-category-sort">
        <CategoryFilter :categories="categories" @filter="handleFilter" />
        <SortByFilter @sort="handleSort" />
      </div>

      <ShuffleButton @click="emitRandomCard" class="button-container" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import CategoryFilter from '../components/CategoryFilter.vue'
import SortByFilter from '../components/SortByFilter.vue'
import { useCards } from '@/composables/useCards'
import ShuffleButton from '@/components/ShuffleButton.vue'

const emit = defineEmits(['updateFilters', 'pickRandomCard'])
const searchQuery = ref('')
const selectedCategory = ref('')
const selectedSortBy = ref('')

const { categories } = useCards()

const emitRandomCard = () => {
  emit('pickRandomCard')
}

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
@import '@/assets/animations.css';
.hero {
  position: sticky;
  margin-bottom: 60px;
  top: 50px;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #aee68c;
}

.wrapper {
  padding: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-category-sort {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 5px;
  width: 100%;
}

@media (min-width: 1024px) {
  .hero {
    background-color: transparent;
  }
  .wrapper {
    background-color: rgba(0, 0, 0, 0.67);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .container-category-sort {
    grid-template-columns: 2fr 1fr;
    gap: 10px;
  }

  .button-container {
    position: absolute;
    right: 10px;
    top: -45px;
  }
}
</style>
