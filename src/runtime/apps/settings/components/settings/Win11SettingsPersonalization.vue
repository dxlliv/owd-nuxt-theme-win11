<script setup lang="ts">
import { useDesktopStore } from '@owdproject/nuxt/runtime/stores/storeDesktop'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const desktopStore = useDesktopStore()
const { t } = useI18n()

const personalization = computed(() => desktopStore.state.personalization)

const tintPresets = [
  { value: '#2d2d30', label: 'Graphite' },
  { value: '#3a2f3f', label: 'Plum' },
  { value: '#2f3848', label: 'Steel' },
  { value: '#36422e', label: 'Moss' },
  { value: '#3f3427', label: 'Bronze' },
]

function setSurface(value: 'acrylic' | 'solid') {
  desktopStore.setWindowSurface(value)
}

function setAppearance(value: 'dark' | 'light') {
  desktopStore.setAppearance(value)
}

function setTint(value: string) {
  desktopStore.setWindowTint(value)
}
</script>

<template>
  <section class="win11-settings__page win11-settings-p13n">
    <div class="win11-settings__group">
      <h2 class="win11-settings__group-title">
        {{ t('win11.settings.personalization.appearanceTitle') }}
      </h2>
      <p class="win11-settings__group-desc">
        {{ t('win11.settings.personalization.appearanceDesc') }}
      </p>

      <div class="win11-settings-p13n__theme-grid">
        <button
          type="button"
          class="win11-settings-p13n__theme-card"
          :class="{
            'win11-settings-p13n__theme-card--active':
              personalization.appearance === 'dark',
          }"
          @click="setAppearance('dark')"
        >
          <span class="win11-settings-p13n__theme-preview win11-settings-p13n__theme-preview--dark">
            <span class="win11-settings-p13n__theme-preview-bar" />
            <span class="win11-settings-p13n__theme-preview-pane" />
          </span>
          <span class="win11-settings-p13n__theme-label">
            {{ t('win11.settings.personalization.appearanceDark') }}
          </span>
        </button>

        <button
          type="button"
          class="win11-settings-p13n__theme-card"
          :class="{
            'win11-settings-p13n__theme-card--active':
              personalization.appearance === 'light',
          }"
          @click="setAppearance('light')"
        >
          <span class="win11-settings-p13n__theme-preview win11-settings-p13n__theme-preview--light">
            <span class="win11-settings-p13n__theme-preview-bar" />
            <span class="win11-settings-p13n__theme-preview-pane" />
          </span>
          <span class="win11-settings-p13n__theme-label">
            {{ t('win11.settings.personalization.appearanceLight') }}
          </span>
        </button>
      </div>
    </div>

    <div class="win11-settings__group">
      <h2 class="win11-settings__group-title">
        {{ t('win11.settings.personalization.windowEffectTitle') }}
      </h2>
      <p class="win11-settings__group-desc">
        {{ t('win11.settings.personalization.windowEffectDesc') }}
      </p>

      <div class="win11-settings-p13n__effect-grid">
        <button
          type="button"
          class="win11-settings-p13n__effect-card"
          :class="{
            'win11-settings-p13n__effect-card--active':
              personalization.windowSurface === 'acrylic',
          }"
          @click="setSurface('acrylic')"
        >
          <span
            class="win11-settings-p13n__effect-preview win11-settings-p13n__effect-preview--acrylic"
            aria-hidden="true"
          />
          <span class="win11-settings-p13n__effect-copy">
            <span class="win11-settings-p13n__effect-title">
              {{ t('win11.settings.personalization.windowEffectAcrylic') }}
            </span>
            <span class="win11-settings-p13n__effect-desc">
              {{ t('win11.settings.personalization.windowEffectAcrylicDesc') }}
            </span>
          </span>
        </button>

        <button
          type="button"
          class="win11-settings-p13n__effect-card"
          :class="{
            'win11-settings-p13n__effect-card--active':
              personalization.windowSurface === 'solid',
          }"
          @click="setSurface('solid')"
        >
          <span
            class="win11-settings-p13n__effect-preview win11-settings-p13n__effect-preview--solid"
            :style="{ background: personalization.windowTint }"
            aria-hidden="true"
          />
          <span class="win11-settings-p13n__effect-copy">
            <span class="win11-settings-p13n__effect-title">
              {{ t('win11.settings.personalization.windowEffectSolid') }}
            </span>
            <span class="win11-settings-p13n__effect-desc">
              {{ t('win11.settings.personalization.windowEffectSolidDesc') }}
            </span>
          </span>
        </button>
      </div>
    </div>

    <div
      v-if="personalization.windowSurface === 'solid'"
      class="win11-settings__group"
    >
      <h2 class="win11-settings__group-title">
        {{ t('win11.settings.personalization.tintTitle') }}
      </h2>
      <p class="win11-settings__group-desc">
        {{ t('win11.settings.personalization.tintDesc') }}
      </p>

      <div class="win11-settings__card win11-settings-p13n__tint-card">
        <div class="win11-settings-p13n__swatches">
          <button
            v-for="preset in tintPresets"
            :key="preset.value"
            type="button"
            class="win11-settings-p13n__swatch"
            :class="{
              'win11-settings-p13n__swatch--active':
                personalization.windowTint === preset.value,
            }"
            :title="preset.label"
            :aria-label="preset.label"
            :style="{ background: preset.value }"
            @click="setTint(preset.value)"
          />
          <label class="win11-settings-p13n__picker-wrap">
            <span class="sr-only">
              {{ t('win11.settings.personalization.customTint') }}
            </span>
            <input
              type="color"
              class="win11-settings-p13n__picker"
              :value="personalization.windowTint"
              @input="setTint(($event.target as HTMLInputElement).value)"
            />
          </label>
        </div>
      </div>
    </div>
  </section>
</template>
