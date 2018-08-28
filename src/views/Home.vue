<template>
  <div class="lt-wapper">
    this is home page<br/>
    {{ msg }}
    <i class="iconfont icon-doubleright"></i>
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
  .lt-wapper {
    width: 7.5rem;
  }
</style>
