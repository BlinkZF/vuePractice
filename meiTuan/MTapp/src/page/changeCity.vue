<template>
  <div class="page-changeCity">
    <el-row>
      <province/>
    </el-row>
    <el-row>
      <hot title = "热门城市" :list="hotList"/>
    </el-row>
    <el-row>
      <hot title = "最近访问" :list="rencentList"/>
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
export default {
  components: {
    province,
    Hot,
    categroy
  },
  data () {
      return {
          hotList:['北京','上海','广州','深圳','天津','西安','重庆','杭州','南京','武汉','成都'],
          rencentList:['北京'],
      }
  }
};
</script>

<style>
</style>
