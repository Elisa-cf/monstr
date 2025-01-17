<template>
  <div class="fireworks-container">
    <div class="fireworks" style="left: 10%; top: 0"></div>
    <div class="fireworks" style="right: 30%; top: 10%; animation-delay: -0.4s"></div>
    <div class="fireworks" style="left: 20%; top: 30%; animation-delay: -1.7s"></div>
    <div class="fireworks" style="right: 40%; top: 20%; animation-delay: -2.1s"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
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
