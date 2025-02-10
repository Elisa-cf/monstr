<template>
  <div class="button-container">
    <button
      class="random-button"
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
      @click="emitRandomCard"
    >
      <span :class="{ tremble: isTrembling }">{{ buttonText }}</span>
      <div v-if="buttonText === 'Unleash Your Monster Mate!'" class="shining-effect"></div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['updateFilters', 'pickRandomCard'])
const isTrembling = ref(false)
const buttonText = ref('Unleash Your Monster Mate!')
const trembleTimeout = ref<ReturnType<typeof setTimeout> | null>(null)

/**
 * Starts the trembling animation.
 */
const startTremble = (): void => {
  isTrembling.value = true
  trembleTimeout.value = setTimeout(() => {
    isTrembling.value = false
  }, 1000)
}

/**
 * Stops the trembling animation.
 */
const stopTremble = (): void => {
  if (trembleTimeout.value) {
    clearTimeout(trembleTimeout.value)
    trembleTimeout.value = null
  }
  isTrembling.value = false
}

/**
 * Handles the mouse over event.
 */
const handleMouseOver = (): void => {
  buttonText.value = 'Your Date’s Just a Click Away!'
  startTremble()
}

/**
 * Handles the mouse leave event.
 */
const handleMouseLeave = (): void => {
  buttonText.value = 'Unleash Your Monster Mate!'
  stopTremble()
}

/**
 * Emits an event to pick a random card.
 */
const emitRandomCard = (): void => {
  emit('pickRandomCard')
}
</script>

<style scoped>
@import '@/assets/animations.css';
.button-container {
  display: flex;
  justify-content: center;
  position: relative;
}

.random-button {
  padding: 12px 24px;
  font-size: var(--small-font-size);
  background-color: var(--color-purple-1);
  color: var(--color-grey-1);
  border: none;
  border-radius: var(--medium-border-radius);
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  position: relative;
  overflow: hidden;
}

.random-button:hover {
  background-color: var(--color-purple-2);
  color: white;
  transform: scale(1.1);
}

@media (min-width: 1024px) {
  .random-button {
    font-size: var(--xs-font-size);
    padding: 10px 20px;
  }
}
</style>
