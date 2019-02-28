<template>
  <div>
    <section class="hero is-dark is-fullheight-with-navbar">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title is-1">
            {{ me.fullname }}
          </h1>
          <p class="subtitle is-3">
            {{ me.title }}
          </p>
          <p class="content">
            {{ me.age }} ans, {{ me.city }}
          </p>
          <div
            v-for="(group, index) in me.tags"
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
  computed: { ...mapState(['me']) }
}
</script>

<style lang="scss" scoped>
.container.tags {
  display: flex;
  justify-content: center;
}
.hero-body {
  background-image: url(../assets/images/tower.jpg);
  background-size: cover;
  background-position: center;
}
/* IE11 fix */
@media all and (-ms-high-contrast:none) {
  .hero.is-fullheight-with-navbar .hero-body {
    min-height: inherit;
  }
}
</style>
