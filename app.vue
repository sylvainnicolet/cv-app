<script lang="ts" setup>
import './assets/scss/tailwind.scss'
import './assets/scss/custom.scss'
</script>

<template>
  <div id="app" :class="theme">
    <div class="layout">
      <navigation @toggle="toggle" />
      <nuxt-page />
    </div>
    <custom-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components: {},
  data () {
    return {
      theme: 'light',
    }
  },
  mounted() {
    if (localStorage.theme) {
      this.theme = localStorage.theme;
    }
  },
  watch: {
    theme(newTheme: string) {
      localStorage.theme = newTheme;
    }
  },
  methods: {
    toggle () {
      if (this.theme === "dark") {
        this.theme = "light"
      } else {
        this.theme = "dark"
      }
    }
  }
});
</script>


<style lang="scss">
  ::selection {
    @apply text-lt_text;
    @apply bg-accent;
  }

  #app {
    @apply min-h-screen;
    @apply p-6;
    @apply bg-lt_bg;
    transition: background 0.5s ease-in-out;
  }

  .layout {
    @apply flex flex-col lg:flex-row lg:items-start;
    @apply space-x-0 lg:space-x-6 space-y-6 lg:space-y-0;
  }

  /* Dark */
  #app {
    &.dark {
      @apply bg-dt_bg;
    }
  }
</style>