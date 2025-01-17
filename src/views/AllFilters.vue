<template>
  <div class="hero">
    <div class="wrapper">
      <SearchBar @search="handleSearch" />
      <div class="container-category-sort">
        <CategoryFilter :categories="categories" @filter="handleFilter" />
        <SortByFilter @sort="handleSort" />
      </div>

      <div class="button-container">
        <button
          class="random-button"
          @mouseover="handleMouseOver"
          @mouseleave="handleMouseLeave"
          @click="emitRandomCard"
        >
          <span :class="{ tremble: isTrembling }">{{ buttonText }}</span>
          <div v-if="buttonText === 'Unleash Your Monster Mate!'" class="shining-effect"></div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import CategoryFilter from '../components/CategoryFilter.vue'
import SortByFilter from '../components/SortByFilter.vue'
import { useCards } from '@/composables/useCards'

const emit = defineEmits(['updateFilters', 'pickRandomCard'])
const searchQuery = ref('')
const selectedCategory = ref('')
const selectedSortBy = ref('')
const isTrembling = ref(false)
const buttonText = ref('Unleash Your Monster Mate!')

const { categories } = useCards()

let trembleTimeout: ReturnType<typeof setTimeout>

const startTremble = () => {
  isTrembling.value = true
  trembleTimeout = setTimeout(() => {
    isTrembling.value = false
  }, 1000)
}

const stopTremble = () => {
  clearTimeout(trembleTimeout)
  isTrembling.value = false
}

const handleMouseOver = () => {
  buttonText.value = 'Your Date’s Just a Click Away!'
  startTremble()
}

const handleMouseLeave = () => {
  buttonText.value = 'Unleash Your Monster Mate!'
  stopTremble()
}

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
  max-width: 800px;
  margin: 0 auto;
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

.button-container {
  display: flex;
  justify-content: center;
  position: relative;
}

.random-button {
  padding: 12px 24px;
  font-size: 18px;
  background-color: #c799d9;
  color: #394e64;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  position: relative;
  overflow: hidden;
}

.random-button:hover {
  background-color: #6f4181;
  color: white;
  transform: scale(1.1);
}

@media (min-width: 768px) {
  .wrapper {
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  .hero {
    padding: 40px 0;
    background-color: transparent;
  }

  .wrapper {
    background-color: rgba(0, 0, 0, 0.67);
    border-radius: 20px;
  }
  .container-category-sort {
    grid-template-columns: 2fr 1fr;
    gap: 10px;
  }
}
</style>
