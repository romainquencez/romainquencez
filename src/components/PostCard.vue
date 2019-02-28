<template>
  <div class="card">
    <router-link :to="{ name: 'post', params: { slug: post.slug } }">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="post.image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <p class="title is-4">
            {{ post.title }}
          </p>
          <p>
            {{ post.publicationDate.toLocaleDateString() }}
          </p>
          <p>
            {{ post.resume }}
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>
