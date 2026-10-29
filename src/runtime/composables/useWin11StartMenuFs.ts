import { inject, ref, type Ref } from 'vue'

/** Recent file row when `@owdproject/module-nuxt-fs` is available (shape matches module-fs). */
export type Win11RecentFileEntry = {
  path: string
  name?: string
  extension?: string
  openedAt: number
  size?: number
}

export type Win11StartMenuFsApi = {
  recentFiles: Ref<Win11RecentFileEntry[]>
  loadRecentFiles: () => void
  recordRecentFile: (path: string) => void
  filterRecentFiles: (query: string) => Win11RecentFileEntry[]
  openRecentFile: (entry: Win11RecentFileEntry) => Promise<boolean>
}

export const win11StartMenuFsKey = Symbol('owdWin11StartMenuFs')

function useStartMenuFsStub(): Win11StartMenuFsApi {
  const recentFiles = ref<Win11RecentFileEntry[]>([])

  return {
    recentFiles,
    loadRecentFiles: () => {},
    recordRecentFile: () => {},
    filterRecentFiles: () => [],
    openRecentFile: async () => false,
  }
}

/**
 * Optional VFS recent-files API for the Start menu.
 * With `@owdproject/module-nuxt-fs` installed, `win11-module-fs-recent.client` plugin provides the real implementation.
 */
export function useWin11StartMenuFs(): Win11StartMenuFsApi {
  return inject(win11StartMenuFsKey, null) ?? useStartMenuFsStub()
}
