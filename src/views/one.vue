<template>
  <div>
    <div class="main">
      <div class="inputBox">
        <div>
          <span>输入字符串：</span>
          <el-input
            class="inputs"
            v-model="inputIn"
            placeholder="单行输入"
          ></el-input>
        </div>
        <div>
          <span>输出字符串：</span>
          <el-input
            class="inputs"
            v-model="inputOut"
            placeholder="单行输入"
          ></el-input>
        </div>
      </div>
      <div class="tips">
        <p>
          用JavaScript对字符串进行去重，然后将去重后的字符串排序，通过页面上的输入接受输入字符串，将结果输出在输出字符串input中（例如输入cdcdaed，输出acde）
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "One",
  data() {
    return {
      inputIn: "",
      inputOut: "",
    };
  },
  methods: {
    transformValue(v) {
        if(!(/^[a-z]+$/g.test(v))) return '请输入a-z范围内的字母'
        let uniqueValue = new Set(...[v])
      return [...uniqueValue].sort();
    },
  },
  watch: {
    inputIn(value) {
      let res = this.transformValue(value);
      this.inputOut = res.length===1 ?  res[0] : typeof res === 'string' ? res : res.join('');
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 50rem;
  margin: 0 auto;
  display: flex;
  .inputBox {
    width: 25rem;
    .inputs {
      display: inline-block;
      width: 15rem;
      margin-top: 10px;
    }
  }
  .tips {
    width: 25rem;
    border: 1px solid black;
  }
}
</style>