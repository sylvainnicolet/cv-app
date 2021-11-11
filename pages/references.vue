<template>
  <div class="card card--section">
    <h1 class="h1--section">Références</h1>
    <contact-card
        :items="items"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      items: [
        {
          post: "Maître de classe",
          name: "Erwann Larger",
          phone: "+41 79 227 95 84",
          email: "erwann.larger@edufr.ch"
        },
        {
          post: 'Maître d’apprentissage chez Liip',
          name: 'Stéphane Biolley',
          phone: "+41 78 677 23 05",
          email: "stephane.biolley@liip.ch"
        },
        {
          post: "Maître d’apprentissage chez Liip",
          name: "Karine Chor",
          phone: "+41 78 615 13 23",
          email: "karine.chor@liip.ch"
        },
        {
          post: "Maître d’apprentissage chez Liip",
          name: "Pascal Cudré",
          phone: "+41 78 637 03 28"
        },
        {
          post: "Maître d’apprentissage chez Métaldur",
          name: "Oscar Del Matto",
          phone: "+41 79 766 26 75",
          email: "Oscar.D@metaldur.ch"
        },
      ]
    }
  },
})
</script>