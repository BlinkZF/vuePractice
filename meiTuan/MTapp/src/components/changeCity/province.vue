<template>
  <div>
    <span class="name">按省份选择</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
       @change = "changeProvince"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change = "changeCity"
    />
    <span>直接搜索</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="false"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from "./select.vue";
export default {
  components: {
    MSelect
  },
  data() {
    return {
      provinceList: [
        "山东",
        "甘肃",
        "江苏",
        "北京",
        "云南",
        "海南",
        "浙江",
        "上海",
        "天津",
        "陕西",
        "新疆",
        "贵州"
        // "安徽",
        // "澳门",
        // "湖南",
        // "河北",
        // "香港",
        // "辽宁",
        // "四川",
        // "宁夏",
        // "吉林",
        // "福建",
        // "湖北",
        // "广东",
        // "重庆",
        // "山西",
        // "江西",
        // "黑龙江",
        // "青海",
        // "河南",
        // "台湾",
        // "内蒙古",
        // "西藏",
        // "广西"
      ],
      province: "省份",
      cityList: [
        "西安",
        "铜川",
        "宝鸡",
        "咸阳",
        "渭南",
        "延安",
        "汉中",
        "榆林",
        "安康",
        "商洛",
        "华阴",
        "兴平"
      ],
      city: "城市",
      provinceActive: false,
      cityActive: false,
      searchList: [
        "包头",
        "保定",
        "蚌埠",
        "亳州",
        "滨州",
        "宝鸡",
        "白城",
        "霸州",
        "巴彦淖尔"
      ],
      searchWord: ""
    };
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    remoteMethod(e) {
      //当输入的时候进行远程搜索,请求后端接口
      console.log(e);
    },
    changeProvince(value){
      console.log(value)
      this.province = value
    },
    changeCity(value){
      console.log(value)
      this.city = value
    }
  }
};
</script>

<style lang = "scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
