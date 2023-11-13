import type { Project } from '~/models'

export const projects: Project[] = [
  {
    name: 'Fare',
    description: 'Application for tracking personal finances and attaining financial independence.',
    tags: ['Nuxt', 'Vue', 'TypeScript', 'UnoCSS', 'Prisma'],
    year: 2022,
    repo: 'https://github.com/matijaoe/fire-zavrsni',
    thumbnail: '/projects/fare.webp',
    categories: ['projects'],
  },
  {
    name: 'Qwiz',
    description: 'Platform for creation, organization & discovery of pub quizzes.',
    tags: ['Next', 'React', 'TypeScript', 'Nest', 'Prisma'],
    year: 2022,
    repo: 'https://github.com/qwiz-app/qwiz',
    url: 'https://app.qwiz.party',
    thumbnail: '/projects/qwiz.webp',
    categories: ['projects'],
  },
  {
    name: 'Aimo',
    description: 'Social media platform connecting motivated individuals with accountability partners.',
    tags: ['Nuxt', 'Vue', 'Tailwind', 'Firebase'],
    year: 2021,
    repo: 'https://github.com/matijaoe/aimo',
    url: 'https://aimo.vercel.app',
    thumbnail: '/projects/aimo.webp',
    categories: ['projects'],
  },
  {
    name: 'matijao.com',
    description: 'The site you are admiring right now.',
    tags: ['Nuxt', 'Vue', 'TypeScript', 'UnoCSS'],
    year: 2023,
    repo: 'https://github.com/matijaoe/matijao.com',
    url: 'https://matijao.com',
    thumbnail: '/projects/matijao.webp',
    categories: ['play'],
  },
  {
    name: 'Favicônes',
    description: 'Quick and easy way to use any icon as favicon.',
    tags: ['Nuxt', 'Vue', 'UnoCSS'],
    year: 2022,
    repo: 'https://github.com/matijaoe/favicones',
    url: 'https://favicones.vercel.app/',
    thumbnail: '/projects/favicones.webp',
    categories: ['play'],
  },
  {
    name: 'BTC Tools',
    wip: true,
    description: 'BIP39 wordlist preview. More tools coming soon.',
    tags: ['Svelte', 'TypeScript', 'Tailwind'],
    year: 2022,
    repo: 'https://github.com/matijaoe/btc-tools',
    url: 'https://bip39-rosy.vercel.app',
    thumbnail: '/projects/btc-tools.webp',
    categories: ['play'],
  },
  {
    name: 'MeetMia',
    description: 'Cake shop concept project',
    tags: ['Vue', 'Vite', 'TypeScript', 'SCSS'],
    year: 2021,
    repo: 'https://github.com/matijaoe/meet-mia',
    url: 'https://meet-mia.surge.sh/',
    thumbnail: '/projects/meetmia/thumbnail.webp',
    images: [
      '/projects/meetmia/01.webp',
    ],
    categories: ['play'],
  },
  {
    name: 'Comet',
    description: 'Video streaming platform mockup.',
    tags: ['HTML', 'SCSS', 'JavaScript'],
    year: 2020,
    repo: 'https://github.com/matijaoe/comet',
    url: 'https://comet-blush.vercel.app',
    thumbnail: '/projects/comet.webp',
    categories: ['play'],
  },
  {
    name: 'Vue Ecosystem Snippets',
    description: 'Snippets for the modern Vue ecosystem',
    year: 2023,
    url: 'https://marketplace.visualstudio.com/items?itemName=matijao.vue-nuxt-snippets',
    repo: 'https://github.com/mat2ja/vue-ecosystem-snippets',
    tags: ['Deno', 'TypeScript', 'VSCode'],
    categories: ['extensions'],
  },
  {
    name: 'Modern JavaScript Snippets',
    description: 'Code snippets for modern JavaScript & TypeScript',
    year: 2023,
    url: 'https://marketplace.visualstudio.com/items?itemName=matijao.modern-js-snippets',
    repo: 'https://github.com/mat2ja/modern-javascript-snippets',
    tags: ['Deno', 'TypeScript', 'VSCode'],
    categories: ['extensions'],
  },
  {
    name: 'eslint config',
    description: 'My eslint config',
    year: 2023,
    repo: 'https://github.com/matijaoe/eslint-config',
    url: 'https://www.npmjs.com/package/@matijaoe/eslint-config',
    tags: ['eslint', 'typescript'],
    categories: ['extensions'],
  },
  {
    name: 'URL Query Editor',
    description: 'Simple but powerful Chrome extension for editing URL query parameters',
    year: 2023,
    repo: 'https://github.com/matijaoe/url-query-editor',
    thumbnail: '/projects/url-query-editor.webp',
    tags: ['Svelte', 'Tailwind', 'Chrome'],
    categories: ['extensions'],
  },
  {
    name: 'pnpm.plugin.zsh',
    description: 'Oh My Zsh aliases for common pnpm commands',
    year: 2023,
    repo: 'https://github.com/matijaoe/pnpm.plugin.zsh',
    tags: ['Zsh', 'pnpm'],
    categories: ['extensions'],
  },
  {
    name: 'Nuxt Starter',
    description: 'Nuxt 3 & UnoCSS starter template',
    year: 2023,
    repo: 'https://github.com/matijaoe/nuxt-starter',
    url: 'https://the-nuxt-starter.vercel.app/',
    tags: ['Nuxt', 'UnoCSS'],
    categories: ['starters'],
  },
  {
    name: 'Vue Starter',
    description: 'Vue & UnoCSS starter template',
    year: 2023,
    repo: 'https://github.com/matijaoe/vue-starter',
    url: 'https://vue-uno-starter.vercel.app/',
    tags: ['Vue', 'UnoCSS'],
    categories: ['starters'],
  },
  {
    name: 'Vue & Anu Starter',
    description: 'Vue & Anu starter template',
    year: 2023,
    repo: 'https://github.com/matijaoe/vue-anu-starter',
    url: 'https://vue-anu-starter.vercel.app/',
    tags: ['Vue', 'UnoCSS'],
    categories: ['starters'],
  },
]
