<template>
  <seciton class="error-page">
    <h1 class="error-code">404</h1>
    <h2 class="error-message">Oopsy! Nothing was found</h2>
    <p class="error-description">
      The page you are looking for might have been removed, had its name changed, or is temporarily
      unavailable.
    </p>
    <RouterLink to="/" class="home-link">Return to homepage</RouterLink>
  </seciton>
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
  background-color: var(--background-color);
}

.error-code {
  font-size: 100px;
  margin: 0;
  color: var(--color-secondary);
}

.error-message {
  font-size: var(--large-font-size);
  margin: 20px 0;
  color: var(--color-secondary);
}

.error-description {
  font-size: var(--xs-font-size);
  color: var(--color-primary);
  margin-bottom: 30px;
}

.home-link {
  font-size: var(--small-font-size);
  color: var(--color-purple-1);
  text-decoration: none;
}

.home-link:hover {
  text-decoration: underline;
  color: var(--color-purple-2);
}
</style>
