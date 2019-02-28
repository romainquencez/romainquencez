<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column content">
          <h4 class="title is-4">
            Pages
          </h4>
          <p v-for="(page, index) in pages"
            v-bind:key="index">
            <router-link
              :to="{ name: page.url }"
              active-class="is-active"
              >
              {{ page.name }}
            </router-link>
          </p>
        </div>
        <div class="column content">
          <h4 class="title is-4">
            Réseaux
          </h4>
          <p>
            <a :href="'https://twitter.com/' + me.twitter"
              target="_blank">
              Twitter
            </a>
          </p>
          <p>
            <a :href="'https://github.com/' + me.github"
              target="_blank">
              Github
            </a>
          </p>
          <p>
            <a :href="'https://www.linkedin.com/in/' + me.github + '/'"
              target="_blank">
              Linkedin
            </a>
          </p>
        </div>
        <div class="column content">
          <h4 class="title is-4">
            A propos
          </h4>
          <p>
            Conçu avec <a href="https://vuejs.org/">Vue</a> et <a href="https://bulma.io/">Bulma</a>.
          </p>
          <p>
            Hébergé sur <a href="https://github.com/">GitHub</a>.
          </p>
          <p>
            <a href="https://github.com/romainquencez/romainquencez.github.io">Code source</a> disponible sous license <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NavFooter',
  computed: {
    ...mapState(['me', 'pages'])
  }
}
</script>

<style scoped>
a.is-active {
  font-weight: bold;
  color: black;
}
</style>
