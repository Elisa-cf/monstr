<template>
  <header>
    <nav class="nav">
      <RouterLink to="/">
        <div class="logo-container">
          <h1 class="logo">MONSTR</h1>
        </div>
      </RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  z-index: 1000;
  height: 50px;
  background-color: var(--background-color);
  display: flex;
  width: 100%;
  align-items: center;
  box-shadow: black 0px 3px 3px;
}

.logo {
  font-family: 'Plaster', serif;
  padding: 0.5rem;
  border-radius: 0.375rem;
  text-align: center;
  color: var(--color-secondary);
  font-size: var(--xxl-font-size);
  font-weight: bold;
  text-shadow: black 3px 3px 1px;
}
</style>
