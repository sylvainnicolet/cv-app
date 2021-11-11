<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  props: {
    items: Array,
  }
})
</script>

<template>
  <ul class="space-y-8">
    <li  class="reference__card" v-for="item in items" :key="item.id">
      <span class="reference__post">{{ item.post }}</span>
      <h2 class="h2--section">{{ item.name }}</h2>
      <div class="space-y-1">
        <div class="reference__item">
          <i class="fas fa-phone"></i>
          <a :href="`tel:${ item.phone }`">{{ item.phone }}</a>
        </div>
        <div v-if="item.email" class="reference__item">
          <i class="far fa-envelope"></i>
          <a :href="`mailto:${ item.email }`">{{ item.email }}</a>
        </div>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>

  .reference__card {
    box-shadow: 0 5px 20px 0 rgba(0,0,0,0.1);
    @apply rounded-md;
    @apply p-4;
    @apply bg-lt_card_bg text-lt_text;
    @apply text-lg;
  }

  .reference__post {
    @apply text-sm text-gray-400;
  }

  .reference__item {
    @apply space-x-2;
  }

  /* Dark */
  .dark {
    .reference__card {
      @apply bg-dt_bg text-dt_text;
    }
  }

</style>