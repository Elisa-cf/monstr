<template>
  <div class="spinner-wrapper">
    <div class="lds-heart">
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.spinner-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vi;
  background-color: var(--background-color);
  z-index: 1000;
}

.lds-heart,
.lds-heart div,
.lds-heart div:after,
.lds-heart div:before {
  box-sizing: border-box;
}
.lds-heart {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  transform-origin: 40px 40px;
}
.lds-heart div {
  top: 28px;
  left: 28px;
  position: absolute;
  width: 32px;
  height: 32px;
  background: #6f4181;
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
.lds-heart div:after,
.lds-heart div:before {
  content: ' ';
  position: absolute;
  display: block;
  width: 32px;
  height: 32px;
  background: #6f4181;
}
.lds-heart div:before {
  left: -24px;
  border-radius: var(--rounded-border-radius) 0 0 var(--rounded-border-radius);
}
.lds-heart div:after {
  top: -24px;
  border-radius: var(--rounded-border-radius) var(--rounded-border-radius) 0 0;
}

@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}

@media (min-width: 1024px) {
  .spinner-wrapper {
    height: 100vh;
    margin-top: -20px;
  }
}
</style>
