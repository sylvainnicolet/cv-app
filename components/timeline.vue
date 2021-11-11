<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  props: {
    items: Array,
  }
})
</script>
<template>
    <div class="timeline">
      <ul class="space-y-10">
        <li  class="timeline__item" v-for="item in items" :key="item.id">
          <h3 class="timeline__date">{{ item.date }}</h3>
          <div class="timeline__card">
            <h2 class="h2--section">{{ item.title }}</h2>
            <ul class="space-y-2">
              <li v-for="description in item.descriptions" :key="description.id">
                <p>{{ description }}</p>
              </li>
            </ul>
            <div class="mt-4">
              <a v-if="item.url" :href="item.url" target="_blank"><i class="fas fa-link"></i></a>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>