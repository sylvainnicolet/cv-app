<script lang="ts" setup>
import './assets/tailwind.scss'
import './assets/custom.scss'
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
  @apply p-6;
  @apply bg-lt_bg;
}

.layout {
  @apply flex flex-col lg:flex-row lg:items-start;
  @apply space-x-0 lg:space-x-6 space-y-6 lg:space-y-0;
}
</style>