<template>
  <div class="container">
    <div class="box">
      <logo />
      <h1>
        Un logement pour personnel de santé
      </h1>
      <span class="redbox">
        proposer aux personnels soignants  qui vivent loin de leur lieu de travail un hébergement de courte durée plus proche de ce lieu
        .
      </span>

      <div class="links">
        <button>Je propose un logement</button>
        <br>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
        >
          Je suis soignant et je cherche un logement
        </a>
      </div>
    </div>
    <div class="box">
      <h2>
        Contexte de crise sanitaire
      </h2>
      <span>
        Alors  que  les  flux  touristiques  se  sont  taris dans  les  principales  villes, de nombreux  hébergements  sont disponibles. En même temps les personnels de santé sont et seront de plus en plus obligés à des rythmes de travail  héroïques.  La  plupart  d’entre  eux  vont  mettre  leur  vie personnelle en sourdine,  et  leur entourage devront les soutenir et renoncer à une partie de leur attention. Nous pouvons les soutenir.
      </span>
      <Subscribe/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'
import Subscribe from '~/components/Subscribe.vue'

export default Vue.extend({
  components: {
    Logo,
    Subscribe
  }
})
</script>

<style lang="scss">
.box{
  margin-bottom: 30px;
  span {
    background-color: #0B7FC7;
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
