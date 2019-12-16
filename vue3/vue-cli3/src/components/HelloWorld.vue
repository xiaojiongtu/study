<template>
  <div class="hello">
    <img :src="src" alt="">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data(){
     return{
       src:''
     }
  },
 async created(){
      //连接 发送 接收响应头
      let res=await fetch('/a.txt')

      //接收响应的内容  解析内容
      let data1=await res.json()

       console.log(res);

      let res2=await fetch('/home.jpg')
      let data=await res2.blob()
      let url=URL.createObjectURL(data)
      this.src=url

 },
  methods:{
    getData(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
