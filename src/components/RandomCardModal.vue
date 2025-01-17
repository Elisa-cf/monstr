<template>
  <div class="modal-overlay" @click.self="close">
    <!-- Modal Content -->
    <div class="modal-content">
      <button class="close-button" @click="close">
        <i class="pi pi-times"></i>
      </button>
      <div v-if="card">
        <div class="header"></div>
        <h2>{{ card.name }}</h2>
        <img :src="getImageSrc(card.id)" :alt="card.name" />
      </div>
    </div>

    <!-- Fireworks -->
    <div class="fireworks" style="left: 10%; top: 0"></div>
    <div class="fireworks" style="right: 30%; top: 10%; animation-delay: -0.4s"></div>
    <div class="fireworks" style="left: 20%; top: 30%; animation-delay: -1.7s"></div>
    <div class="fireworks" style="right: 40%; top: 20%; animation-delay: -2.1s"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { Card } from '../types/interfaces'

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

/* Close Button */
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
}

/* Rounded Image */
.modal-content img {
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

/* Icon inside the button */
.close-button .pi {
  font-size: 30px;
  color: #394e64;
  display: block;
}

/* Fireworks Styles */
.fireworks {
  position: absolute;
  width: 200px;
  height: 200px;
  background: url('https://imgservices-1252317822.image.myqcloud.com/image/081320210201435/e9951400.png')
    no-repeat;
  background-size: auto 150px;
  animation:
    fireworks 2s steps(24) infinite,
    random 8s steps(1) infinite;
  z-index: 10001;
  pointer-events: none;
}

/* Keyframes for Fireworks Animation */
@keyframes fireworks {
  0% {
    background-position: 0%;
  }
  50%,
  100% {
    background-position: 100% 100%;
  }
}

@keyframes random {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(200%, 50%) scale(1.5);
  }
  50% {
    transform: translate(80%, 80%) scale(2);
  }
  75% {
    transform: translate(20%, 60%) scale(1.2);
  }
}

/* Accessibility for reduced motion */
@media screen and (prefers-reduced-motion) {
  .fireworks {
    animation: none;
  }
}
</style>
