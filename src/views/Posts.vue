<template>
  <div>
    <section
      class="hero is-bold"
      :class="darkMode ? 'is-dark' : 'is-light'">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title is-1">
            {{ lang === 'fr' ? 'Articles' : 'Posts' }}
          </h1>
        </div>
      </div>
    </section>
    <section
      class="section"
      :class="darkMode ? 'has-background-black has-text-white' : ''">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-half-desktop is-half-tablet is-full-mobile"
            v-for="(post, index) in posts"
            :key="index">
            <post-card :post="post">
            </post-card>
          </div>
        </div>
        <p v-if="!posts.length">
          {{ lang === 'fr' ? 'Chargement des articles...' : 'Loading articles ...' }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PostCard from '@/components/PostCard'

export default {
  components: { PostCard },
  computed: {
    ...mapState(['posts', 'darkMode', 'lang'])
  },
  created () {
    if (!this.posts.length) this.$store.dispatch('getPosts')
  }
}
</script>
