<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <button class="modal-close-button" @click="close">
        <i class="pi pi-times"></i>
      </button>
      <div v-if="card">
        <h2>{{ card.name }}</h2>
        <img :src="getImageSrc(card.id)" :alt="card.name" class="modal-image" />
      </div>
    </div>

    <!-- Fireworks animation after opening modal -->
    <FireworksAnimation />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { Card } from '../types/interfaces'
import FireworksAnimation from '../components/FireworksAnimation.vue'
import { getImageSrc } from '../utils/ImageUtils'

defineProps<{ card: Card | null }>()
const emit = defineEmits(['close'])

/**
 * Emits an event to close the modal.
 */
const close = () => {
  emit('close')
}
</script>

<style scoped>
/* Modal Background */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: start;
  z-index: 9999;
}

/* Modal Content */
.modal-content {
  top: 20%;
  background: white;
  border-radius: var(--rounded-border-radius);
  width: 85%;
  max-width: 350px;
  aspect-ratio: 1 / 1;
  text-align: center;
  position: relative;
  background-color: var(--color-purple-1);
  z-index: 10000;
  color: var(--color-grey-1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* x Modal Button */
.modal-close-button {
  position: absolute;
  top: 30px;
  right: 8px;
  background: none;
  border: none;
  font-size: var(--xl-font-size);
  z-index: 10002;
  background: var(--color-purple-1);
  border-radius: var(--rounded-border-radius);
  padding: 12px;
  color: var(--color-grey-1);
  display: block;
}

/* Rounded Image */
.modal-image {
  width: 100%;
  border-radius: var(--rounded-border-radius);
  object-fit: cover;
  object-position: center;
}
</style>
