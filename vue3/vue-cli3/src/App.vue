<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
     <login></login>
    userid:{{$store.state.user_id}}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Login from "./components/login";

export default {
  name: 'app',
  components: {
    Login,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
