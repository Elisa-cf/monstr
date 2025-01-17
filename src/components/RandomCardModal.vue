<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <button class="close-button" @click="close">
        <i class="pi pi-times"></i>
      </button>
      <div v-if="card">
        <h2>{{ card.name }}</h2>
        <img :src="getImageSrc(card.id)" :alt="card.name" />
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

defineProps<{ card: Card | null }>()
const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}

const getImageSrc = (id: string) => {
  return `https://robohash.org/${id}.png?set=set2&size=200x200`
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
  cursor: pointer;
}

/* Modal Content */
.modal-content {
  top: 20%;
  background: white;
  border-radius: 50%;
  width: 85%;
  max-width: 350px;
  aspect-ratio: 1 / 1;
  text-align: center;
  position: relative;
  background-color: #c799d9;
  z-index: 10000;
  color: #394e64;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Rounded Image */
.modal-content img {
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

/* x Modal Button */
.close-button {
  position: absolute;
  top: 30px;
  right: 8px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  z-index: 10002;
  background: #c799d9;
  border-radius: 50%;
  padding: 12px;
  font-size: 30px;
  color: #394e64;
  display: block;
}
</style>
