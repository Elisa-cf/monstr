<template>
  <div class="filter-container">
    <label for="search-input" class="filter-label">Search your</label>
    <i class="pi pi-search filter-icon"></i>
    <input
      id="search-input"
      class="search-input"
      type="text"
      v-model="searchQuery"
      placeholder="Find your boo-tiful match..."
      @input="onSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue'

const emit = defineEmits(['search'])
const searchQuery = ref('')

/**
 * Emits the search event with the current search query.
 */
const onSearch = () => {
  emit('search', searchQuery.value)
}
</script>

<style scoped>
.search-input {
  width: 100%;
  padding: var(--xs-padding-size) var(--xs-padding-size) var(--xs-padding-size) 32px;
  margin-bottom: var(--small-margin-size);
  border: 2px solid #ddd;
  border-radius: 4px;
  color: var(--color-grey-1);
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.search-input::placeholder {
  color: var(--color-grey-1);
}

search-input:focus {
  border-color: var(--border-color);
  outline: none;
  box-shadow: 0 0 0 2px var(--shadow-color);
}
</style>
