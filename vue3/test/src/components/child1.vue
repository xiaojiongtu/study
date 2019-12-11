<template>
 <div>
     <button @click="fn">+1888</button>
   {{num2}}
 </div>
</template>

<script>
    export default {
        name: "child",
        props:['num1','num2'],
      methods:{
          fn(){
            this.$emit('update:num1',this.num1+7);
            this.$emit('update:num2',this.num2+10)
          }
      },
    }
</script>

<style scoped>

</style>
