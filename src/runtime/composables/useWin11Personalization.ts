import {
  persistPersonalization,
  win11Personalization,
  type Win11Appearance,
  type Win11WindowSurface,
} from '../utils/win11Personalization'

/**
 * Read/write Win11 personalization (theme-local state, not the core store).
 * Mirrors the Paper theme's theme-local approach (`usePaperAppearance`).
 */
export function useWin11Personalization() {
  function setWindowSurface(value: Win11WindowSurface) {
    win11Personalization.windowSurface = value
    persistPersonalization()
  }

  function setAppearance(value: Win11Appearance) {
    win11Personalization.appearance = value
    persistPersonalization()
  }

  function setWindowTint(value: string) {
    win11Personalization.windowTint = value
    persistPersonalization()
  }

  return {
    personalization: win11Personalization,
    setWindowSurface,
    setAppearance,
    setWindowTint,
  }
}
