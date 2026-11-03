<script setup lang="ts">
defineProps<{
  explorer?: boolean
}>()
</script>

<template>
  <DesktopCoreWindowContent>
    <div
      class="desktop-window-body"
      :class="{ 'desktop-explorer-body': explorer }"
    >
      <slot />
    </div>
  </DesktopCoreWindowContent>
</template>

<style scoped lang="scss">
:deep(.desktop-window__content) {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.desktop-window-body {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  height: 100%;
}

.desktop-explorer-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  height: 100%;
}
</style>
