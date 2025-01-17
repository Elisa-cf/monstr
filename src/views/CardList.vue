<template>
  <h1 class="title">{{ title }}</h1>
  <ul class="card-list">
    <CardListItem
      v-for="card in cards"
      :key="card.id"
      :card="card"
      :isFavorited="isFavorited(card)"
      @toggleFavorite="toggleFavorite"
    />
  </ul>
</template>

<script setup lang="ts">
import CardListItem from '../components/CardListItem.vue'
import type { Card } from '../types/interfaces'
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{ cards: Card[]; title: string; favoriteCards: Card[] }>()
const emit = defineEmits(['toggleFavorite'])

const isFavorited = (card: Card) => {
  return props.favoriteCards.some((favCard) => favCard.id === card.id)
}
const toggleFavorite = (card: Card) => {
  emit('toggleFavorite', card)
}
</script>

<style scoped>
.title {
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #8cef30;
  font-family: ui-sans-serif;
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 2.25;
}
.card-list {
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

@media (min-width: 640px) {
  .card-list {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1024px) {
  .card-list {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
