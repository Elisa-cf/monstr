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

let trembleTimeout: ReturnType<typeof setTimeout>

const startTremble = () => {
  isTrembling.value = true
  trembleTimeout = setTimeout(() => {
    isTrembling.value = false
  }, 1000)
}

const stopTremble = () => {
  clearTimeout(trembleTimeout)
  isTrembling.value = false
}

const handleMouseOver = () => {
  buttonText.value = 'Your Date’s Just a Click Away!'
  startTremble()
}

const handleMouseLeave = () => {
  buttonText.value = 'Unleash Your Monster Mate!'
  stopTremble()
}

const emitRandomCard = () => {
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
  font-size: 18px;
  background-color: #c799d9;
  color: #394e64;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  position: relative;
  overflow: hidden;
}

.random-button:hover {
  background-color: #6f4181;
  color: white;
  transform: scale(1.1);
}

@media (min-width: 1024px) {
  .random-button {
    font-size: 16px;
    padding: 10px 20px;
  }
}
</style>
