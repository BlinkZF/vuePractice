<template>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="m-crumbs">
      <el-breadcrumb-item class="el-breadcrumb"  :to="{ path: '/' }">{{$store.state.position}}美团</el-breadcrumb-item>
      <el-breadcrumb-item class="el-breadcrumb" >{{$store.state.position}}{{$route.params.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {};
</script>

<style lang = "scss">
     
</style>
