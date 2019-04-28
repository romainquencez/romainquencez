<template>
  <div class="card" :class="modeClass">
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
            {{ post.title }}
          </a>
        </h3>
        <p class="has-text-grey-light">
          Publié le {{ post.createdAt }}
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
          {{ post.subTitle }}
        </p>
        <a
          :href="post.url"
          class="button is-outlined"
          :class="buttonClass">
          <span class="icon">
            <font-awesome-icon :icon="['fab', 'medium']" />
          </span>
          <span>
            Lire sur Medium
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
    ...mapState(['darkMode']),
    modeClass () {
      return this.darkMode ? 'has-background-dark' : ''
    },
    textClass () {
      return this.darkMode ? 'has-text-white' : ''
    },
    buttonClass () {
      return this.darkMode ? 'is-white' : 'is-black'
    }
  }
}
</script>
