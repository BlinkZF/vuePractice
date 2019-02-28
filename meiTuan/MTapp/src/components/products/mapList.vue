<!--商家推荐===猜你喜欢模块-->
<template>
  <div class="m-mapList">
    <div class="map-img">
      <img src="../../assets/img/map.png" alt>
    </div>
    <div class="recommend-box">
      <div class="top-nav-box">
        <span>猜你喜欢</span>
      </div>
      <div class="recommend-list" v-for="(item,index) in data" :key="index">
        <router-link to="/" class="recommend-item">
          <div class="recommend-card-wrapper">
            <div class="img-box">
              <img :src="item.imgUrl" alt="图片未加载">
            </div>
            <div class="info-box">
              <span class="info-box-name" style="display:block">{{item.title}}</span>   
                <el-rate
                  v-model="item.score"
                  disabled
                  style="display:inline-block"
                  show-score:false
                  text-color="#ff9900"
                  score-template="{}"
                ></el-rate>
              <span class="comment-number">{{item.commentNum}}个评价</span>
              <span class="info-address">{{item.areaName}}</span>
              <span class="info-price">
                <span class="yuan">￥</span>
                <span class="price">{{item.lowPrice}}</span>
                <span class="price-desc">起</span>
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      data: null
    };
  },
  created() {
    api.getRecommend().then(res => {
      for (let val in res.data.data) {
        res.data.data[val].score = parseFloat(res.data.data[val].score);
      }
      this.data = res.data.data;
    });
  }
};
</script>

<style lang = "scss">
@import "@/assets/css/products/mapList.scss";
</style>
