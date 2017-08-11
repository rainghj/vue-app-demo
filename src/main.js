// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Vuex);
Vue.use(Mint);
Vue.use(VueResource)

Vue.config.productionTip = false

//初始化
const defaultState = {
  user:{},
  userImg: "static/defaultUserImg.png",
  tabBarSelected:'生活'
}

const store = new Vuex.Store({
  state: Object.assign({}, defaultState),  //不能直接赋值为defaultStore，不然defaultStore会跟着变化
  mutations: {
    login(state, user) {
      state.user=user
      state.userImg = "static/userimg.jpg";
    },
    loginout(state) {
      Object.assign(state, defaultState);
    },
    tabBarSelected(state,select){
      state.tabBarSelected=select;
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
