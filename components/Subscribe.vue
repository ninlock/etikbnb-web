<template>
    <div>
      <h3>
        Je m'inscris
      </h3>
      <span>En attendant que la plateforme soit disponible nous vous proposons de vous inscrire et nous vous recontacterons par la suite.</span>

      <form>
        <label>Informations de contact</label>
        <input type="text" placeholder="Nom"/>
        <input type="text" placeholder="Email"/>
      </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {
  }
})
</script>

<style>
form {
  text-align: left;
  margin: auto;
}
form > * {
  display: block;
}
label {
  font-weight: bold;
}
</style>

