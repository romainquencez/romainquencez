<template>
  <div class="card" :class="darkMode ? 'has-background-dark' : ''">
    <div class="card-image">
      <a
        :href="post.url"
        target="_blank">
        <figure class="image is-16by9">
          <img :src="'static/posts/' + post.image">
        </figure>
      </a>
    </div>
    <div class="card-content">
      <div class="content">
        <h3
          class="title is-3"
          :class="textClass">
          <a :href="post.url">
            {{ post.title[lang] }}
          </a>
        </h3>
        <p class="has-text-grey-light">
          {{ lang === 'fr' ? 'Publié le' : 'Published on' }} {{ post.createdAt }}
        </p>
        <div class="tags">
          <div
            v-for="(tag, index) in post.tags"
            :key="index"
            class="tag"
            :class="'is-' + tag">
            {{ tag }}
          </div>
        </div>
        <p :class="textClass">
          {{ post.subTitle[lang] }}
        </p>
        <a
          :href="post.url[lang]"
          class="button is-outlined"
          :class="darkMode ? 'is-white' : 'is-black'">
          <span class="icon">
            <font-awesome-icon :icon="['fab', 'medium']" />
          </span>
          <span>
            {{ lang === 'fr' ? 'Lire sur' : 'Read on' }} Medium
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['post'],
  computed: {
    ...mapState(['darkMode', 'lang']),
    textClass () {
      return this.darkMode ? 'has-text-white' : ''
    }
  }
}
</script>
