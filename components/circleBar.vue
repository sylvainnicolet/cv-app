<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  props: {
    title: String,
    percent: String
  },
  computed: {
    percentClass() {
      let classPercent: String = "percent_"
      if (this.percent === "180") {
        classPercent = classPercent + "180"
      }
      else if (this.percent === "135") {
        classPercent = classPercent + "135"
      }
      else if (this.percent === "90") {
        classPercent = classPercent + "90"
      }
      else if (this.percent === "45") {
        classPercent = classPercent + "45"
      }
      return classPercent
    }
  }
})
</script>

<template>
  <div class="flex flex-col items-center space-y-6" :class="percentClass">
    <div class="circle-wrap">
      <div class="circle">
        <div class="mask full">
          <div class="fill"></div>
        </div>
        <div class="mask half">
          <div class="fill"></div>
        </div>
        <div class="inside-circle"></div>
      </div>
    </div>
    <h3>{{ title }}</h3>
  </div>
</template>
<style lang="scss" scoped>

  .circle-wrap {
    width: 150px;
    height: 150px;
    @apply bg-lt_bg;
    @apply rounded-full;
  }

  .circle-wrap .circle .mask,
  .circle-wrap .circle .fill {
    width: 150px;
    height: 150px;
    @apply absolute;
    @apply rounded-full;
  }

  .circle-wrap .circle .mask {
    clip: rect(0px, 150px, 150px, 75px);
  }

  .circle-wrap .inside-circle {
    width: 122px;
    height: 122px;
    @apply rounded-full;
    @apply bg-lt_card_bg;
    margin-top: 14px;
    margin-left: 14px;
    @apply absolute;
    z-index: 100;
  }

  /* color animation */

  /* 3rd progress bar */
  .mask .fill {
    clip: rect(0px, 75px, 150px, 0px);
    @apply bg-accent;
  }

  .mask.full,
  .circle .fill {
    animation: fill ease-in-out 1s;
  }

  .percent_180 {
    .mask.full,
    .circle .fill {
      transform: rotate(180deg);
    }
  }

  .percent_135 {
    .mask.full,
    .circle .fill {
      transform: rotate(135deg);
    }
  }

  .percent_90 {
    .mask.full,
    .circle .fill {
      transform: rotate(90deg);
    }
  }

  .percent_45 {
    .mask.full,
    .circle .fill {
      transform: rotate(45deg);
    }
  }



  h3 {
    @apply text-lg font-medium uppercase tracking-wider;
  }

  /* Dark */
  .dark {

    .circle-wrap {
      @apply bg-dt_bg;

      .inside-circle {
        @apply bg-dt_card_bg;
      }
    }
  }
</style>