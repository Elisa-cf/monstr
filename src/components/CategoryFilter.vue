<template>
  <div class="filter-container">
    <label for="category-select" class="filter-label">Select Category</label>
    <div class="custom-select" @click="toggleDropdown">
      <div class="selected-option">
        <i class="pi pi-list filter-icon"></i>
        <p>{{ selectedCategoryTitle }}</p>
        <i class="pi pi-chevron-down chevron-icon"></i>
      </div>
      <!-- Close the dropdown when clicking outside -->
      <ul v-if="isDropdownOpen" class="options-list">
        <li
          :class="{ selected: '' === selectedCategory }"
          @click="
            () => {
              selectCategory('', 'All The Monsterverse')
              toggleDropdown()
            }
          "
        >
          All The Monsterverse
        </li>
        <li
          v-for="category in categories"
          :key="category.id"
          :class="{ selected: category.id === selectedCategory }"
          @click="
            () => {
              selectCategory(category.id, category.title)
              toggleDropdown()
            }
          "
        >
          {{ category.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCards } from '@/composables/useCards'

const emit = defineEmits(['filter'])
const selectedCategory = ref('')
const selectedCategoryTitle = ref('All The Monsterverse')
const isDropdownOpen = ref(false)

const { categories, loadCategories } = useCards()

/**
 * Toggles the dropdown open and closed.
 */
const toggleDropdown = (): void => {
  isDropdownOpen.value = !isDropdownOpen.value
}

/**
 * Closes the dropdown.
 */
const closeDropdown = (): void => {
  isDropdownOpen.value = false
}

const onCategoryChange = (): void => {
  emit('filter', selectedCategory.value)
}

/**
 * Selects a category and emits the filter event.
 * @param {string} categoryId - The ID of the selected category.
 * @param {string} categoryTitle - The title of the selected category.
 */
const selectCategory = (categoryId: string, categoryTitle: string): void => {
  selectedCategory.value = categoryId
  selectedCategoryTitle.value = categoryTitle
  closeDropdown()
  onCategoryChange()
}

/**
 * Loads the categories when the component is mounted.
 */
onMounted(async () => {
  await loadCategories()
})
</script>

<style scoped></style>
