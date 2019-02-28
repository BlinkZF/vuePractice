<!--商家推荐===只能排序...nav-->
<template>
  <div class="m-products-list">
    <ul>
      <li
        v-for="(item,index) in nav"
        :key="index"
        :class="{'s-nav-active':item.active}"
      >{{item.name}}</li>
    </ul>
    <el-row>
      <m-item v-for="(item,index) in productList" :key="index" :meta = "item"/>
    </el-row>
  </div>
</template>

<script>
import MItem from "./item.vue";
import api from "@/api/index.js"
export default {
  components: {
    MItem
  },

  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productList: []
    };
  },
  created() {
    api.getGoodsList().then(res=>{
      this.productList = res.data.data;
    })
  },
};
</script>

<style lang = "scss">
</style>
