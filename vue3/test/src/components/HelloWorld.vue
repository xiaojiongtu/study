<template>
  <div class="hello">
    <button @click="$emit('add',4)">+1</button>
    {{name}}
    {{age}}
    {{data}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:{
      name:{
        type:String,
        required:true
      },
       age:{
        type:Number,
         default:18
       },
    data:{
        type:Array,
        required:true,
        validator(value) {
          for(let i=0;i<value.length;i++) {
             if (!value[i].id){
               return false
             }else {
               return  true
             }
          }

        }
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
