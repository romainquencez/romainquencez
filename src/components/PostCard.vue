<template>
  <div class="card">
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
        <h3 class="title is-3">
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
        <p>
          {{ post.subTitle }}
        </p>
        <a
          :href="post.url"
          class="button is-black is-outlined">
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
export default {
  props: ['post'],
  computed: {
    createdAt () {
      return this.moment(this.post.createdAt).locale('fr').format('dddd Do MMMM YYYY')
    }
  }
}
</script>
