<template>
  <div class="son">
    <span style="color:red">{{ message === "" ? "此处接受到的值为？" : message }}</span>
    <el-button type="success" @click="informFather">通知父组件</el-button>
  </div>
</template>

<script>
export default {
  name: "Son",
  props: {
    message: {
      type: String,
      default: "默认值",
    },
  },
  data() {
    return {};
  },
  methods: {
    informFather() {
      this.$emit("informFather", this.message);
    },
  },
};
</script>

<style lang="scss" scoped>
.son {
  width: 150px;
  margin: 100px auto;
  .el-button {
    margin-top: 20px;
  }
}
</style>