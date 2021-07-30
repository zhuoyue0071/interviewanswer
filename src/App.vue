<template>
  <div id="app">
    <div id="nav">
      <router-link to="/one">第一页</router-link> |
      <router-link to="/two">第二页</router-link> |
      <router-link to="/three">第三页</router-link> |
      <router-link to="/four">第四页</router-link> |
      <router-link to="/five">第五页</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
