<template>
  <section class="card-list-wrapper" aria-label="Monster list">
    <header>
      <h1 class="card-list-title">{{ title }}</h1>
    </header>
    <ul class="card-list">
      <EmptyFavoriteMessage v-if="cards.length === 0" :message="message" />
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
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps<{
  cards: Card[]
  title: string
  cardType: string
  favoriteCards: Card[]
}>()
const emit = defineEmits(['toggleFavorite'])

/**
 * Checks if the given card is favorited.
 * @param {Card} card - The card to check.
 * @returns {boolean} True if the card is favorited, false otherwise.
 */
const isFavorited = (card: Card): boolean =>
  props.favoriteCards.some((favCard) => favCard.id === card.id)

/**
 * Emits an event to toggle the favorite status of the given card.
 * @param {Card} card - The card to toggle favorite status for.
 */
const toggleFavorite = (card: Card): void => {
  emit('toggleFavorite', card)
}

/**
 * Computes the message to display when there are no cards.
 * @returns {string} The message to display.
 */
const message = computed((): string =>
  props.cardType === 'favorite' ? 'No monstrous crushes yet!' : 'No top terrors found!',
)
</script>

<style scoped>
.card-list-wrapper {
  padding-bottom: 40px;
}

.card-list-title {
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-tertiary);
  font-size: var(--large-font-size);
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
    background-color: var(--background-color);
    padding-right: 20px;
    padding-left: 20px;
  }
  .card-list-wrapper:first-child {
    border-radius: 10px 10px 0px 0px;
  }
}
</style>
