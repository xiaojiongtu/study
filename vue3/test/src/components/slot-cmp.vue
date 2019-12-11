<template>
    <div>
      头部：<slot name="header"></slot>
       你好
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "slot"
    }
</script>

<style scoped>

</style>
