<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
import Dialog from './components/dialog'
export default {
  name: 'App',

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
  .box{
    width: 200px;
    height: 200px;
    border: 1px solid #2c3e50;
     margin: 0 auto;
  }
  .title{
    height: 40px;
    line-height: 40px;
  }
</style>
