<template>
  <h1 class="title">Your favorites</h1>
  <ul class="card-list">
    I'm the fucking list of favorites
    <!-- <CardListItem v-for="card in cards" :key="card.id" :card="card" /> -->
  </ul>
</template>

<script setup lang="ts">
// import CardListItem from '../components/CardListItem.vue'
import type { Card } from '../types/interfaces'
import { defineProps } from 'vue'

defineProps<{ cards: Card[] }>()
</script>

<style scoped>
.title {
  text-transform: capitalize;
  letter-spacing: 0.5px;
  color: #394e64;
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
