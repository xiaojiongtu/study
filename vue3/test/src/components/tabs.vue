<template>
  <ul class="nav nav-tabs">
    <li role="presentation" @click="page--"><a href="#">上一页</a></li>
    <li role="presentation" v-for="(item,index) in tabs" :key="index" :class="{active:page===index}">
       <a href="javascript:;" @click="page=index" >{{item}}
      </a>
    </li>
    <li role="presentation" @click="page++"><a href="#">下一页</a></li>
  </ul>
</template>

<script>
  export default {
    name: 'tabs',
     data(){
       return{
         curIndex:this.cur||this.value||0
       }
     },
    props:{
      tabs:{
        type:Array,
        required:true
      },
      cur:{
        type:Number
      },
      value:{
        type:Number
      }
    },
    computed:{
       page:{
         get(){
            return this.curIndex;
         },
         set(val){
           if (val>=0&&val<this.tabs.length) {
              this.curIndex=val
              this.$emit('change',this.curIndex)
              this.$emit('input',this.curIndex)
              this.$emit('update:cur',this.curIndex)
            }
         }
       }
    }
  }
</script>

<style scoped>

</style>
