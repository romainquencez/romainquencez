<template>
  <div>
    <section
      class="hero is-bold"
      :class="modeClass">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title is-1">
            Contact
          </h1>
        </div>
      </div>
    </section>
    <section
      class="section"
      :class="sectionClass">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            Vous pouvez me contacter à l'adresse mail suivante :
          </p>
          <p>
            <a class="button is-link is-medium"
              :class="buttonClass"
              :href="'mailto:' + info.mail">
              <span class="icon is-medium">
                <font-awesome-icon icon="envelope" />
              </span>
              <span>
                {{ info.mail }}
              </span>
            </a>
          </p>
          <p>
            <br />
            ...vous pouvez aussi m'envoyer un messsage sur Twitter :
          </p>
          <p>
            <a
              class="button is-link is-medium"
              :class="buttonClass"
              href="https://twitter.com/messages/compose?recipient_id=71254404">
              <span class="icon is-medium">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </span>
              <span>
                @{{ info.twitter }}
              </span>
            </a>
          </p>
          <p>
            Merci !
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Contact',
  computed: {
    ...mapState(['info', 'darkMode']),
    modeClass () {
      return this.darkMode ? 'is-dark' : 'is-light'
    },
    sectionClass () {
      return this.darkMode ? 'has-background-black has-text-white' : ''
    },
    buttonClass () {
      return this.darkMode ? 'is-light is-inverted' : ''
    }
  }
}
</script>
