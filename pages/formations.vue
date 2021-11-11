<template>
  <div class="card card--section">
    <h1 class="h1--section">Formations</h1>
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
          title: 'CFC Informaticien avec maturité',
          descriptions: [
            "EPAI Ecole Professionnelle Artisanale et Industrielle"
          ],
          url: "https://www.fr.ch/epai/",
          location: "Fribourg"
        },
        {
          date: 'Août 2014 - Août 2018',
          title: 'CFC Dessinateur-Constructeur Industriel',
          descriptions: [
            "EPAI Ecole Professionnelle Artisanale et Industrielle"
          ],
          url: "https://www.fr.ch/epai/",
          location: "Fribourg"
        },
        {
          date: 'Août 2012 - Mai 2014',
          title: 'Collège',
          descriptions: [
            "Collège du Sud"
          ],
          url: "https://collegedusud.ch/",
          location: "Bulle"
        },
        {
          date: 'Août 2011 - Juin 2012',
          title: 'Attestation d’une dixième année linguistique',
          descriptions: [
            "OZ Längenstein"
          ],
          url: "https://www.laengenstein.ch/",
          location: "Spiez"
        },
        {
          date: 'Août 2008 - Juin 2011',
          title: 'Diplôme de scolarité obligatoire, niveau prégymnasiale',
          descriptions: [
            "Cycle d’orientation de la Gruyère"
          ],
          url: "https://www.co-gruyere.ch/",
          location: "Bulle"
        },
        {
          date: 'Août 2002 - Juin 2008',
          title: 'Primaire',
          descriptions: [
            "Ecole primaire"
          ],
          url: "https://www.monecole.ch/",
          location: "Sorens"
        },
      ]
    }
  },
})
</script>