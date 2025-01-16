<template>
  <div class="filter-container">
    <label for="sort-by" class="filter-label">Sort By</label>
    <i v-if="sortedBy === 'ascendent'" class="pi pi-sort-amount-up filter-icon"></i>
    <i v-else class="pi pi-sort-amount-down filter-icon"></i>
    <select v-model="sortedBy" @change="onSortByChange">
      <option value="ascendent">A-Z (Ascending the Abyss)</option>
      <option value="descendent">Z-A (Creeps at the Top)</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue'

const emit = defineEmits(['sort'])
const sortedBy = ref('ascendent')

const onSortByChange = () => {
  emit('sort', sortedBy.value)
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
