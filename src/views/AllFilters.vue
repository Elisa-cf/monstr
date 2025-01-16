<template>
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
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import CategoryFilter from '../components/CategoryFilter.vue'
import SortByFilter from '../components/SortByFilter.vue'
import { categories } from '@/utils/fetchCardsData'

const emit = defineEmits(['updateFilters', 'pickRandomCard'])
const searchQuery = ref('')
const selectedCategory = ref('')
const selectedSortBy = ref('')
const isTrembling = ref(false)
const buttonText = ref('Unleash Your Monster Mate!')

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
.wrapper {
  margin-top: 20px;
  background-color: #e8f5e9;
  padding: 20px;
  border-radius: 8px;
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
  background-color: #ff9800;
  color: white;
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
  background-color: #e68900;
  transform: scale(1.1);
}

.tremble {
  display: inline-block;
  animation: tremble 0.2s infinite;
}

.shining-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  animation: shine 2s infinite;
}

@keyframes tremble {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-2px);
  }
  50% {
    transform: translateX(2px);
  }
  75% {
    transform: translateX(-2px);
  }
}

@keyframes shine {
  0% {
    left: -100%;
  }
  50% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
}
</style>
