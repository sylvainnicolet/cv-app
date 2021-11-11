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
          <div class="timeline-content">
            <h3 class="timeline__date">{{ item.date }}</h3>
            <div class="timeline__card">
              <h2 class="h2--section">{{ item.title }}</h2>
              <ul class="space-y-2">
                <li v-for="description in item.descriptions" :key="description.id">
                  <p>{{ description }}</p>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>