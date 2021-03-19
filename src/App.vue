<template>
  <div id="app">
    <!--进行数据的显示-->
    <router-view/>
    <!--大写转小写中间加— -->
    <main-tab-bar/>
  </div>
</template>
<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'

  export default {
    name: 'app',
    components: {
      MainTabBar
    }
  }
</script>
<style>
  @import "./assets/css/base.css";
</style>
