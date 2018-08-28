<template>
  <div class="lt-wapper">
    this is home page<br/>
    {{ msg }}
    <i class="iconfont icon-doubleright"></i>
    <ul>
      <li>1</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="less">
  @import "../assets/styles/base";
  .lt-wapper {
    width: 7.5rem;
    .boxsize()
  }
</style>
