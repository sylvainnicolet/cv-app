<template>
  <nav id="navigation" class="card card--navigation">
    <div class="navigation__header">
      <h1>Sylvain Nicolet</h1>
      <h2>Apprentis développeur</h2>
    </div>

    <ul>
      <li><NuxtLink to="/biography">Biographie</NuxtLink></li>
      <li><NuxtLink to="/experiences">Expériences</NuxtLink></li>
      <li><NuxtLink to="/formations">Formations</NuxtLink></li>
      <li><NuxtLink to="/languages">Langages</NuxtLink></li>
      <li><NuxtLink to="/references">Références</NuxtLink></li>
      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>

  /* Navigation Header */
  .navigation__header {
    @apply flex flex-col items-center whitespace-nowrap;
    @apply px-6 pt-10 pb-20;
  }

  /* Titles */
  h1 {
    @apply mb-5;
    @apply text-5xl font-bold tracking-wide;
  }
  h2 {
    @apply text-xl uppercase font-light tracking-widest;
  }

  /* Items */
  ul {
    @apply flex flex-col;

    li {

      a {
        @apply block;
        @apply py-3 px-6;
        @apply text-lg uppercase tracking-wider;
        @apply hover:bg-lt_hover_bg hover:text-lt_hover_text
      }
    }
  }

</style>