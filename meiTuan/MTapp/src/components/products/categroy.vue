<!--商家推荐==分类区域模块-->
<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item,index) in menuList" :key="index">
        <m-select :name="item.title" :list="item.subList"/>
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="(item,index) in menuList" :key="index">
        <m-select :name="item.title" :list="item.subList"/>
      </dd>
    </dl>
  </div>
</template>

<script>
import MSelect from "./select.vue";
import api from "@/api/index.js"
export default {
  components: {
    MSelect
  },
  data() {
    return {
      menuList: []
    };
  },
  created () {
    api.getClassify().then(res=>{
      this.menuList = res.data.data
      console.log(this.menuList);
    })
  }
};
</script>

<style>
</style>
