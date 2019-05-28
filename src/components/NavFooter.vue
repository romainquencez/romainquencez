<template>
  <footer
    class="footer"
    :class="modeFooterClass">
    <div class="container">
      <div class="columns">
        <div class="column content">
          <h4
            class="title is-4"
            :class="modeTitleClass">
            Pages
          </h4>
          <p v-for="(page, index) in pages"
            v-bind:key="index">
            <router-link
              :to="{ name: page.url }"
              active-class="has-text-weight-bold"
              >
              {{ page.name[lang] }}
            </router-link>
          </p>
        </div>
        <div class="column content">
          <h4
            class="title is-4"
            :class="modeTitleClass">
            {{ lang === 'fr' ? 'Réseaux' : 'Networks' }}
          </h4>
          <p>
            <a :href="'https://twitter.com/' + info.twitter"
              target="_blank">
              Twitter
            </a>
          </p>
          <p>
            <a :href="'https://github.com/' + info.github"
              target="_blank">
              Github
            </a>
          </p>
          <p>
            <a :href="'https://www.linkedin.com/in/' + info.linkedin + '/'"
              target="_blank">
              Linkedin
            </a>
          </p>
        </div>
        <div class="column content">
          <h4
            class="title is-4"
            :class="modeTitleClass">
            {{ lang === 'fr' ? 'A propos' : 'About' }}
          </h4>
          <p v-html="builtText"></p>
          <p v-html="hostedText"></p>
          <p v-html="codeText"></p>
          <p :class="modeVersionClass">
            Version {{ version }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'
import settings from '@/settings'

export default {
  name: 'NavFooter',
  computed: {
    ...mapState(['info', 'pages', 'darkMode', 'lang']),
    version: version => settings.VERSION,
    modeFooterClass () {
      return this.darkMode ? 'has-background-dark has-text-white' : ''
    },
    modeTitleClass () {
      return this.darkMode ? 'has-text-white' : ''
    },
    modeVersionClass () {
      return this.darkMode ? 'has-text-grey' : 'has-text-grey-light'
    },
    builtText () {
      const vue = '<a href="https://vuejs.org/" target="_blank">Vue</a>'
      const bulma = '<a href="https://bulma.io/" target="_blank">Bulma</a>'
      return this.lang === 'fr' ? `Conçu avec ${vue} et ${bulma}.` : `Built with ${vue} and ${bulma}.`
    },
    hostedText () {
      const host = '<a href="https://github.com/" target="_blank">GitHub</a>'
      return this.lang === 'fr' ? `Hébergé sur ${host}.` : `Hosted on ${host}.`
    },
    codeText () {
      const label = this.lang === 'fr' ? 'Code source' : 'Source code'
      const code = `<a href="${this.info.repository}" target="_blank">${label}</a>`
      const license = '<a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY NC SA 4.0</a>'
      return this.lang === 'fr' ? `${code} disponible sous licence ${license}.` : `${code} available under ${license} license.`
    }
  }
}
</script>

<style scoped>
a.is-active {
  font-weight: bold;
  color: black;
}
</style>
