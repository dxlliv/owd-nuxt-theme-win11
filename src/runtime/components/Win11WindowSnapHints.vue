<script setup lang="ts">
import WindowSnapHintsBase from 'nuxt-desktop/runtime/components/window/DesktopCoreWindowSnapHintsBase.vue'
</script>

<template>
  <WindowSnapHintsBase />
</template>

<style scoped>
:deep(.owd-window-snap-hints__zone) {
  border-color: rgba(0, 120, 212, 0.9);
  background: rgba(0, 120, 212, 0.15);
  border-radius: 8px;
}
</style>
