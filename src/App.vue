<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
@import "assets/styles/base";
html {
  touch-action: manipulation;
}
body {
  background-color: @body-bg-color;
  font-size: @font13;
  color: @body-color;
  overflow: hidden;
  #app{
    width: 100%;
    height: 100%;
  }
}
</style>
