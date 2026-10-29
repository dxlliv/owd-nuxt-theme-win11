<script setup lang="ts">
import { useSlots, computed, useAttrs, withDefaults } from 'vue'
import type { IWindowController } from '@owdproject/core'
import { useWindowDragHandlers } from '@owdproject/nuxt/runtime/composables/useWindowDragHandlers'

const props = withDefaults(
  defineProps<{
    window?: IWindowController
    content?: unknown
    chromePadding?: boolean
    frameClass?: string
  }>(),
  { chromePadding: true },
)

defineEmits([
  'drag:start',
  'drag:move',
  'drag:end',
  'resize:start',
  'resize:move',
  'resize:end',
])

defineOptions({ inheritAttrs: false })

const attrs = useAttrs()
const slots = useSlots()

const windowRootClass = computed(
  () => [attrs.class, props.frameClass].filter(Boolean),
)

const hasHeaderBelowNavSlot = computed(
  () => typeof slots['header-below-nav'] === 'function',
)

const cardRootClass = computed(
  () =>
    [
      'p-card--border',
      props.chromePadding === false ? 'desktop-explorer-frame-card--tight' : '',
    ]
      .filter(Boolean)
      .join(' '),
)

const { onDragStart, onDragEnd } = useWindowDragHandlers(
  () => props.window,
)
</script>

<template>
  <DesktopCoreWindow
    :class="windowRootClass"
    :window="props.window"
    :content="props.content"
    v-show="props.window?.state?.active !== false"
    @drag:start="onDragStart"
    @drag:end="onDragEnd"
  >
    <Card :class="cardRootClass">
      <template #header>
        <div class="desktop-window__header-stack">
          <DesktopWindowNav>
            <template #prepend>
              <slot name="nav-prepend" />
            </template>
            <template v-if="$slots['nav-title']" #title>
              <slot name="nav-title" />
            </template>
            <template #append>
              <slot name="nav-append" />
            </template>
          </DesktopWindowNav>
          <div
            v-if="hasHeaderBelowNavSlot"
            class="desktop-window__header-below-nav"
          >
            <slot name="header-below-nav" />
          </div>
        </div>
      </template>
      <template #content>
        <DesktopWindowContent :explorer="props.chromePadding === false">
          <slot />
        </DesktopWindowContent>
      </template>
    </Card>
  </DesktopCoreWindow>
</template>

<style scoped lang="scss">
.desktop-window__header-stack {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.desktop-window__header-below-nav {
  min-width: 0;
}
</style>
