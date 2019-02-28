<!--登陆-->
<template>
  <div class="page-login">
    <div class="login-header">
      <a href="" class="logo"></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="未加载">
      </div>
      <div class="form">
        <h4 v-if="error" class="tips">{{error}}</h4>
        <p>
          <span>账号登陆</span>
        </p>
        <el-input
          :class="{error1:error && !userName}"
          v-model="userName"
          placeholder="手机号/用户名/邮箱"
          prefix-icon="profile"
        ></el-input>
        <el-input
          :class="{error:error && !passWord}"
          v-model="passWord"
          placeholder="密码"
          prefix-icon="password"
          type="passWord"
        ></el-input>
        <div class="foot">
          <a href>
            <span>忘记密码？</span>
          </a>
        </div>
        <el-button class="btn-login" type="primary" @click="submit">登陆</el-button>
        <p class="reg signup-guide">
          <span class>还没有账号？</span>
          <router-link :to="{name:'register'}" tag="a">免费注册</router-link>
        </p>
        <div class="oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <p></p>
          <div class="oauth">
            <a class="oauth__link" href="#"></a>
            <a class="oauth__link oauth__link--weibo" href="#"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <ul>
        <li><a href="#">关于美团</a></li>
        <li><a href="#">加入我们</a></li>
        <li><a href="#">商家入驻</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">美团手机版</a></li>
      </ul>
      <p>©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      userName: "",
      passWord: "",
      error: ""
    };
  },
  methods: {
    submit() {
      if (!this.userName) {
        this.error = "请输入账号";
        return false;
      } else if (!this.passWord) {
        this.error = "请输入密码";
        return false;
      } else {
        api
          .getLogin({
            params: {
              userName: this.userName,
              passWord: this.passWord
            }
          })
          .then(res => {
            if ((res.data.status = "success")) {
              this.$router.push({ name: "index" });
            } else {
              this.error = res.data.mag;
            }
          });
      }
    }
  }
};
</script>

<style lang = scss>
@import "@/assets/css/login/index.scss";
</style>
