<template>
  <div class="userSetting">
    <mt-header fixed v-bind:title="state.user.username">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>
    <div style="margin-top:50px">
      <img v-bind:src="userImg" height="100" width="100" style="border-radius:50%;border:2px solid #FFF;background:#fff">
    </div>
    <div>{{state.user.auth}}</div>
    <br/>
  
    <div v-if="!state.user.token" class="page-part">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <br/>
      <mt-button @click="login" size="large" type="default" style="color: #fafafa;background-color: #14b9c8;">登陆</mt-button>
    </div>
    <div v-else>
      <mt-cell title="标题文字" icon="more" is-link to="/" style="text-align: initial;">
        <span>icon 是图片</span>
        <img slot="icon" src="../../assets/img/svg/探索A_down.svg" width="24" height="24">
      </mt-cell>
      <br/>
      <mt-cell title="标题文字" icon="more" is-link to="/" style="text-align: initial;">
        <span>icon 是图片</span>
        <img slot="icon" src="../../assets/img/svg/探索A_down.svg" width="24" height="24">
      </mt-cell>
      <mt-cell title="标题文字" icon="more" is-link to="/" style="text-align: initial;">
        <span>icon 是图片</span>
        <img slot="icon" src="../../assets/img/svg/探索A_down.svg" width="24" height="24">
      </mt-cell>
      <br/>
      <mt-button @click="loginout" size="large" type="danger">退出</mt-button>
    </div>
  
  </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui';
import Login from '../../actions/login'


export default {
  name: 'userSetting',
  computed: {
    state() {
      return this.$store.state
    },
    userImg() {
      return this.$store.state.userImg
    }
  },
  methods: {
    login() {
      let body = { postData: JSON.stringify({ "phone": this.username, "password": this.password }) }
      Login(this, body)
    },
    loginout() {
      this.$store.commit('loginout')
    }
  },
  data() {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-header {
    background-color: #14B9C8;
    font-size: 18px
}

</style>
