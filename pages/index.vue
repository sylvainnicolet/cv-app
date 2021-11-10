<script lang="ts" setup>
import '../assets/tailwind.scss'
import '../assets/custom.scss'
import Navigation from '@/components/navigation.vue'
</script>

<template>
  <div id="app">
    <div class="layout">
      <Navigation />
      <div class="card w-full">
        <h1>Sections</h1>
      </div>
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
    @apply flex flex-col md:flex-row;
    @apply space-x-0 md:space-x-4 space-y-3 md:space-y-0;
  }
</style>