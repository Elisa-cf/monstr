<template>
  <div class="filter-container">
    <label for="sort-select" class="filter-label">Sort by</label>
    <div class="custom-select" @click="toggleDropdown">
      <div class="selected-option">
        <i
          :class="
            sortedBy === 'ascendent'
              ? 'pi pi-sort-amount-up filter-icon'
              : 'pi pi-sort-amount-down filter-icon'
          "
        ></i>

        <p>
          {{ sortedBy === 'ascendent' ? optionText.ascendent : optionText.descendent }}
        </p>
        <i class="pi pi-chevron-down chevron-icon"></i>
      </div>
      <!-- Close the dropdown when clicking outside -->
      <ul v-if="isDropdownOpen" class="options-list">
        <li
          :class="{ selected: 'ascendent' === sortedBy }"
          @click="
            () => {
              selectSort('ascendent')
              toggleDropdown()
            }
          "
        >
          {{ optionText.ascendent }}
        </li>
        <li
          :class="{ selected: 'descendent' === sortedBy }"
          @click="
            () => {
              selectSort('descendent')
              toggleDropdown()
            }
          "
        >
          {{ optionText.descendent }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const emit = defineEmits(['sort'])
const sortedBy = ref('ascendent')

const isDropdownOpen = ref(false)

const optionText = ref({
  ascendent: 'A-Z (Ascending the Abyss)',
  descendent: 'Z-A (Creeps at the Top)',
})

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

/**
 * Selects the sort option.
 *
 * @param {string} sortBy The sort option to select.
 */
const selectSort = (sortBy: string): void => {
  sortedBy.value = sortBy
  emit('sort', sortedBy.value)
  closeDropdown()
}

/**
 * Updates the option text based on the window width.
 */
const updateOptionText = (): void => {
  optionText.value =
    window.innerWidth < 1400
      ? { ascendent: 'A-Z', descendent: 'Z-A' }
      : { ascendent: 'A-Z (Ascending the Abyss)', descendent: 'Z-A (Creeps at the Top)' }
}

onMounted(() => {
  updateOptionText()
  window.addEventListener('resize', updateOptionText)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateOptionText)
})
</script>

<style scoped></style>
