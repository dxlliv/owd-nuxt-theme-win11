import { useDesktopWorkspaceManager } from '@owdproject/nuxt/runtime/composables/workspace/useDesktopWorkspaceManager'

/**
 * Compatibility shim for npm-installed apps (e.g. `@owdproject/nuxt-app-debug`)
 * that expect `useWorkspaceManager`; the current `@owdproject/nuxt` exposes the
 * same API as `useDesktopWorkspaceManager`.
 *
 * The `imports.transform.include` option in `nuxt.config.ts` lets Nuxt inject
 * this auto-import into those node_modules components.
 */
export function useWorkspaceManager() {
  return useDesktopWorkspaceManager()
}
