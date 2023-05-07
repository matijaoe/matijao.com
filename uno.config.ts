import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { theme } from '@unocss/preset-mini'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: {
          name: 'Satoshi',
          provider: 'fontshare',
        },
        display: {
          name: 'Palmtick',
          provider: 'none',
        },
        mono: {
          // name: 'iA Writer Mono',
          name: 'DM Mono',
          provider: 'google',
        },
      },
    }),
  ],
  theme: {
    colors: {
      accent: theme.colors?.orange,
      default: theme.colors?.stone,
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  shortcuts: {
    'row': 'w-full max-w-5xl mx-auto px-5 sm:px-8',
    'text-dimmed': 'text-default-7 dark:text-default-4',
    'hyperlink-wavy': '-mx-0.5 -my-0.5 py-0.5 px-1 rounded-sm underline decoration-default-8/20 dark:decoration-default-2/20 decoration-offset-3 decoration-wavy hover:(!decoration-accent-300)',
  },
})
