import { defineNuxtPlugin } from 'nuxt/app'
import type { Ref } from 'vue'
import {
  win11StartMenuFsKey,
  type Win11RecentFileEntry,
  type Win11StartMenuFsApi,
} from '../composables/useWin11StartMenuFs'

/**
 * Wired only when `@owdproject/module-nuxt-fs` is listed in `defineDesktopConfig({ modules })`.
 * Dynamic import + `@vite-ignore` keeps themes buildable without module-fs installed.
 */
export default defineNuxtPlugin({
  name: 'win11-module-fs-recent',
  parallel: true,
  async setup(nuxtApp) {
    try {
      const [{ useFsRecentFiles }, { openVfsFile }] = await Promise.all([
        import(
          /* @vite-ignore */
          '@owdproject/module-nuxt-fs/dist/runtime/composables/useFsRecentFiles.js'
        ),
        import(
          /* @vite-ignore */
          '@owdproject/module-nuxt-fs/dist/runtime/utils/utilFsOpenFile.js'
        ),
      ])

      const fsRecent = useFsRecentFiles()
      const api: Win11StartMenuFsApi = {
        recentFiles: fsRecent.recentFiles as Ref<Win11RecentFileEntry[]>,
        loadRecentFiles: fsRecent.loadRecentFiles,
        recordRecentFile: fsRecent.recordRecentFile,
        filterRecentFiles: fsRecent.filterRecentFiles,
        openRecentFile: async (entry: Win11RecentFileEntry) => {
          const ok = await openVfsFile(entry.path)
          if (ok) fsRecent.recordRecentFile(entry.path)
          return ok
        },
      }

      nuxtApp.vueApp.provide(win11StartMenuFsKey, api)
    } catch {
      /* module-fs not installed or dist path unavailable */
    }
  },
})
