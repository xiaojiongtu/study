<template>
 <div>
<!--   <zDialog title="啦啦啦啦阿拉">-->
<!--       <template #title>-->
<!--           头部标题-->
<!--         <a href="#" class="glyphicon glyphicon-remove pull-right"></a>-->
<!--       </template>-->
<!--   </zDialog>-->
   <pagination :total="100" v-model="currentPage" @change="fn" :current.sync="currentPage"></pagination>
   <tabs :tabs="tabs" :cur.sync="currentIndex" @change="changeHandler" v-model="currentIndex"></tabs>
   {{currentIndex}}
 </div>
</template>

<script>
  import zDialog from '../components/dialog'
  import Pagination from '../components/pagination'
  import Tabs from '../components/tabs'
  export default {
    name: 'index',
    components: {Tabs, Pagination, zDialog},
    data(){
      return{
        currentPage:10,
        tabs:['首页','新闻','提问'],
        currentIndex:1,
      }
    },
    methods:{
      fn(page){
        console.log(page)
      },
      changeHandler(index){
        console.log(index)
        this.currentIndex=index
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
