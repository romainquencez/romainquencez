<template>
  <nav
    class="navbar"
    :class="modeClass"
    role="navigation"
    aria-label="main navigation">
    <div class="navbar-brand">
      <router-link
          :to="{ name: 'home' }"
          active-class="is-active"
          class="navbar-item"
          exact>
          <span class="icon">
            <font-awesome-icon icon="home" />
          </span>
      </router-link>

      <a role="button"
        class="navbar-burger"
        :class="{'is-active': isOpen}"
        aria-label="menu"
        aria-expanded="false"
        @click="isOpen = !isOpen">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <!-- pages -->
    <div class="navbar-menu"
      :class="{'is-active': isOpen}">
      <div class="navbar-start">
        <router-link
          :to="{ name: page.url }"
          active-class="is-active"
          class="navbar-item"
          v-for="(page, index) in pages"
          :key="index">
          {{ page.name }}
        </router-link>
      </div>

      <hr class="is-hidden-tablet" />

      <div class="navbar-end">
        <a :href="'https://github.com/' + info.github"
          class="navbar-item"
          target="_blank">
            <font-awesome-icon
              :icon="['fab', 'github']"
              class="is-hidden-mobile" />
            <span class="is-hidden-tablet">
              GitHub
            </span>
        </a>
        <a :href="'https://www.linkedin.com/in/' + info.linkedin + '/'"
          class="navbar-item"
          target="_blank">
            <font-awesome-icon
              :icon="['fab', 'linkedin-in']"
              class="is-hidden-mobile" />
            <span class="is-hidden-tablet">
              LinkedIn
            </span>
        </a>

        <!-- desktop twitter button -->
        <span class="navbar-item is-hidden-touch">
          <a class="button is-small twitter"
            :href="'https://twitter.com/' + info.twitter"
            target="_blank"
            :title="'Suivre @' + info.twitter">
            <span class="icon is-small">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </span>
            <span>
              @{{ info.twitter }}
            </span>
          </a>
        </span>

        <!-- mobile twitter button -->
        <a :href="'https://twitter.com/' + info.twitter"
          class="navbar-item is-hidden-desktop"
          target="_blank">
            <font-awesome-icon
              :icon="['fab', 'twitter']"
              class="is-hidden-mobile" />
            <span class="is-hidden-tablet">
              Twitter
            </span>
        </a>

        <hr class="is-hidden-tablet" />

        <a
          class="navbar-item"
          @click="invertDarkMode">
          <font-awesome-icon
            icon="moon"
            class="is-hidden-mobile" />
          <span class="is-hidden-tablet">
            Affichage {{ darkMode ? 'clair' : 'sombre' }}
          </span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NavHeader',
  computed: {
    ...mapState(['info', 'pages', 'darkMode']),
    modeClass () {
      return this.darkMode ? 'is-dark' : 'is-light'
    }
  },
  methods: {
    invertDarkMode () {
      this.$store.dispatch('setDarkMode', !this.darkMode)
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  watch: {
    '$route' () {
      this.isOpen = false
    }
  }
}
</script>

<style scoped lang="scss">
.navbar-start a.navbar-item>.icon:not(:last-child) {
  margin-left: -.25em;
  margin-right: .25em;
}

.navbar-brand span {
  margin-right: .5em;

  &:last-child {
    margin-right: 0;
  }
}

.twitter {
  background: #00aced;
  color: white;
  border-color: #00aced;

  &:hover {
    border-color: #0084b4;
  }
}
</style>
