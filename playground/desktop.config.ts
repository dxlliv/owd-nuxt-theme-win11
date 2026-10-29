import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  theme: '@dxlliv/owd-theme-nuxt-win11',
  modules: ['@owdproject/module-nuxt-fs', '@owdproject/module-nuxt-pinia-persistence'],
  apps: [
    '@owdproject/app-nuxt-classic-audioplayer',
    '@owdproject/app-nuxt-classic-videoplayer',
    '@owdproject/app-gridsky',
    '@owdproject/app-slowroads',
    '@owdproject/app-nuxt-wasmboy',
    '@owdproject/app-nuxt-terminal',
    '@owdproject/app-nuxt-youtube',
    '@owdproject/app-nuxt-soundcloud',
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
