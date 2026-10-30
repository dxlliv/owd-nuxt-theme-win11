import {
  createResolver,
  addComponentsDir,
  addImportsDir,
  addPlugin,
  installModule,
} from '@nuxt/kit'
import { defineDesktopTheme, hasDesktopModule } from '@owdproject/nuxt'
import {
  registerTailwindPath,
  registerThemeTailwindPath,
} from '@owdproject/nuxt-kit-tailwind/kit/registerTailwindPath'
import {
  WIN11_EXPLORER_QUICK_ACCESS_SEED,
  WIN11_EXPLORER_SPECIAL_FOLDERS,
} from './explorerNav.defaults'

export default defineDesktopTheme({
  meta: {
    name: 'desktop-theme-win11',
  },
  defaults: {
    name: 'win11',
    systemBar: {
      enabled: false,
      position: 'bottom',
      startButton: false,
    },
    workspaces: {
      enabled: true,
    },
    windows: {
      position: 'fixed',
    },
    fs: {
      defaultUserHome: '/Users/Guest',
      mounts: {
        '/Users': 'WebStorage',
      },
    },
    explorer: {
      quickAccess: WIN11_EXPLORER_QUICK_ACCESS_SEED,
      quickAccessExtra: [],
      quickAccessOverride: [],
      specialFolders: WIN11_EXPLORER_SPECIAL_FOLDERS,
      specialFoldersExtra: [],
      specialFoldersOverride: [],
      mountLabels: {
        '/Users': 'Local Disk',
        '/home': 'Local Disk',
      },
    },
  },
  async setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    await installModule('@owdproject/nuxt-kit-primevue')

    registerThemeTailwindPath(nuxt, import.meta.url)

    if (hasDesktopModule(nuxt, 'nuxt-fs')) {
      addPlugin({
        src: resolve('./runtime/plugins/win11-module-fs-recent.client.ts'),
        mode: 'client',
      })
    }

    addComponentsDir({
      path: resolve('./runtime/components'),
      pathPrefix: false,
    })

    registerTailwindPath(nuxt, resolve('./runtime/pages/**/*.{vue,mjs,ts}'))

    nuxt.hook('i18n:registerModule', (register) => {
      register({
        langDir: resolve('./i18n'),
        locales: [
          {
            code: 'en',
            file: 'locales/en.ts',
          },
        ],
      })
    })

    addImportsDir(resolve('./runtime/composables'))

    addPlugin({
      src: resolve('./runtime/plugins/50.desktop-theme-win11-dialogs.client.ts'),
      mode: 'client',
    })

    addPlugin({
      src: resolve('./runtime/apps/settings/plugin.ts'),
      mode: 'client',
    })

    addComponentsDir({
      path: resolve('./runtime/apps/settings/components'),
    })

    if (hasDesktopModule(nuxt, 'nuxt-fs')) {
      addPlugin({
        src: resolve('./runtime/apps/explorer/plugin.ts'),
        mode: 'client',
      })

      addComponentsDir({
        path: resolve('./runtime/apps/explorer/components'),
      })
    }

    nuxt.options.nitro.publicAssets = [
      {
        dir: resolve('./public'),
      },
    ]
  },
})
