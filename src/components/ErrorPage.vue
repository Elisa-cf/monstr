<template>
  <div class="error-page">
    <h1>404</h1>
    <h2>Oopsy! Nothing was found</h2>
    <p>
      The page you are looking for might have been removed, had its name changed, or is temporarily
      unavailable.
    </p>
    <RouterLink to="/" class="home-link">Return to homepage</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.error-page {
  text-align: center;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1b1b1b;
}

.error-page h1 {
  font-size: 100px;
  margin: 0;
  color: #8cef30;
}

.error-page h2 {
  font-size: 24px;
  margin: 20px 0;
  color: #8cef30;
}

.error-page p {
  font-size: 16px;
  color: #aee68c;
  margin-bottom: 30px;
}

.home-link {
  font-size: 18px;
  color: #c799d9;
  text-decoration: none;
}

.home-link:hover {
  text-decoration: underline;
  color: #6f4181;
}
</style>
