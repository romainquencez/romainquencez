<template>
  <div>
    <section class="hero is-dark is-bold">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title is-1">
            CV
          </h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <div class="content has-text-centered">
              <figure class="image is-256x256 is-inline-block">
                <img
                  class="is-rounded"
                  src="@/assets/images/me.jpg">
              </figure>
            </div>
            <h3 class="title is-3">
              {{ me.fullname }}
            </h3>
            <div class="box">
              <div>
                <div>
                  <span class="icon">
                    <font-awesome-icon icon="home" />
                  </span>
                  <span>
                    {{ me.city }}
                  </span>
                </div>
                <div>
                  <span class="icon">
                    <font-awesome-icon icon="car" />
                  </span>
                  <span>
                    {{ me.license }}
                  </span>
                </div>
                <div>
                  <span class="icon">
                    <font-awesome-icon icon="calendar-alt" />
                  </span>
                  <span>
                    {{ me.age }} ans
                  </span>
                </div>
                <div>
                  <span class="icon">
                    <font-awesome-icon icon="envelope" />
                  </span>
                  <span>
                    <a :href="'mailto:' + this.me.mail">
                      {{ me.mail }}
                    </a>
                  </span>
                </div>
              </div>
              <div class="content">
                <div>
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'twitter']" />
                  </span>
                  <span>
                    <a :href="'https://twitter.com/' + me.twitter">
                      @{{ me.twitter }}
                    </a>
                  </span>
                </div>
                <div>
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                  </span>
                  <span>
                    <a :href="'https://www.linkedin.com/in/' + me.linkedin + '/'">
                      {{ me.linkedin }}
                    </a>
                  </span>
                </div>
                <div>
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'github']" />
                  </span>
                  <span>
                    <a :href="'https://github.com/' + this.me.github + '/'">
                      {{ me.github }}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-two-thirds">
            <div
              :key="index"
              v-for="(section, index) in resume.sections"
              class="content">
              <h3 class="title is-3">
                {{ section.title }}
              </h3>
              <div
                v-for="(item, index) in section.items"
                :key="index"
                class="box">
                <h5 class="title is-5">
                  {{ item.title }}
                </h5>
                <p>
                  <vue-markdown :source="item.description"></vue-markdown>
                </p>
                <article class="media content">
                  <div class="media-left">
                    <p class="image is-64x64">
                      <img :src="item.image">
                    </p>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <a
                          :href="item.link"
                          target="_blank"
                          :title="'Site de ' + item.location">
                          {{ item.location }}
                        </a><br />
                        {{ item.city }}
                      </p>
                    </div>
                  </div>
                </article>
                <div class="container tags">
                  <div
                    v-for="(tag, index) in item.tags"
                    :key="index"
                    class="tag"
                    :class="'is-' + tag">
                    {{ tag }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VueMarkdown from 'vue-markdown'

export default {
  name: 'resume',
  components: { 'vue-markdown': VueMarkdown },
  computed: { ...mapState(['me', 'resume']) }
}
</script>
