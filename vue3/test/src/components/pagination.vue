<template>
  <nav>
    <ul class="pagination">
      <li>
        <a href="#" @click="currentPage--">
          <span>&laquo;</span>
        </a>
      </li>
      <template v-for="(page,index) in pages()" >
        <li v-if="page=='...'"><a href="javascript:;">{{page}}</a></li>
        <li v-else><a href="#" :class="{active:page===currentPage}" @click="currentPage=page">{{page}}</a></li>
      </template>
      <li>
        <a href="javascript:;" @click="currentPage++">
          <span>&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'pagination',
    data(){
      return{
        page:this.value||this.current||1
      }
    },
    props:{
      value:{    //current 是父级的属性，不能直接修改它
        type:Number,
      },
      current:{
        type:Number
      },
      total:{
        type:Number,
        required:true
      }
    },
    computed:{
      currentPage: {
         get () {
           return  this.page
         },
         set(val){
           console.log(val)
           if (val>=1&&val<this.total){
               this.page=val
               this.$emit('input',this.page)
               this.$emit('change',this.page)
               this.$emit('update:current',this.page)
           }
         }
      }
    },
    methods:{
      pages(){
           // 1...current...total
           let arr=[];
           for (let i=Math.max(1,this.currentPage-3);i<Math.min(this.currentPage+3,this.total);i++){
               arr.push(i)
            }
            if (arr[0]>2){
               arr.unshift("...")
            }
           if (arr.indexOf(1)===-1){
              arr.unshift(1)
            }
            if (arr[arr.length-1]<this.total-1){
               arr.push('...')
            }
            if (arr.indexOf(this.total)===-1){
              arr.push(this.total)
            }

           return arr
       }
    },
    created () {
      this.pages()
    }
  }
</script>

<style scoped>
.active{
  background-color: #46b8da;
}
</style>
