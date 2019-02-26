<template>
  <div>
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item,index) in list" :key="index">
        <a :href="'#city-'+item">{{item}}</a>
      </dd>
    </dl>
    <dl class="m-categroy-section" v-for="(item,index) in cityGroup" :key="index" :id="'city-'+index">
        <dt>{{index}}</dt>
        <dd v-for="(city,i) in item" :key="i"><span>{{city.name}}</span></dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: "ABCDEFGHJKLMNPQRSTWXYZ".slice(""),
      cityGroup:null,
    };
  },
  created() {
    var data = [
      {
        id: 1,
        name: "北京",
        pinyin: "beijing",
        acronym: "bj",
        rank: "s",
        firstChar: "b"
      },
      {
        id: 2,
        name: "上海",
        pinyin: "shanghai",
        acronym: "sh",
        rank: "s",
        firstChar: "s"
      },
      {
        id: 3,
        name: "广州",
        pinyin: "guangzhou",
        acronym: "gz",
        rank: "s",
        firstChar: "g"
      },
      {
        id: 4,
        name: "深圳",
        pinyin: "shenzhen",
        acronym: "sz",
        rank: "s",
        firstChar: "s"
      },
      {
        id: 5,
        name: "西安",
        pinyin: "xian",
        acronym: "xa",
        rank: "s",
        firstChar: "x"
      },
      {
        id: 6,
        name: "重庆",
        pinyin: "chongqing",
        acronym: "cq",
        rank: "s",
        firstChar: "c"
      },
      {
        id: 7,
        name: "天津",
        pinyin: "tianjin",
        acronym: "tj",
        rank: "s",
        firstChar: "t"
      },
      {
        id: 8,
        name: "哈尔滨",
        pinyin: "haerbin",
        acronym: "heb",
        rank: "s",
        firstChar: "h"
      },
      {
        id: 9,
        name: "南京",
        pinyin: "nanjing",
        acronym: "nj",
        rank: "s",
        firstChar: "n"
      },
      {
        id: 10,
        name: "眉县",
        pinyin: "meixian",
        acronym: "mx",
        rank: "s",
        firstChar: "m"
      }
    ];
    let obj = {};
    // 对数据按照首字母进行分组
    data.forEach((item,index) => {
        if(!obj[item.firstChar.toUpperCase()]){
            obj[item.firstChar.toUpperCase()] = []
        }
        obj[item.firstChar.toUpperCase()].push(item)
    })
    this.cityGroup = obj;
  }
};
</script>

<style lang = 'scss'>
@import "@/assets/css/changecity/categroy.scss";
</style>
