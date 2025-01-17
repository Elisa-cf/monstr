<template>
  <header>
    <nav class="nav">
      <RouterLink to="/">
        <div class="logo-container">
          <h1 class="logo">MONSTR</h1>
        </div>
      </RouterLink>
      <p class="title">Like Tinder, but monstrous!</p>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.nav {
  height: 50px;
  background-color: #1b1b1b;
  display: flex;
  width: 100%;
  align-items: center;
  box-shadow: black 0px 3px 3px;
}

.title {
  display: none;
}

.logo-container {
  width: 6rem;
}

@media (min-width: 768px) {
  .logo-container {
    width: 8rem;
  }
}

@media (min-width: 1024px) {
  .logo-container {
    width: 10rem;
  }
  .title {
    font-style: italic;
    font-size: 30px;
    color: #6f4181;
    font-weight: bold;
    text-shadow: white 1px 1px 0px;
    display: block;
  }
  .nav {
    background-color: rgba(255, 255, 255, 0.632);
    justify-content: space-between;
    z-index: 2;
    position: relative;
  }
}

.logo {
  font-family: 'Plaster', serif;
  padding: 0.5rem;
  border-radius: 0.375rem;
  text-align: center;
  color: #90f032;
  font-size: 40px;
  font-weight: bold;
  text-shadow: black 3px 3px 1px;
}

.nav-links {
  display: none;
}

@media (min-width: 640px) {
  .nav-links {
    display: flex;
    gap: 0.5rem;
  }
}

.nav-button {
  padding: 0.5rem;
  border-radius: 0.375rem;
  text-align: center;
  color: #3182ce;
  font-size: 1.125rem;
  font-weight: bold;
}
</style>
