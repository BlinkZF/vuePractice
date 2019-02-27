<template>
  <dir class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWorld"
            placeholder="请输入内容"
            @focus="focus"
            @blur="blur"
            @input="Input"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotPlaceList" :key="index">
              <router-link :to="{ name: 'goods', params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(v,i) in searchList" :key="i">
              <router-link :to="{ name: 'goods', params:{name:v} }">{{v}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#" v-for="(item,index) in suggestList" :key="index ">{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </dir>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      searchWorld: "",
      isFocus: false,
      hotPlaceList: [],
      searchList: [],
      suggestList: []
    };
  },
  created() {
    api.getSearchHotWords().then(res => {
      this.suggestList = res.data.data;
      this.hotPlaceList = res.data.data.slice(0,4);
    });
  },
  computed: {
    isHotPlace: function() {
      return this.isFocus && !this.searchWorld;
    },
    isSearchList: function() {
      return this.isFocus && this.searchWorld;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      let self = this;
      setTimeout(() => {
        self.isFocus = false;
      }, 200);
    },
    Input() {
        api.getSearch().then(res => {
          // 前端过滤
          let val = this.searchWorld;
          console.log(res);
          this.searchList = res.data.data.list.filter((item, index) => {
            return item.indexOf(val) > -1
          });
        });
    }
  }

};
</script>

<style lang = "scss">
@import "@/assets/css/public/header/search.scss";
</style>
