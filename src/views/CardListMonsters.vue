<template>
  <section class="card-list-wrapper">
    <h1 class="title">{{ title }}</h1>
    <ul class="card-list">
      <EmptyFavoriteMessage v-if="cards.length === 0" />
      <CardListItem
        v-for="card in cards"
        :key="card.id"
        :card="card"
        :isFavorited="isFavorited(card)"
        @toggleFavorite="toggleFavorite"
      />
    </ul>
  </section>
</template>
<script setup lang="ts">
import CardListItem from '../components/CardListItem.vue'
import EmptyFavoriteMessage from '@/components/EmptyFavoriteMessage.vue'
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
.card-list-wrapper {
  padding-bottom: 40px;
}

.title {
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #c4ffab;
  font-size: 24px;
  font-weight: 700;
  line-height: 2.25;
  letter-spacing: 0.3px;
}

.card-list {
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
  .card-list-wrapper {
    background-color: #1b1b1b;
    padding-right: 20px;
    padding-left: 20px;
  }
  .card-list-wrapper:first-child {
    border-radius: 10px 10px 0px 0px;
  }
}
</style>
