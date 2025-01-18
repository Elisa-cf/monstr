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
  background-color: #1b1b1b;
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
  color: #90f032;
  font-size: 40px;
  font-weight: bold;
  text-shadow: black 3px 3px 1px;
}
</style>
