<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <add-post />
</template>

<script>
import AddPost from './components/AddPost.vue'
export default {
  name: 'App',
  components: {
    AddPost
  }
}
</script>

<style>
html,body{background:#64cc63;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
