<template>
  <div class="card card--section">
    <h1 class="h1--section">Contact</h1>
    <div class="contact__content">
      <ul class="contact__informations">
        <li class="contact__item">
          <i class="fas fa-map-marker-alt"></i>
          <a href="https://www.google.com/maps/place/Plan+des+Marais+17,+1642+Sorens/@46.6726238,7.0442418,17z/data=!3m1!4b1!4m5!3m4!1s0x478e6369c24af567:0xd7e6aa9477c12c7b!8m2!3d46.6726238!4d7.0464305" target="_blank">
            Plan des Marais 17, 1642 Sorens
          </a>
        </li>
        <li class="contact__item">
          <i class="fas fa-phone"></i>
          <a href="tel:+41764279601">+41 76 427 96 01</a>
        </li>
        <li class="contact__item">
          <i class="fab fa-whatsapp"></i>
          <a href="https://wa.me/+41764279601/" target="_blank">WhatsApp</a>
        </li>
        <li class="contact__item">
          <i class="far fa-envelope"></i>
          <a href="mailto:sylvain.nicolet@liip.ch">sylvain.nicolet@liip.ch</a>
          <span class="uppercase font-bold">[job]</span>
        </li>
        <li class="contact__item">
          <i class="far fa-envelope"></i>
          <a href="mailto:info@hescsen.com">info@hescsen.com</a>
          <span class="uppercase font-bold">[pro]</span>
        </li>
        <li class="contact__item">
          <i class="far fa-envelope"></i>
          <a href="mailto:nicoletsylvain@mail.com">nicoletsylvain@mail.com</a>
          <span class="uppercase font-bold">[privé]</span>
        </li>
      </ul>

      <div class="separator"></div>

      <ul class="contact__social_networks">
        <li class="contact__item">
          <i class="fab fa-instagram"></i>
          <a href="https://www.instagram.com/hescsen_photography/" target="_blank">@hescsen_photography</a>
        </li>
        <li class="contact__item">
          <i class="fab fa-instagram"></i>
          <a href="https://www.instagram.com/hescsen_drawing/" target="_blank">@hescsen_drawing</a>
        </li>
        <li class="contact__item">
          <i class="fab fa-youtube"></i>
          <a href="https://www.youtube.com/channel/UCZonS73iVB7PYN76Da3s4Cg" target="_blank">Youtube</a>
        </li>
        <li class="contact__item">
          <i class="fab fa-github"></i>
          <a href="https://github.com/sylvainnicolet" target="_blank">sylvainnicolet</a>
        </li>
        <li class="contact__item">
          <i class="fab fa-medium"></i>
          <a href="https://medium.com/@nicoletsylvain" target="_blank">@nicoletsylvain</a>
        </li>
        <li class="contact__item">
          <i class="fab fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/sylvainnicolet/" target="_blank">sylvainnicolet</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .contact__content {
    @apply space-y-8;
    @apply text-base sm:text-lg;
  }

  .contact__informations, .contact__social_networks {
    @apply space-y-3;
  }

  .contact__item {
    @apply space-x-2;
  }

  .separator {
    @apply h-0.5 bg-lt_text;
  }

  /* Dark */
  .dark {

    .separator {
      @apply bg-dt_text;
    }
  }
</style>