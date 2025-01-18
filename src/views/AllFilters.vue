<template>
  <section class="hero-image">
    <div class="all-filters-wrapper">
      <SearchBar @search="handleSearch" />
      <div class="container-category-sort">
        <CategoryFilter :categories="categories" @filter="handleFilter" />
        <SortByFilter @sort="handleSort" />
      </div>

      <ShuffleButton @click="emitRandomCard" class="shuffle-button-container" />
    </div>
  </section>
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

/**
 * Emits an event to pick a random card.
 */
const emitRandomCard = () => {
  emit('pickRandomCard')
}

/**
 * Emits an event to update the filter parameters.
 */
const emitUpdateFilters = (): void => {
  emit('updateFilters', {
    searchQuery: searchQuery.value,
    selectedCategory: selectedCategory.value,
    selectedSortBy: selectedSortBy.value,
  })
}

/**
 * Handles the search query update.
 * @param {string} query - The search query.
 */
const handleSearch = (query: string): void => {
  searchQuery.value = query
  emitUpdateFilters()
}

/**
 * Handles the category filter update.
 * @param {string} category - The selected category.
 */
const handleFilter = (category: string): void => {
  selectedCategory.value = category
  emitUpdateFilters()
}

/**
 * Handles the sort order update.
 * @param {string} sortedBy - The selected sort order.
 */
const handleSort = (sortedBy: string): void => {
  selectedSortBy.value = sortedBy
  emitUpdateFilters()
}
</script>

<style scoped>
@import '@/assets/animations.css';
.hero-image {
  position: sticky;
  margin-bottom: 60px;
  top: 50px;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #aee68c;
}

.all-filters-wrapper {
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
  .hero-image {
    background-color: transparent;
  }
  .all-filters-wrapper {
    background-color: rgba(0, 0, 0, 0.67);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .container-category-sort {
    grid-template-columns: 2fr 1fr;
    gap: 10px;
  }

  .shuffle-button-container {
    position: absolute;
    right: 10px;
    top: -45px;
  }
}
</style>
