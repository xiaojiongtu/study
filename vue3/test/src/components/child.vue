<template>
 <div>
     <button @click="fn">+1</button>
 </div>
</template>

<script>
    export default {
        name: "child",
        props:['data'],
      methods:{
          fn(){
            this.data.num++
          }
      },
    }
</script>

<style scoped>

</style>
