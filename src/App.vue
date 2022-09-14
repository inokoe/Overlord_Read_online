<template>
  <div id="app" :class="this.$store.state.darkModel === 'true' ? 'appDarkModel' : ''">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
  }, mounted() {
    this.$store.dispatch('getDarkModelHistory')
  }
}
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
  // scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  transition: all 0.5s linear;
}

.appDarkModel {
  background-color: #ccc;
  transition: all 0.5s linear;
}
</style>
