<!--首页右侧-->
<template>
  <div class="m-life">
    <el-row>
      <ul class="nav">
        <li>
          <router-link to="/" class="takeout">美团外卖</router-link>
        </li>
        <li>
          <router-link to="/" class>猫眼电影</router-link>
        </li>
        <li>
          <router-link to="/" class>美团酒店</router-link>
        </li>
        <li>
          <router-link to="/" class="apartment">名宿公寓</router-link>
        </li>
        <li>
          <router-link to="/" class="business">商家入驻</router-link>
        </li>
        <li>
          <router-link to="/" class>美团公益</router-link>
        </li>
      </ul>
    </el-row> 
    <el-row>
      <el-col :span="14">
        <m-slider/>
      </el-col>
      <el-col :span="4" class="m-life-pic">
      </el-col>
      <el-col :span="5.99" class="login-wrp">
        <div class="m-life-login-wrap">
          <h4>
            <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt>
          </h4>
          <p  v-if="!$store.state.userName">
          <p class="m-life-login-name">Hi!{{$store.state.userName?store.state.userName:你好}}</p>
          <p>
            <router-link to="{name:'register'}">
              <el-button round>注册</el-button>
            </router-link>
          </p>
          <p>
            <router-link to="{name:'login'}">
              <el-button round>立即登陆</el-button>
            </router-link>
          </p>
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row>
        <el-col :span = "7">
            <div class="m-life-hotel"></div>
        </el-col>
        <el-col :span = "7">
            <div class="m-life-music"></div>
        </el-col>
        <el-col :span = "4">
            <div class="m-life-coop"></div>
        </el-col>
        <el-col :span = "6">
            <div class="m-life-downapp">
                <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
                <p>美团App手机版</p>
                <p class="last-p">
                    <span>1元起</span>
                    <span>吃喝玩乐</span>
                </p>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import MSlider from "@/components/index/slider";
export default {
  components: {
    MSlider
  }
};
</script>

<style lang ="scss" >
@import "@/assets/css/index/life.scss";
.login-wrp{
    width: 24.6%;
}
</style>
