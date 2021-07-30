<template>
  <div>
    <div class="main">
      <div class="box">
        <div class="littleBox"></div>
        <div class="littleBox"></div>
        <div class="littleBox"></div>
        <div class="littleBox"></div>
        <div class="littleBox"></div>
        <div class="littleBox"></div>
        <div class="littleBox"></div>
        <div class="littleBox"></div>
        <div class="littleBox"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  lang="scss" scoped>
.main {
    .box{
      width: 40rem;
      height: 40rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background-color: rgb(227, 227, 227);
      flex-wrap: wrap;
    .littleBox{
        width: 10rem;
        height: 10rem;
        margin: 1rem;
        background-color: rgb(255, 152, 0);
    }
  }
}
</style>