<template>
  <div>
    <section class="hero is-dark is-bold">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title is-1">
            Articles
          </h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-half-desktop is-half-tablet is-full-mobile"
            v-for="post in posts"
            :key="post.slug">
            <post-card :post="post"></post-card>
          </div>
        </div>
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
    ...mapState(['posts'])
  },
  created () {
    if (this.posts.length === 0) {
      this.$store.dispatch('getPosts')
    }
  }
}
</script>
