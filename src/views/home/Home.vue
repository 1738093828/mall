<template>
  <div>
    <nav-bar class="navBar">
      <p slot="center">购物车</p>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import {getHomeMultidata} from 'network/home';

  export default {
    name: "Home",
    components: {
      NavBar
    },
    data() {
      return {}
    },
    created() {
      getHomeMultidata().then(res => {
        console.log("--------", res)
      }).catch(err => {
        console.log("--------", err)
      })
    }
  }
</script>

<style scoped>
  .navBar {
    background: var(--color-tint);
    color: var(--color-background);
    text-align: center;
    line-height: 44px;
  }
</style>
