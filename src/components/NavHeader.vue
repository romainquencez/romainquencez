<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link
            :to="{ name: 'home' }"
            active-class="is-active"
            class="navbar-item"
            exact>
            <span class="icon">
              <i class="fas fa-home"></i>
            </span>
            <span>
              {{ me.fullname }}
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
      <div class="navbar-menu"
        :class="{'is-active': isOpen}">
        <div class="navbar-start">
          <router-link
            :to="{ name: page.url }"
            active-class="is-active"
            class="navbar-item"
            v-for="(page, index) in pages"
            :key="index">
            <span class="icon">
              <i :class="page.icon"></i>
            </span>
            <span>
              {{ page.name }}
            </span>
          </router-link>
        </div>
        <div class="navbar-end">
          <a :href="'https://github.com/' + me.github"
            class="navbar-item"
            target="_blank">
              <span class="icon">
                <i class="fab fa-github"></i>
              </span>
              <span class="is-hidden-desktop">
                GitHub
              </span>
          </a>
          <a :href="'https://www.linkedin.com/in/' + me.linkedin + '/'"
            class="navbar-item"
            target="_blank">
              <span class="icon">
                <i class="fab fa-linkedin-in"></i>
              </span>
              <span class="is-hidden-desktop">
                Linkedin
              </span>
          </a>
          <span class="navbar-item">
            <a class="button is-small twitter"
              :href="'https://twitter.com/' + me.twitter"
              target="_blank"
              :title="'Suivre @' + me.twitter">
              <span class="icon is-small">
                <i class="fab fa-twitter"></i>
              </span>
              <span>
                @{{ me.twitter }}
              </span>
            </a>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NavHeader',
  computed: {
    ...mapState(['me', 'pages'])
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
