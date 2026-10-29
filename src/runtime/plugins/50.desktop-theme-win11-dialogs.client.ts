import { defineNuxtPlugin } from 'nuxt/app'
import { setupDesktopDialogProvider } from '@owdproject/kit-nuxt-primevue/runtime/dialogs/setupDesktopDialogProvider'
import { createWin11DesktopDialogs } from '../utils/createWin11DesktopDialogs'

export default defineNuxtPlugin({
  name: 'desktop-theme-win11-dialogs',
  enforce: 'post',
  setup(nuxtApp) {
    setupDesktopDialogProvider(nuxtApp, createWin11DesktopDialogs)
  },
})
