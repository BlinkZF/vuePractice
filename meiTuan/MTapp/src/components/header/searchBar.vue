<template>
  <dir class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="searchWorld" placeholder="请输入内容" @focus="focus" @blur="blur"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotPlaceList" :key="index">
              <router-link :to="{name:'goods',parmas:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,index) in searchList" :key="index">
              <router-link :to="{name:'goods',parmas:{name:item}}">{{item}}</router-link>
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
export default {
  data () {
    return {
      searchWorld: '',
      isFocus: false,
      hotPlaceList: ['故宫博物院', '北京世界公园', '颐和园', '北京欢乐谷'],
      searchList: [1, 2, 3, 4, 5, 6, 7],
      suggestList: [
        '故宫博物院',
        '北京世界公园',
        '颐和园',
        '北京欢乐谷',
        '故宫珍宝馆南宫',
        '2019新春游园灯光夜'
      ]
    }
  },
  computed: {
    isHotPlace: function () {
      return this.isFocus && !this.searchWorld
    },
    isSearchList: function () {
      return this.isFocus && this.searchWorld
    }
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      let selt = this
      setTimeout(() => {
        self.isFocus = false
      }, 200)
    }
  }
}
</script>

<style lang = "scss">
@import "@/assets/css/public/header/search.scss";
</style>
