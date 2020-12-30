<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {},
  methods: {
    ...mapActions([])
  },
  created() {},
  mounted() {}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;700&display=swap');
#app {
  /* font-family: 'Open Sans', sans-serif; */
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body {
  margin: 0px;
  overflow-y: scroll;
}
body::-webkit-scrollbar {
  display: none;
}
</style>
