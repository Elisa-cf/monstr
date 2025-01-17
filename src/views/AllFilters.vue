<template>
  <div class="hero">
    <div class="wrapper">
      <SearchBar @search="handleSearch" />
      <CategoryFilter :categories="categories" @filter="handleFilter" />
      <SortByFilter @sort="handleSort" />
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

.wrapper {
  margin: 20px 16px;
  background-color: #aee68c;
  padding: 20px;
  border-radius: 8px;
  max-width: 800px;
  z-index: 10;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
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
    margin: 40px auto;
  }
}

@media (min-width: 1024px) {
  .hero {
    background-image: url('../assets/images/monstr_hero.jpg');
    background-size: cover;
    background-position: center;
    padding: 40px 0;
    color: white;
    margin-top: -50px;
    position: relative;
    z-index: 1;
  }
}
</style>
