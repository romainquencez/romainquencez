<template>
  <div>
    <section
      class="hero is-bold"
      :class="darkMode ? 'is-dark' : 'is-light'">
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
      :class="darkMode ? 'has-background-black has-text-white' : ''">
      <div class="columns">
        <div class="column"></div>
        <div
          v-for="(element, index) in elements"
          :key="index"
          class="column has-text-centered">
          <font-awesome-icon
            :icon="element.icon"
            class="icon is-large"/><br />
          <div
            class="title is-5"
            :class="darkMode ? 'has-text-white' : ''">
            {{ element.title }}
          </div>
          <a
            :href="element.link.url"
            target="_blank">
            {{ element.link.title }}
          </a>
        </div>
        <div class="column"></div>
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
    elements () {
      return [
        {
          icon: 'envelope',
          title: 'Email',
          link: {
            url: 'mailto:' + this.info.mail,
            title: this.info.mail
          }
        },
        {
          icon: ['fab', 'linkedin-in'],
          title: 'LinkedIn',
          link: {
            url: 'https://www.linkedin.com/in/' + this.info.linkedin + '/',
            title: 'in/' + this.info.linkedin
          }
        },
        {
          icon: ['fab', 'twitter'],
          title: 'Twitter',
          link: {
            url: 'https://twitter.com/messages/compose?recipient_id=71254404',
            title: '@' + this.info.twitter
          }
        }
      ]
    }
  }
}
</script>
