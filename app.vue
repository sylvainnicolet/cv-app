<script lang="ts" setup>
import './assets/tailwind.scss'
import './assets/custom.scss'
import Navigation from "~/components/navigation.vue";
</script>

<template>
  <div id="app">
    <div class="layout">
      <Navigation />
      <NuxtPage />
    </div>
  </div>
</template>

<style lang="scss">

#app {
  @apply min-h-screen;
  @apply p-4;
  @apply bg-lt_bg;
}

.layout {
  @apply flex flex-col lg:flex-row lg:items-start;
  @apply space-x-0 lg:space-x-4 space-y-3 lg:space-y-0;
}
</style>