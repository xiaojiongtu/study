<template>
  <div>
      <div>
          姓名： <input type="text" v-model="form.username"><br>
          密码： <input type="password" v-model="form.password">
          <button type="button" @click="login">登录</button>
      </div>
  </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                form:{
                    username:'',
                    password: ''
                }

            }
        },
        methods:{
            login(){
              this.$store.dispatch('login',this.form)
            }
        },
    }
</script>

<style scoped>

</style>
