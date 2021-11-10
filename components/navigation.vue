<template>
  <nav id="navigation" class="card card--navigation">
    <div class="navigation__header">
      <h1>Sylvain Nicolet</h1>
      <h2>Apprentis développeur</h2>
      <ul class="social_networks">
        <li><a href="https://www.linkedin.com/in/sylvainnicolet/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
        <li><a href="https://github.com/sylvainnicolet" target="_blank"><i class="fab fa-github"></i></a></li>
        <li><a href="https://www.instagram.com/hescsen_photography/" target="_blank"><i class="fab fa-instagram"></i></a></li>
      </ul>
    </div>

    <ul class="menu">
      <li><NuxtLink to="/biography">Biographie</NuxtLink></li>
      <li><NuxtLink to="/experiences">Expériences</NuxtLink></li>
      <li><NuxtLink to="/formations">Formations</NuxtLink></li>
      <li><NuxtLink to="/languages">Langages</NuxtLink></li>
      <li><NuxtLink to="/references">Références</NuxtLink></li>
      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
    </ul>

    <div class="theme">
      <i class="fas fa-sun"></i>
      <Switch />
      <i class="fas fa-moon"></i>
    </div>
  </nav>
</template>

<style lang="scss" scoped>

  /* Navigation Header */
  .navigation__header {
    @apply flex flex-col items-center whitespace-nowrap;
    @apply px-6 py-10;
  }

  /* Titles */
  h1 {
    @apply mb-5;
    @apply text-5xl font-bold tracking-wide;
  }
  h2 {
    @apply text-xl uppercase font-light tracking-widest;
  }

  /* Social Networks */
  .social_networks {
    @apply flex justify-center;
    @apply mt-3 space-x-3;

    .fab {
      @apply text-xl;
      @apply hover:text-lt_hover_text;
    }
  }

  /* Menu */
  .menu {
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

  /* Theme */
  .theme {
    @apply flex justify-center items-center;
    @apply space-x-3;
    @apply my-10;

    .fas {
      @apply text-xl;
    }
  }

</style>