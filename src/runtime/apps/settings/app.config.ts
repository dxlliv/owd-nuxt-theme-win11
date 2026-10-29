import type { IApplicationController } from '@owdproject/nuxt'

export default {
  id: 'org.owdproject.settings',
  title: 'Settings',
  singleton: true,
  icon: 'mdi:cog-outline',
  provides: {
    name: 'settings',
    entry: 'settings',
  },
  windows: {
    main: {
      component: () => import('./components/Window/WindowSettings.vue'),
      resizable: true,
      size: {
        width: 1080,
        height: 720,
        minWidth: 760,
        minHeight: 520,
      },
      position: {
        x: 120,
        y: 80,
        z: 0,
      },
    },
  },
  entries: {
    settings: {
      command: 'settings',
    },
  },
  commands: {
    settings: (app: IApplicationController) => {
      app.openWindow('main')
    },
  },
}
