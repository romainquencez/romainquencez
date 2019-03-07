<template>
  <div>
    <section class="hero is-medium is-dark"
      :style="{ backgroundImage: 'url(' + post.image + ')' }">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title is-1">
            {{ post.title }}
          </h1>
          <p class="subtitle">
            Rédigé par {{ info.fullname }} le {{ post.publicationDate.toLocaleDateString() }}.
          </p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <p class="content">
          <vue-markdown :source="post.content" html></vue-markdown>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { mapState } from 'vuex'

export default {
  name: 'Post',
  components: {
    'vue-markdown': VueMarkdown
  },
  props: {
    slug: String
  },
  methods: {
    getPost: function () {
      return this.post
    }
  },
  computed: {
    ...mapState(['info', 'posts']),
    post: function () {
      let slug = this.$props.slug
      return this.posts.find(function (post) {
        return post.slug === slug
      })
    },
    postTitleShort () {
      let max = 200
      let content = this.post.content
      return content.length <= max ? content : content.substr(0, max) + '...'
    }
  },
  head: function () {
    return {
      title: { inner: this.post.title },
      meta: [
        { name: 'description', content: this.postTitleShort, id: 'description' },
        // Twitter
        { name: 'twitter:card', content: 'summary', id: 'twitter-card' },
        { name: 'twitter:title', content: this.post.title, id: 'twitter-title' },
        { name: 'twitter:description', content: this.postTitleShort, id: 'twitter-description' },
        { name: 'twitter:image', content: this.post.image, id: 'twitter-image' },
        { name: 'twitter:site', content: '@' + this.me.twitter, id: 'twitter-site' },
        { name: 'twitter:creator', content: '@' + this.me.twitter, id: 'twitter-creator' },
        // OpenGraph / Facebook
        { property: 'og:title', content: this.post.title, id: 'og-title' },
        { property: 'og:description', content: this.postTitleShort, id: 'og-description' },
        { property: 'og:image', content: this.post.image, id: 'og-image' },
        { property: 'og:locale', content: 'fr-FR', id: 'og-locale' },
        { property: 'og:type', content: 'article', id: 'og-type' },
        { property: 'og:url', content: window.location.href, id: 'og-url' }
      ]
    }
  },
  created () {
    if (this.posts.length === 0) {
      this.$store.dispatch('getPosts')
    }
  }
}
</script>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
  background-color: black;
}
.hero-body {
  background-color: rgba(0, 0, 0, 0.75);
}
</style>
