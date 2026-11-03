import { defineNuxtPlugin } from 'nuxt/app'
import { applyPersistedPersonalization } from '../utils/win11Personalization'

/**
 * Hydrate Win11 personalization from localStorage before the shell mounts.
 * Writes are persisted by `useWin11Personalization` setters.
 */
export default defineNuxtPlugin(() => {
  applyPersistedPersonalization()
})
