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
      @apply hover:text-accent;
    }
  }

  /* Menu */
  .menu {
    @apply flex flex-col;

    a {
      @apply block;
      @apply py-3 px-10;
      @apply text-center lg:text-left text-lg uppercase tracking-wider;
      @apply hover:bg-lt_hover_bg;

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
        @apply hover:bg-dt_hover_bg;

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


  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 20px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    @apply absolute;
    @apply cursor-pointer;
    @apply top-0 left-0 right-0 bottom-0;
    @apply rounded-full;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 3px;
    bottom: 2px;
    border-radius: 50%;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    @apply bg-accent;
  }

  input:checked + .slider:before {
    transform: translateX(38px);
  }
</style>