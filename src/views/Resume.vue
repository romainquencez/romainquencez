<template>
  <div>
    <section
      class="hero is-bold"
      :class="darkMode ? 'is-dark' : 'is-light'">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title is-1">
            {{ lang === 'fr' ? 'CV' : 'Resume' }}
          </h1>
        </div>
      </div>
    </section>
    <section
      class="section"
      :class="darkMode ? 'has-background-black' : ''">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <div class="level">
              <div class="level-item has-text-centered">
                <figure class="image is-256x256">
                  <img
                    class="is-rounded"
                    src="static/me.png">
                </figure>
              </div>
            </div>
            <h3
              class="title is-3 has-text-centered-touch"
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
                    {{ info.license ? info.license[lang] : '' }}
                  </span>
                </div>
                <div>
                  <span class="icon">
                    <font-awesome-icon icon="calendar-alt" />
                  </span>
                  <span>
                    {{ info.age }} {{ lang === 'fr' ? 'ans' : 'years old' }}
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
                {{ lang === 'fr' ? 'Télécharger en PDF' : 'Download PDF' }}
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
                {{ section.title[lang] }}
              </h3>
              <div
                v-for="(item, index) in section.items"
                :key="index"
                class="box"
                :class="boxClass">
                <h5
                  class="title is-5"
                  :class="modeTitleClass">
                  {{ item.title[lang] }}
                </h5>
                <p>
                  <vue-markdown :source="item.description[lang]"></vue-markdown>
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
    ...mapState(['info', 'resume', 'darkMode', 'lang']),
    boxClass () {
      return this.darkMode ? 'has-background-dark has-text-white' : ''
    },
    modeTitleClass () {
      return this.darkMode ? 'has-text-white' : ''
    }
  },
  created () {
    if (!this.resume.length) this.$store.dispatch('getResume')
  }
}
</script>
