<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">Admin</h1>
      <h2 class="subtitle">My polished Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="blank" class="button--grey">GitHub</a>
      </div>
      
      <a href="#" class="a-button-buy-again">Buy Now</a>
    </div>
  </div>
</template>

<script>
import Logo from "~components/Logo.vue";
export default {
  components: {
    Logo
  }
};
</script>

<style>

</style>