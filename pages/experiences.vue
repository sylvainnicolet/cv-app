<template>
  <div class="card card--section">
    <h1 class="h1--section">Expériences</h1>
    <timeline
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
          date: 'Août 2018 - Août 2022',
          title: 'Informaticien chez Liip',
          descriptions: [
              "Concevoir des applications Android en Java et Kotlin."
          ],
          url: "https://www.liip.ch/fr/"
        },
        {
          date: 'Août 2014 - Août 2018',
          title: 'Dessinateur Industriel chez Métaldur',
          descriptions: [
              "Établir des dessins techniques de produits et outillages internes.",
              "Collaborer au suivi de production (rétroaction des modifications techniques).",
              "Conception 3D."
          ],
          url: "http://www.iscarmetaldur.ch/fr/"
        },
        {
          date: 'Juin 2014 - Juillet 2014',
          title: 'Temporaire chez Mapei',
          descriptions: [
              "Nettoyage de containers et de citernes."
          ],
          url: "https://www.mapei.com/ch/fr-ch/"
        },
        {
          date: 'Juillet 2013 - Août 2013',
          title: 'Temporaire chez Jumbo',
          descriptions: [
              "Réapprovisionnement des rayons et caissier."
          ],
          url: "https://www.jumbo.ch/fr/"
        },
        {
          date: 'Juillet 2012',
          title: 'Temporaire chez Progin',
          descriptions: [
              "Débitage de pièces de production."
          ],
          url: "https://www.progin.ch/v1/"
        },
        {
          date: '2012 - 2018',
          title: 'Cours de tennis',
          descriptions: [
              "Enseignement du tennis au TC Bulle."
          ],
          url: "https://tcbulle.ch/"
        }
      ]
    }
  },
})
</script>