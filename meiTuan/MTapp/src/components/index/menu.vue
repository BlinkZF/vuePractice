<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if="curDatail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item,index) in curDatail" >
        <h2 :key="index">{{item.title}}</h2>
        <span v-for="(v,i) in item.items" :key="v +'_'+ i">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      curDatail: null,
      menuList: [],
    };
  },
  created() {
    api.getNav().then(res=>{
      this.menuList = res.data.data
    })
  },
  methods: {
    menuEnter(data) {
      console.log(data.items)
      this.curDatail = data.items;
    },
    menuLeave() {
      let self = this;
      this.timer = setTimeout(() => {
        this.curDatail = null;
      }, 200);
    },
    detailEnter() {
        clearTimeout(this.timer);
    },
    detailLeave(){
        this.curDatail = null;
    }
  }
};
</script>

<style lang="scss">
</style>
