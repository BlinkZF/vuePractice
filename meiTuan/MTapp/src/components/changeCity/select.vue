<template>
  <div
    :class="['choose-wrap', disabled ? 'disabled':'']"
    @click="showWrapper"
    v-document-click="documentClick"
  >
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content': true, 'active':showWrapperActive}">
        <p>{{title}}</p>
        <div :class="['wrapper',className]">
          <div class="col" v-for="(dataItem,index) in renderList" :key="index">
            <span
              :class="{'mt-item':true,'active':item.name == value }"
              v-for="(item,index) in dataItem"
              :key="index"
              @click="changeValue(item)"
            >{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list", "title", "value", "showWrapperActive", "disabled","className"],
  computed: {
    renderList: function() {
      let col = Math.ceil(this.list.length / 12);
      let resultList = [];
      for (let i = 0; i < col; i++) {
        let data = this.list.slice(i * 12, i * 12 + 12);
        resultList.push(data);
      }
      return resultList;
    }
  },
  data() {
    return {};
  },
  methods: {
    showWrapper(e) {
      e.stopPropagation();
      if (!this.disabled) {
        this.$emit("change_active", true);
      }
    },
    documentClick(e) {
      this.$emit("change_active", false);
    },
    changeValue(item) {
      this.$emit("change", item);
    }
  }
};
</script>

<style lang = "scss">
@import "@/assets/css/changecity/select.scss";
</style>
