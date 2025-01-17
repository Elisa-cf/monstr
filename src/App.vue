<template>
  <header><NavBar /> <RouterView /></header>
  <main>
    <HomeView />
  </main>
</template>

<script setup lang="ts">
import HomeView from './views/HomeView.vue'
import NavBar from './components/NavBar.vue'
</script>

<style scoped></style>
