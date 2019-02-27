<template>
  <div class="page-changeCity">
    <el-row>
      <province/>
    </el-row>
    <el-row>
      <hot title="热门城市" :list="hotList"/>
    </el-row>
    <el-row>
      <hot title="最近访问" :list="rencentList"/>
    </el-row>
    <el-row>
      <categroy/>
    </el-row>
  </div>
</template>

<script>
import province from "@/components/changeCity/province.vue";
import Hot from "@/components/changeCity/hotCity.vue";
import categroy from "@/components/changeCity/categroy.vue";
import api from "@/api/index.js";
export default {
  components: {
    province,
    Hot,
    categroy
  },
  data() {
    return {
      hotList: [],
      rencentList: []
    };
  },
  created() {
    api.getHot().then(res => {
      this.hotList = res.data.data
  })
    api.getRecents().then(res => {
      this.rencentList = res.data.data
  })
}}
</script>

<style>
</style>
