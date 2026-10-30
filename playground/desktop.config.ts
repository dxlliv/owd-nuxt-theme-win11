import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  theme: '@owdproject/nuxt-theme-win11',
  modules: ['@owdproject/nuxt-module-fs', '@owdproject/nuxt-module-pinia-persistence'],
  apps: [
    '@owdproject/nuxt-app-classic-audioplayer',
    '@owdproject/nuxt-app-classic-videoplayer',
    '@owdproject/nuxt-app-gridsky',
    '@owdproject/nuxt-app-slowroads',
    '@owdproject/nuxt-app-wasmboy',
    '@owdproject/nuxt-app-terminal',
    '@owdproject/nuxt-app-youtube',
    '@owdproject/nuxt-app-soundcloud',
  ],
  systemBar: { enabled: true, startButton: true },
  terminal: {
    welcomeMessage: 'Welcome to Windows 11',
    prompt: 'PS C:\\Users\\Guest>',
  },
  fs: {
    mounts: {
      '/mnt/test': '/test-small.zip',
    },
  },
})
