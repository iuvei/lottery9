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
@import "assets/styles/theme";
html {
  touch-action: manipulation;
}
body {
  background-color: @body-background-color;
  font-size: 0.32rem;
}
</style>
