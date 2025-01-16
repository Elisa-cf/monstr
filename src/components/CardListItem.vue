<template>
  <li class="card-item">
    <div class="card-image-container">
      <img class="card-image" :src="getImageSrc(props.card.id)" :alt="props.card.name" />
      <i
        :class="['heart-icon', isFavorited ? 'pi pi-heart-fill favorited' : 'pi pi-heart']"
        @click="toggleFavorite"
      ></i>
    </div>

    <span class="card-name">{{ props.card.name }}</span>
  </li>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import type { Card } from '../types/interfaces'

const props = defineProps<{ card: Card }>()
const isFavorited = ref(false)

const toggleFavorite = () => {
  isFavorited.value = !isFavorited.value
}

const getImageSrc = (id: string) => {
  // Use RoboHash to generate unique images based on the id
  return `https://robohash.org/${id}.png?set=set2`
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
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
}

.card-item:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  transform: scale(1.05);
}

.card-item:hover .card-image-container {
  background-color: #c8dde6;
}

.card-image-container {
  flex-shrink: 0;
  padding: 0 16px;
  background-color: #e8f5e9;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
  max-width: 160px;
  display: flex;
  justify-content: center;
  position: relative;
}

.heart-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #394e64;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.heart-icon:hover,
.heart-icon:active {
  transform: scale(1.5);
}

.favorited {
  color: red;
}

.card-image {
  max-width: 100%;
  height: auto;
}

.card-name {
  padding: 14px;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  font-family: ui-sans-serif;
  color: #394e64;
  font-size: 20px;
  flex-grow: 1;
}
</style>
