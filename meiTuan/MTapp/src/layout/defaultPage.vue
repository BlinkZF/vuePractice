<template>
  <div class="layout-default">
    <el-container>
      <el-header>
        <my-header/>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import myHeader from "@/components/header/index.vue";
export default {
  components: {
    myHeader
  }
};
</script>

<style lang = "scss">
  @import '@/assets/css/public/layout.scss';
</style>
