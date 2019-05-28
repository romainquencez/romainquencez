<template>
  <div>
    <nav-header></nav-header>
    <router-view/>
    <nav-footer v-if="$route.name != 'home'"></nav-footer>
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader.vue'
import NavFooter from '@/components/NavFooter.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: { NavHeader, NavFooter },
  computed: { ...mapState(['info']) },
  methods: {
    track () {
      this.$ga.page('/')
    }
  },
  created () {
    if (this.info.length === 0) {
      this.$store.dispatch('getInfo')
    }
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

$link: #00abc9;
$link-invert: findColorInvert($link);

$python: #306998;
$django: #44B78B;
$php: #4f5b93;
$javascript: #F0DB4F;
$vue: #41B883;
$html: #e34c26;
$css: #2965f1;
$git: #f34f29;
$linux: #E95420;
$macos: #000;
$windows: #0078D7;
$java: #007396;
$android: #A4C639;
$wordpress: #00749C;
$postgresql: #336791;

$colors: (
  "white": ($white, $black),
  "black": ($black, $white),
  "light": ($light, $light-invert),
  "dark": ($dark, $dark-invert),
  "primary": ($primary, $primary-invert),
  "info": ($info, $info-invert),
  "success": ($success, $success-invert),
  "warning": ($warning, $warning-invert),
  "danger": ($danger, $danger-invert),
  "python": ($python, findColorInvert($python)),
  "django": ($django, findColorInvert($django)),
  "php": ($php, findColorInvert($php)),
  "javascript": ($javascript, findColorInvert($javascript)),
  "vue": ($vue, findColorInvert($vue)),
  "html": ($html, findColorInvert($html)),
  "css": ($css, findColorInvert($css)),
  "git": ($git, findColorInvert($git)),
  "linux": ($linux, findColorInvert($linux)),
  "macos": ($macos, findColorInvert($macos)),
  "windows": ($windows, findColorInvert($windows)),
  "java": ($java, findColorInvert($java)),
  "android": ($android, findColorInvert($android)),
  "wordpress": ($wordpress, findColorInvert($wordpress)),
  "postgresql": ($postgresql, findColorInvert($postgresql)),
);

$navbar-breakpoint: 769px;

$dimensions: 16 24 32 48 64 96 128 256;

@import "~bulma/sass/base/_all.sass";

@import "~bulma/sass/components/navbar.sass";
@import "~bulma/sass/components/card.sass";
@import "~bulma/sass/components/level.sass";
@import "~bulma/sass/components/list.sass";
@import "~bulma/sass/components/media.sass";
@import "~bulma/sass/components/dropdown.sass";

@import "~bulma/sass/elements/button.sass";
@import "~bulma/sass/elements/container.sass";
@import "~bulma/sass/elements/title.sass";
@import "~bulma/sass/elements/box.sass";
@import "~bulma/sass/elements/content.sass";
@import "~bulma/sass/elements/icon.sass";
@import "~bulma/sass/elements/image.sass";
@import "~bulma/sass/elements/tag.sass";

@import "~bulma/sass/grid/columns.sass";

@import "~bulma/sass/layout/_all.sass";
</style>
