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
      <li v-for="(item,index) in list" :key="index">
        <el-row>
          <el-card :body-style="{ padding: '0px' }" shadow="never">
            <img :src="item.image" class="image">
            <div class="cbody" style="padding: 0px;">
              <div class="title">{{item.title}}</div>
              <div class="sub-title">{{item.sub_title}}</div>
              <div class="price-info" v-if="item.rentNum && item.price_info.current_price">
                <span class="current-price-wrapper">
                  <span class="price-symbol numfont">￥</span>
                  <span class="current-price numfont">{{item.price_info.current_price}}</span>
                </span>
                <span class="old-price">
                  <span>门市价￥{{item.price_info.old_price}}</span>
                </span>
                <span class="sold">{{item.address}}</span>
              </div>
              <div class="price-info" v-else-if="!item.rentNum">
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
            </div>
          </el-card>
        </el-row>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["navList"],
  data() {
    return {
      kind: "all",
      list: [
        {
          image:
            "//p1.meituan.net/scarlett/7b5f675c70e84c66907759c9a559e5c8112620.jpg@368w_208h_1e_1c",
          title: "幸福西饼生日蛋糕(银河SOHO店)",
          sub_title: "天天好吃花镜1个，约850g，圆型",
          price_info: {
            current_price: 139,
            old_price: 189,
            avg_price: null,
            nuits: null
          },
          rentNum:10,
          address: "朝阳门"
        },
        {
          image:
            "//p1.meituan.net/mogu/4aa363a920b92b922cfaa0298bcfbb65101055.jpg@368w_208h_1e_1c",
          title: "北京国际饭店·霄云厅",
          sub_title: "生日免单自助午餐",
          price_info: {
            current_price: null,
            old_price: null,
            avg_price: 18,
            nuits: "人均"
          },
          rentNum: 10,
          address: "建国门/北京站"
        },
        {
          image:
            "//p1.meituan.net/msmerchant/eafc48adf49bb622e4a6fb17d0749bac215377.jpg@368w_208h_1e_1c",
          title: "CAKEBOSS蛋糕老板(王府井apm店)",
          sub_title: "酷炫黑巧乳酪蛋糕,越2.8磅,圆形",
          price_info: {
            current_price: 299,
            old_price: 499
          },
          address: "王府井/东单"
        },
        {
          image:
            "//p1.meituan.net/scarlett/7b5f675c70e84c66907759c9a559e5c8112620.jpg@368w_208h_1e_1c",
          title: "幸福西饼生日蛋糕(银河SOHO店)",
          sub_title: "天天好吃花镜1个，约850g，圆型",
          price_info: {
            current_price: 139,
            old_price: 189
          },
          address: "朝阳门"
        },
        {
          image:
            "//p1.meituan.net/scarlett/7b5f675c70e84c66907759c9a559e5c8112620.jpg@368w_208h_1e_1c",
          title: "幸福西饼生日蛋糕(银河SOHO店)",
          sub_title: "天天好吃花镜1个，约850g，圆型",
          price_info: {
            current_price: 139,
            old_price: 189
          },
          address: "朝阳门"
        },
        {
          image:
            "//p1.meituan.net/scarlett/7b5f675c70e84c66907759c9a559e5c8112620.jpg@368w_208h_1e_1c",
          title: "幸福西饼生日蛋糕(银河SOHO店)",
          sub_title: "天天好吃花镜1个，约850g，圆型",
          price_info: {
            current_price: 139,
            old_price: 189
          },
          address: "朝阳门"
        }
      ]
    };
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
