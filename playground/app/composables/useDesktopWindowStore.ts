import { reactive, watchEffect } from 'vue'
import { useDesktopStore } from '@owdproject/nuxt/runtime/stores/storeDesktop'
import { useDesktopWorkspaceStore } from '@owdproject/nuxt/runtime/stores/storeDesktopWorkspace'

/**
 * Compatibility shim for npm-installed apps (e.g. `@owdproject/nuxt-app-debug`)
 * that expect a `desktop/window` store exposing `positionZ` + `workArea`.
 * The current `@owdproject/nuxt` desktop store doesn't ship that slice, so we
 * compose it from the existing desktop + workspace stores.
 *
 * The `imports.transform.include` option in `nuxt.config.ts` lets Nuxt inject
 * this auto-import into those node_modules components.
 */
export function useDesktopWindowStore() {
  const desktopStore = useDesktopStore()
  const workspaceStore = useDesktopWorkspaceStore()

  const state = reactive({
    positionZ: desktopStore.state.positionZ,
    workArea: { ...workspaceStore.workarea },
  })

  watchEffect(() => {
    state.positionZ = desktopStore.state.positionZ
  })
  watchEffect(() => {
    state.workArea = { ...workspaceStore.workarea }
  })

  return state
}
