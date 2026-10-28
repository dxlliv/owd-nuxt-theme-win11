import { defineDesktopConfig } from '@owdproject/core'

export default defineDesktopConfig({
  theme: '@owdproject/theme-win11',
  modules: ['@owdproject/module-fs', '@owdproject/nuxt-persistence-pinia'],
  apps: [
    '@owdproject/app-classic-audioplayer',
    '@owdproject/app-classic-videoplayer',
    '@owdproject/app-gridsky',
    '@owdproject/app-slowroads',
    '@owdproject/app-wasmboy',
    '@owdproject/app-terminal',
    '@owdproject/app-youtube',
    '@owdproject/app-soundcloud',
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
