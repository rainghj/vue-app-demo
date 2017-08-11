import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Tabbar from '../components/Tabbar.vue'
import UserSetting from '../components/user/UserSetting.vue'
import WebIndex from '../components/WebIndex/webIndex.vue'
import GameDetail from '../components/game/gameDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'WebIndex',
    //   component: WebIndex
    // },
    {
      path: '/',
      name: 'Tabbar',
      component: Tabbar
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/userSetting',
      name: 'UserSetting',
      component: UserSetting
    },
    {
      path: '/gameDetail',
      name: 'GameDetail',
      component: GameDetail
    }
  ]
})
