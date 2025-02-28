<template>
  <li class="card-item">
    <div class="card-image-container">
      <img class="card-image" :src="getImageSrc(props.card.id)" :alt="props.card.name" />
      <i
        :class="['heart-icon', props.isFavorited ? 'pi pi-heart-fill favorited' : 'pi pi-heart']"
        @click="toggleFavorite"
      ></i>
    </div>

    <span class="card-name">{{ props.card.name }}</span>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Card } from '../types/interfaces'
import { getImageSrc } from '../utils/ImageUtils'

const props = defineProps<{ card: Card; isFavorited: boolean }>()

const emit = defineEmits(['toggleFavorite'])

/**
 * Emits an event to toggle the favorite status of the given card.
 */
const toggleFavorite = (): void => {
  emit('toggleFavorite', props.card)
}
</script>

<style scoped>
.card-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: var(--medium-border-radius);
  transition: box-shadow 0.3s ease;
  background-color: white;
}

.card-item:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  transform: scale(1.1);
  border: 4px solid var(--color-secondary);
}

.card-image-container {
  flex-shrink: 0;
  padding: 0 var(--small-padding-size);
  background-color: var(--color-primary);
  border: 1px solid #ddd;
  border-radius: var(--medium-border-radius);
  width: 100%;
  max-width: 160px;
  display: flex;
  justify-content: center;
  position: relative;
}

.card-item:hover .card-image-container {
  background-color: var(--color-secondary);
  border-radius: 30px;
}

.card-image {
  max-width: 100%;
  height: auto;
}

.heart-icon {
  position: absolute;
  top: 6px;
  right: 8px;
  color: var(--color-grey-1);
  transition: transform 0.3s ease;
}

.heart-icon:hover,
.heart-icon:active {
  transform: scale(2);
}

.favorited {
  color: var(--color-red);
  transform: scale(2);
  top: 0px;
  right: 0px;
}

.card-name {
  padding: 14px;
  text-transform: capitalize;
  letter-spacing: 0.2px;
  line-height: 1.1;
  color: var(--color-grey-2);
  font-size: var(--medium-font-size);
  flex-grow: 1;
}
</style>
