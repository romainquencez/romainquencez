<template>
  <div>
    <section
      class="hero is-bold"
      :class="modeClass">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title is-1">
            CV
          </h1>
        </div>
      </div>
    </section>
    <section
      class="section"
      :class="sectionClass">
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
            <h3
              class="title is-3"
              :class="modeTitleClass">
              {{ info.fullname }}
            </h3>
            <div
              class="box"
              :class="boxClass">
              <div>
                <div>
                  <span class="icon">
                    <font-awesome-icon icon="home" />
                  </span>
                  <span>
                    {{ info.city }}
                  </span>
                </div>
                <div>
                  <span class="icon">
                    <font-awesome-icon icon="car" />
                  </span>
                  <span>
                    {{ info.license }}
                  </span>
                </div>
                <div>
                  <span class="icon">
                    <font-awesome-icon icon="calendar-alt" />
                  </span>
                  <span>
                    {{ info.age }} ans
                  </span>
                </div>
                <div>
                  <span class="icon">
                    <font-awesome-icon icon="envelope" />
                  </span>
                  <span>
                    <a :href="'mailto:' + this.info.mail">
                      {{ info.mail }}
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
                    <a :href="'https://twitter.com/' + info.twitter">
                      @{{ info.twitter }}
                    </a>
                  </span>
                </div>
                <div>
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                  </span>
                  <span>
                    <a :href="'https://www.linkedin.com/in/' + info.linkedin + '/'">
                      {{ info.linkedin }}
                    </a>
                  </span>
                </div>
                <div>
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'github']" />
                  </span>
                  <span>
                    <a :href="'https://github.com/' + this.info.github + '/'">
                      {{ info.github }}
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <a
              class="button is-primary is-fullwidth is-medium"
              href="static/cv_fr.pdf">
              <span class="icon">
                <font-awesome-icon icon="download" />
              </span>
              <span>
                Télécharger mon CV en PDF
              </span>
            </a>
          </div>
          <div class="column is-two-thirds">
            <div
              :key="index"
              v-for="(section, index) in resume.sections"
              class="content">
              <h3
                class="title is-3"
                :class="modeTitleClass">
                {{ section.title }}
              </h3>
              <div
                v-for="(item, index) in section.items"
                :key="index"
                class="box"
                :class="boxClass">
                <h5
                  class="title is-5"
                  :class="modeTitleClass">
                  {{ item.title }}
                </h5>
                <p>
                  <vue-markdown :source="item.description"></vue-markdown>
                </p>
                <article class="media content">
                  <div class="media-left">
                    <p class="image is-64x64">
                      <img
                        class="is-rounded has-background-white"
                        :src="'static/' + item.image">
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
  computed: {
    ...mapState(['info', 'resume', 'darkMode']),
    modeClass () {
      return this.darkMode ? 'is-dark' : 'is-light'
    },
    boxClass () {
      return this.darkMode ? 'has-background-dark has-text-white' : ''
    },
    sectionClass () {
      return this.darkMode ? 'has-background-black' : ''
    },
    modeTitleClass () {
      return this.darkMode ? 'has-text-white' : ''
    }
  },
  created () {
    if (this.resume.length === 0) {
      this.$store.dispatch('getResume')
    }
  }
}
</script>
