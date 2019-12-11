<template>
  <div id="app">
<!--    <hello-world ref="cmp" name="blue" :age="39" :data="[{name:'blue',id:1},{name:'张三',id:2},{name:'sss'}]"></hello-world>-->
<!--    <child :data="a"></child>-->
<!--    {{a}}-->
<!--&lt;!&ndash;    <input v-model="b">&ndash;&gt;-->
<!--    {{b}}-->
<!--&lt;!&ndash;    <input :value="b" @input="fn">&ndash;&gt;-->
<!--&lt;!&ndash;    <input :value="b" @input="b=$event.target.value">&ndash;&gt;-->
<!--&lt;!&ndash;    <Child1 :value="b" @input="fn1" ></Child1>&ndash;&gt;-->
<!--&lt;!&ndash;    <Child1 v-model="b"></Child1>&ndash;&gt;-->
<!--    <Child1 :num1.sync="b" :num2.sync="c"></Child1>-->
<!--    b:{{b}}-->
<!--    c:{{c}}-->
    <slot-cmp1>
        <template #header>
          <header>
          <h3 class="title">标题</h3>
          </header>
        </template>
      <div class="box">
        <h3>健健</h3>
        <div>
          内容
        </div>
      </div>
    </slot-cmp1>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Child from "./components/child";
import Child1 from "./components/child1";
import slotCmp1 from './components/slot-cmp'
export default {
  name: 'App',
  components: {Child, HelloWorld,Child1,slotCmp1},
  data(){
    return{
      a:{
        num:1
      },
      b:0,
      c:1
    }
  },
  methods:{
   fn(e){
     this.b=e.target.value
   },
    fn1(val){
        this.b=val
    }
  },
  mounted() {
    this.$refs.cmp.$on('add',(val)=>{
       this.a=this.a+val
    })
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
