<template>
  <div class="card card--section">
    <h2 class="h2--section">Langages</h2>
    <div class="grid--custom">
      <div class="grid__item" v-for="item in languages" :key="item.id">
        <circle-bar
            :title="item.title"
            :percent="item.percent"
        />
      </div>
    </div>
    <h2 class="h2--section">Programmation</h2>
    <div class="grid--custom">
      <div class="grid__item" v-for="item in technos" :key="item.id">
        <circle-bar
            :title="item.title"
            :percent="item.percent"
        />
      </div>
    </div>
    <h2 class="h2--section">Frameworks</h2>
    <div class="grid--custom">
      <div class="grid__item" v-for="item in frameworks" :key="item.id">
        <circle-bar
            :title="item.title"
            :percent="item.percent"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .grid--custom {
    @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mb-10
  }

  .grid__item {
    @apply flex justify-center py-6;
  }
</style>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  data() {
    return {
      languages: [
        {
          title: 'Français',
          percent: "180",
        },
        {
          title: 'Anglais',
          percent: "135",
        },
        {
          title: 'Allemand',
          percent: "90",
        },
      ],
      technos: [
        {
          title: 'PHP',
          percent: "90",
        },
        {
          title: 'Python',
          percent: "90",
        },
        {
          title: 'Javascript',
          percent: "45",
        },
        {
          title: 'Java',
          percent: "45",
        },
      ],
      frameworks: [
        {
          title: 'TailwindCSS',
          percent: "180",
        },
        {
          title: 'Vue.js',
          percent: "135",
        },
        {
          title: 'Symfony',
          percent: "135",
        },
        {
          title: 'Django',
          percent: "90",
        },
        {
          title: 'Nuxt.js',
          percent: "90",
        },
      ]
    }
  },
})
</script>