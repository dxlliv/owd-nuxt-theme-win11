export default {
  win11: {
    taskbar: {
      search: 'Search',
      runningApps: 'Open apps',
      wifi: 'Network',
      volume: 'Volume',
      battery: 'Battery power',
      tray: 'Notification area',
      taskView: 'Task View — desktops overview',
    },
    taskView: {
      overlayAria: 'Task View',
      openWindows: 'Open windows',
      noOpenWindows: 'No open windows',
    },
    settings: {
      home: 'Home',
      homeLead: 'Find a setting, or browse categories below.',
      searchPlaceholder: 'Find a setting',
      recommended: 'Recommended settings',
      system: 'System',
      systemHomeDesc: 'Display, sound, notifications, power',
      systemAboutTitle: 'About',
      systemDeviceName: 'Device name',
      systemEdition: 'Edition',
      systemVersion: 'Version',
      systemPlaceholder:
        'More system pages (notifications, power, storage) will appear here.',
      personalization: {
        title: 'Personalization',
        homeDesc: 'Background, colors, themes',
        windowEffectTitle: 'Window effect',
        windowEffectDesc: 'Choose how window surfaces look on the desktop.',
        windowEffectAcrylic: 'Acrylic',
        windowEffectAcrylicDesc: 'Translucent blur with depth',
        windowEffectSolid: 'Solid',
        windowEffectSolidDesc: 'Flat tinted surfaces',
        tintTitle: 'Window tint',
        tintDesc: 'Pick a tint used when Solid is selected.',
        customTint: 'Custom tint color',
        appearanceTitle: 'Choose your mode',
        appearanceDesc: 'Select light or dark mode for apps and surfaces.',
        appearanceDark: 'Dark',
        appearanceLight: 'Light',
      },
    },
    start: {
      ariaLabel: 'Start menu',
      searchPlaceholder: 'Search for apps, settings, and documents',
      pinned: 'Pinned',
      showAll: 'Show all >',
      pinnedHint:
        'Pin apps from All apps — use the pin on each row (stored on this device).',
      recommended: 'Recommended',
      recent: 'Recent',
      allApps: 'All',
      pinToStart: 'Pin to Start',
      unpin: 'Unpin from Start',
      noResults: 'No matching apps',
      workspaces: 'Desktops',
      desktopN: 'Desktop {n}',
      addDesktop: 'New desktop',
      quickLinks: 'Quick links',
      runTerminal: 'Terminal',
      account: 'Account',
      documents: 'Documents',
      powerOff: 'Shut down',
      viewPrefix: 'View:',
      viewAria: 'All apps layout',
      viewCategory: 'Category',
      viewGrid: 'Grid',
      viewList: 'List',
      categories: {
        other: 'Other',
        systemTools: 'System Tools',
        games: 'Games',
        tools: 'Tools',
        productivity: 'Productivity',
      },
      context: {
        menuLabel: 'Start menu actions',
        moveLeft: 'Move to left',
        moveRight: 'Move to right',
        moveToFront: 'Move to front',
        unpinFromStart: 'Unpin from Start',
      },
    },
  },
  /** Alias for `@owdproject/nuxt-module-fs` prompts (`t('dialog.shortcutOverride.*')`). */
  dialog: {
    shortcutOverride: {
      confirm: {
        title: 'Confirm File Replace',
        message: 'The folder already contains a file named {name}.',
      },
    },
  },
  systemBar: {
    start: {
      button: {
        label: 'Start',
      },
    },
    applicationList: {
      empty: 'There are no applications',
    },
  },
  fs: {
    contextMenu: {
      open: 'Open',
      openInNewTab: 'Open in new tab',
      rename: 'Rename',
      delete: 'Delete',
      print: 'Print',
      sendTo: 'Send To',
      cut: 'Cut',
      copy: 'Copy',
      properties: 'Properties',
      createShortcut: 'Create Shortcut',
    },
  },
  apps: {
    explorer: {
      address: 'Address',
      menu: {
        file: 'File',
        edit: 'Edit',
        view: 'View',
        help: 'Help',
      },
      tabs: {
        ariaLabel: 'Folder tabs',
        newTab: 'New tab',
        closeTab: 'Close tab',
        thisPc: 'This PC',
      },
      nav: {
        openFolder: 'Open',
        pinToQuickAccess: 'Pin to Quick access',
        unpinFromQuickAccess: 'Unpin from Quick access',
        resizePane: 'Resize navigation pane',
      },
      breadcrumb: {
        ariaLabel: 'Address breadcrumb',
      },
      search: {
        placeholder: 'Search',
      },
      action: {
        yes: 'Yes',
        no: 'No',
        back: 'Back',
        forward: 'Forward',
        up: 'Up',
        undo: 'Undo',
        delete: 'Delete',
        properties: 'Properties',
        newFolder: 'New Folder',
        ok: 'OK',
        cancel: 'Cancel',
        close: 'Close',
        cut: 'Cut',
        copy: 'Copy',
        rename: 'Rename',
        paste: 'Paste',
        pasteShortcut: 'Paste shortcut',
        selectAll: 'Select All',
        invertSelection: 'Invert selection',
        refresh: 'Refresh',
        sortBy: 'Sort by',
        about: 'About Explorer',
      },
      layout: {
        largeIcons: 'Large Icons',
        smallIcons: 'Small Icons',
        list: 'List',
        details: 'Details',
      },
      sortBy: {
        name: 'Name',
        size: 'Size',
        date: 'Date Modified',
      },
      dialog: {
        deleteFile: {
          confirm: {
            title: 'Confirm File Delete',
            message: {
              toVoid: "Are you sure you want to delete '{fileName}'?",
              toTrash:
                "Are you sure you want to send '{fileName}' to the Recycle Bin?",
            },
          },
        },
        deleteFiles: {
          confirm: {
            title: 'Confirm Files Delete',
            message: {
              toVoid: 'Are you sure you want to delete {count} files?',
              toTrash:
                'Are you sure you want to send {count} files to the Recycle Bin?',
            },
          },
        },
        deleteFolder: {
          confirm: {
            title: 'Confirm Folder Delete',
            message:
              'Are you sure you want to remove the folder {name} and all its content?',
          },
        },
        fileOverride: {
          confirm: {
            title: 'Confirm File Replace',
            message: 'The folder already contains a file named {name}.',
          },
        },
        shortcutOverride: {
          confirm: {
            title: 'Confirm File Replace',
            message: 'The folder already contains a file named {name}.',
          },
        },
      },
    },
  },
}
