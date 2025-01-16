<template>
  <div class="filter-container">
    <label for="search-input" class="filter-label">Search Monsters</label>
    <i class="pi pi-search filter-icon"></i>
    <input
      id="search-input"
      type="text"
      v-model="searchQuery"
      placeholder="Find your monster..."
      @input="onSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue'

const emit = defineEmits(['search'])
const searchQuery = ref('')

const onSearch = () => {
  emit('search', searchQuery.value)
}
</script>

<style scoped>
.filter-label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  color: #394e64;
}

.filter-container {
  position: relative;
  width: 100%;
}

input {
  width: 100%;
  padding: 8px 8px 8px 32px;
  margin-bottom: 16px;
  border: 2px solid #ddd;
  border-radius: 4px;
  color: #394e64;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

input::placeholder {
  color: #394e64;
}

input:focus {
  border-color: #c8dde6;
  outline: none;
  box-shadow: 0 0 0 2px rgba(57, 78, 100, 0.5);
}

.filter-icon {
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-35%);
  color: #394e64;
}
</style>
