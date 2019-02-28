<!--顶部导航栏-->
<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location-outline"/>
      {{$store.state.position.name}}
      <router-link class="changeCity" :to="{name:'changeCity'}">切换城市</router-link>
      <span>[</span>
      <span class="nearCity">
        <a href  v-for="(item,index) in nearCity" :key="index">{{item.name}}</a>
      </span>
      <span>]</span>
    </div>
    <div class="m-user" v-if="!$store.state.userName">
      <router-link class="login" :to="{name:'login'}">立即登录</router-link>
      <router-link class="register" :to="{name:'register'}">注册</router-link>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      nearCity: {}
    };
  },
  // 监听状态管理器中的数据变化,当城市变更时候改变数据
  watch: {
    "$store.state.position":function(){
      this.nearCity = this.$store.state.position.nearCity
    }
  },
  created() {
    api.getPosition().then(res => {
      this.$store.dispatch("setPosition", res.data.data);
      this.nearCity = res.data.data.nearCity;
    });
  }
};
</script>

<style>
</style>
