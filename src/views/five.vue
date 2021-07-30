<template>
  <div>
    <div class="father">
      <transition name="el-fade-in-linear">
      </transition>
      <el-input
        v-model="sendMessage"
        placeholder="请发送数据给子组件"
      ></el-input>
        <i class="el-icon-message-solid transition-box" style="color:#5daf34;display:block;marginTop:10px" v-if="show"></i>
      <el-button type="primary" @click="sendMsgToSon">发送给子组件</el-button>
    </div>

    <Son :message="message" @informFather="informFather" />
  </div>
</template>

<script>
import Son from "@/components/Son.vue";
export default {
  components: {
    Son,
  },
  data() {
    return {
      sendMessage: "",
      message: "",
      show:false,
    };
  },
  methods: {
    sendMsgToSon() {
        this.$message({
        type: "success",
        message: "已发送数据给子组件",
      });
      this.message = this.sendMessage;
    },
    informFather(v) {
        this.show = true
      this.$message({
        type: "warning",
        message: "子组件已接受到父组件的值为：" + v,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.father {
  width: 300px;
  margin: 50px auto;
  .el-button {
    margin-top: 20px;
  }
}
</style>