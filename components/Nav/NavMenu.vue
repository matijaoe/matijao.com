<script lang="ts" setup>
import type { NavItem } from '~/models'

const items = ref<NavItem[]>([
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
])

const route = useRoute()
const isLinkActive = (item: NavItem) => {
  const isHome = item.path === '/'
  return !isHome && route.path.startsWith(item.path)
}
</script>

<template>
  <aside top-20 min-w-20 w-max lg:sticky lt-md:mx-auto>
    <nav flex="~ md:col" items-start>
      <NuxtLink
        v-for="(item, i) in items"
        :key="i"
        :to="item.path"
        prefetch
        rounded-lg
        px-2.5
        py-1
        lowercase
        class="text-default-4 dark:text-default-5 hover:(text-primary)"
        :class="{
          'link-active': isLinkActive(item),
        }"
        active-class="link-active"
      >
        {{ item.name }}
      </NuxtLink>
    </nav>
  </aside>
</template>

<style lang="postcss" scoped>
.link-active {
  @apply bg-default-2/60 dark:bg-default-8 !text-primary;
}
</style>
