<template>
  <nav id="navigation" class="card card--navigation">
    <div class="navigation__header">
      <img alt="profile" src="~/assets/profile.jpg" />
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
      <li><NuxtLink to="/languages">Langages & Technos</NuxtLink></li>
      <li><NuxtLink to="/references">Références</NuxtLink></li>
      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
    </ul>

    <div class="theme">
      <i class="fas fa-sun"></i>
      <label class="switch">
        <input v-model='isDarkTheme' type="checkbox" @click="$emit('toggle')">
        <span class="slider"></span>
      </label>
      <i class="fas fa-moon"></i>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      isDarkTheme: false
    }
  },
  mounted() {
    if (localStorage.theme) {
      if (localStorage.theme === 'dark') {
        this.isDarkTheme = true
      }
    }
  },
});
</script>

<style lang="scss" scoped>

  /* Navigation Header */
  .navigation__header {
    @apply flex flex-col items-center whitespace-nowrap;
    @apply p-10;

    img {
      @apply w-64 h-64;
      @apply mb-5;
      @apply rounded-full;
    }
  }

  /* Titles */
  h1 {
    @apply mb-5;
    @apply text-4xl sm:text-5xl font-bold tracking-wide;
  }
  h2 {
    @apply text-lg sm:text-xl uppercase font-light tracking-widest;
  }

  /* Social Networks */
  .social_networks {
    @apply flex justify-center;
    @apply mt-3 space-x-3;

    .fab {
      @apply text-xl;
    }
  }

  /* Menu */
  .menu {
    @apply flex flex-col;

    a {
      @apply block;
      @apply py-3 px-10;
      @apply text-center lg:text-left text-lg uppercase tracking-wider;
      @apply hover:bg-lt_hover_bg hover:text-lt_text;

      &.router-link-active {
        @apply bg-lt_text text-dt_text;
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

    .fa-moon {
      @apply text-gray-200;
    }
  }

  /* Dark */
  .dark {
    .social_networks {
      .fab {
        @apply hover:text-accent;
      }
    }

    .menu {
      a {
        @apply hover:bg-dt_hover_bg hover:text-dt_text;

        &.router-link-active {
          @apply bg-dt_text text-lt_text;
        }
      }
    }

    .theme {
      .fa-sun {
        @apply text-dt_bg;
      }
    }
  }
</style>