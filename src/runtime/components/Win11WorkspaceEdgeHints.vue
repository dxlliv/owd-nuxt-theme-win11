<script setup lang="ts">
import WorkspaceEdgeHintsBase from 'nuxt-desktop/runtime/components/workspace/DesktopCoreWorkspaceEdgeHintsBase.vue'
import { useAppConfig } from 'nuxt/app'
import { computed } from 'vue'

const appConfig = useAppConfig()

const workspacesEnabled = computed(
  () =>
    (appConfig.desktop as { workspaces?: { enabled?: boolean } })?.workspaces
      ?.enabled !== false,
)
</script>

<template>
  <WorkspaceEdgeHintsBase :enabled="workspacesEnabled">
    <template #left="{ desktopIndex }">
      <div class="win11-edge-hint">
        <span>{{ desktopIndex }}</span>
      </div>
    </template>
    <template #right="{ desktopIndex }">
      <div class="win11-edge-hint">
        <span>{{ desktopIndex }}</span>
      </div>
    </template>
  </WorkspaceEdgeHintsBase>
</template>

<style scoped>
.win11-edge-hint {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(0, 120, 212, 0.35);
  backdrop-filter: blur(12px);
}
</style>
