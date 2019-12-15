<template>
 <div>
   <!--dialog-->
   <div class="dialog-shadow"></div>
   <div class="panel panel-default dialog-panel">
     <div class="panel-heading">
       <h2 class="panel-title">
         <slot name="title">{{title}}</slot>
       </h2>
     </div>
     <div class="panel-body">
       <!--内容-->
       <slot></slot>
     </div>
   </div>
 </div>
</template>

<script>
  export default {
    name: 'dialog',
    props:{
      title:{
        type:String,
        default:'对话框'
      }
    }
  }
</script>

<style scoped>
  .dialog-panel {position:fixed; left: 50%; top: 200px; width: 500px; margin-left:-250px; z-index:99;}
  .dialog-shadow {position:fixed; left: 0; top:0; width:100%; height:100%; background:#000; opacity:0.3; z-index:98;}
</style>
