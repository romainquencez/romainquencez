<template>
  <div>
    <section
      class="hero is-fullheight-with-navbar is-bold"
      :class="modeClass">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title is-1">
            {{ info.fullname }}
          </h1>
          <p class="subtitle is-3">
            {{ info.title ? info.title[lang] : '' }}
          </p>
          <p class="content">
            {{ info.age }} {{ lang === 'fr' ? 'ans' : 'years old' }}, {{ info.city }}
          </p>
          <div
            v-for="(group, index) in info.tags"
            :key="index"
            class="container tags">
            <div
              v-for="(tag, index) in group"
              :key="index"
              class="tag is-medium"
              :class="'is-' + tag">
              {{ tag }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState(['info', 'darkMode', 'lang']),
    modeClass () {
      return this.darkMode ? 'is-dark' : 'is-light'
    }}
}
</script>

<style lang="scss" scoped>
.container.tags {
  display: flex;
  justify-content: center;
}

/* IE11 fix */
@media all and (-ms-high-contrast:none) {
  .hero.is-fullheight-with-navbar .hero-body {
    min-height: inherit;
  }
}
</style>
