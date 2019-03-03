<template>
  <div>
    <section class="hero is-dark is-bold">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title is-1">
            Contact
          </h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            Vous pouvez me contacter à l'adresse mail suivante :
          </p>
          <p>
            <a class="button is-link is-medium"
              :href="'mailto:' + me.mail">
              <span class="icon is-medium">
                <font-awesome-icon icon="envelope" />
              </span>
              <span>
                {{ me.mail }}
              </span>
            </a>
          </p>
          <p>
            <br />
            ...vous pouvez aussi m'envoyer un messsage sur Twitter :
          </p>
          <p>
            <a class="button is-link is-medium"
              href="https://twitter.com/messages/compose?recipient_id=71254404">
              <span class="icon is-medium">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </span>
              <span>
                @{{ me.twitter }}
              </span>
            </a>
          </p>
          <p>
            Merci !
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Contact',
  computed: {
    ...mapState(['me'])
  }
}
</script>
