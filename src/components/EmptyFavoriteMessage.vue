<template>
  <div class="empty-favorites">
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ message: string }>()
</script>

<style scoped>
.empty-favorites {
  color: #c799d9;
  font-size: 16px;

  white-space: nowrap;
}
</style>
