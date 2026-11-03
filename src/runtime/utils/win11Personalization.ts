import { reactive } from 'vue'

export type Win11WindowSurface = 'acrylic' | 'solid'
export type Win11Appearance = 'dark' | 'light'

export interface Win11PersonalizationState {
  windowSurface: Win11WindowSurface
  appearance: Win11Appearance
  windowTint: string
}

export const WIN11_PERSONALIZATION_STORAGE_KEY = 'owd-win11-personalization'

export const DEFAULT_WIN11_PERSONALIZATION: Win11PersonalizationState = {
  windowSurface: 'acrylic',
  appearance: 'dark',
  windowTint: '#2d2d30',
}

/**
 * Shared personalization state — theme-local, not part of the core desktop store.
 * Hydrated and persisted by the `win11-personalization.client` plugin.
 */
export const win11Personalization = reactive<Win11PersonalizationState>({
  ...DEFAULT_WIN11_PERSONALIZATION,
})

export function isWin11WindowSurface(
  value: unknown,
): value is Win11WindowSurface {
  return value === 'acrylic' || value === 'solid'
}

export function isWin11Appearance(value: unknown): value is Win11Appearance {
  return value === 'dark' || value === 'light'
}

function isWin11WindowTint(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

export function readPersistedPersonalization():
  | Partial<Win11PersonalizationState>
  | undefined {
  if (typeof localStorage === 'undefined') return undefined

  const raw = localStorage.getItem(WIN11_PERSONALIZATION_STORAGE_KEY)
  if (!raw) return undefined

  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>
    const result: Partial<Win11PersonalizationState> = {}

    if (isWin11WindowSurface(parsed.windowSurface)) {
      result.windowSurface = parsed.windowSurface
    }
    if (isWin11Appearance(parsed.appearance)) {
      result.appearance = parsed.appearance
    }
    if (isWin11WindowTint(parsed.windowTint)) {
      result.windowTint = parsed.windowTint
    }

    return result
  } catch {
    return undefined
  }
}

/** Merge any persisted preferences over the defaults (client-only). */
export function applyPersistedPersonalization() {
  const persisted = readPersistedPersonalization()
  if (!persisted) return

  Object.assign(win11Personalization, persisted)
}

export function persistPersonalization() {
  if (typeof localStorage === 'undefined') return

  localStorage.setItem(
    WIN11_PERSONALIZATION_STORAGE_KEY,
    JSON.stringify({
      windowSurface: win11Personalization.windowSurface,
      appearance: win11Personalization.appearance,
      windowTint: win11Personalization.windowTint,
    }),
  )
}
