<template>
  <div class="card" :class="modeClass">
    <div class="card-image">
      <a
        :href="post.url"
        target="_blank">
        <figure class="image is-3by2">
          <img :src="post.image">
        </figure>
      </a>
    </div>
    <div class="card-content">
      <div class="content">
        <h3
          class="title is-3"
          :class="textClass">
          {{ post.title }}
        </h3>
        <p class="has-text-grey-light">
          {{ createdAt }}
        </p>
        <div class="tags">
          <div
            v-for="(tag, index) in post.tags"
            :key="index"
            class="tag"
            :class="'is-' + tag.slug">
            {{ tag.name }}
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
    createdAt () {
      return this.moment(this.post.createdAt).locale('fr').format('dddd Do MMMM YYYY')
    },
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
