import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios,axios)
Vue.config.productionTip = false
Vue.use(Vuex)

const store=new Vuex.Store({
   state:{
     user_id:0
   },
   mutations:{
     setUserId(state,id){
       console.log(id);
       state.user_id=id
      }
   },
   actions:{
      async login({commit},{username,password}){

        let {data}=await axios('/user.json')
        data.user.forEach(item=>{
            if (item.name==username&&item.password==password){
              commit('setUserId',item.id)
            }else {
              commit('setUserId',0)
            }
         })
     }
   }
})


new Vue({
  render: h => h(App),
  store
}).$mount('#app')
