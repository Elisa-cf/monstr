<template>
  <div class="filter-container">
    <label for="category-select" class="filter-label">Select Category</label>

    <i class="pi pi-list filter-icon"></i>
    <select id="category-select" v-model="selectedCategory" @change="onCategoryChange">
      <option value="">All Categories</option>
      <option v-for="category in categories" :key="category.id" :value="category.id">
        {{ category.title }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue'
import { categories } from '@/utils/fetchCardsData'

const emit = defineEmits(['filter'])
const selectedCategory = ref('')

const onCategoryChange = () => {
  emit('filter', selectedCategory.value)
}
</script>

<style scoped>
.filter-container {
  position: relative;
  width: 100%;
}

.filter-label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  color: #394e64;
}

select {
  width: 100%;
  padding: 8px 8px 8px 26px;
  margin-bottom: 16px;
  border: 2px solid #ddd;
  border-radius: 4px;
  color: #394e64;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

select:focus {
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
