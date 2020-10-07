<template>
  <div id="app">
    <Head />
    <div class="main_contents">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>

import Head from './components/Head.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Head,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.main_contents{
  min-height: calc( 100vh - 183px );
  background-color:#f9f9f9;
}
</style>
