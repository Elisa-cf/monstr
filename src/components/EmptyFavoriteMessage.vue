<template>
  <div class="empty-favorites" role="status">
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ message: string }>()
</script>

<style scoped>
.empty-favorites {
  color: var(--color-purple-1);
  font-size: var(--xs-font-size);
  white-space: nowrap;
}
</style>
