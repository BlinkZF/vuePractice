<!--首页下方--展示模块-->
<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="navList.class">
      <dt>{{navList.title}}</dt>
      <!-- data-type="all" 这个参数要和后端约定好，这个是要传给后端的 -->
      <dd
        v-for="(item,index) in navList.list"
        :key="index"
        :class="{active:kind == item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in resultsData[kind]" :key="index">
        <el-row>
          <el-card :body-style="{ padding: '0px' }" shadow="never">
            <img :src="item.image" class="image">
            <div class="cbody" style="padding: 0px;">
              <div class="title">{{item.title}}</div>
              <div class="sub-title">{{item.subTitle}}</div>
              <div class="price-info"> 
                <!-- v-if="item.rentNum && item.price_info.current_price" -->
                <span class="current-price-wrapper">
                  <span class="price-symbol numfont">￥</span>
                  <span class="current-price numfont">{{item.price}}</span>
                </span>
                <!-- <span class="old-price">
                  <span>门市价￥{{item.price}}</span>
                </span> -->
                <span class="sold">{{item.address}}</span>
              </div>
              </div>
              <!-- <div class="price-info" v-else-if="!item.rentNum">
                <span class="current-price-wrapper">
                  <span class="price-symbol numfont">￥</span>
                  <span class="current-price numfont">抢光了</span>
                </span>
              </div>
              <div class="price-info" v-else>
                <span class="current-price-wrapper">
                  <span class="price-symbol numfont">￥</span>
                  <span
                    class="current-price numfont"
                  >{{item.price_info.avg_price}}/{{item.price_info.nuits}}</span>
                </span>
              </div>
            </div> -->
          </el-card>
        </el-row>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api/index.js"
export default {
  props: ["navList"],
  data() {
    return {
      kind: "all",
      resultsData:{},
    };
  },
  created() {
    api.getResultsByKeywords().then(res=>{
      this.resultsData = res.data.data;
    })
  },
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
      // 动态获取数据ajax请求
    }
  }
};
</script>

<style lang ="scss">
@import "@/assets/css/index/artistic.scss";
</style>
