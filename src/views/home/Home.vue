<template>
  <div>
    <nav-bar class="navBar">
      <p slot="center">购物车</p>
    </nav-bar>
    <main-swiper :banners="banners"></main-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <home-feature/>
    <tab-control class="tabControl" :tabControl="['流行','新款','精选']"></tab-control>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
  //公共组件
  import NavBar from "components/common/navBar/NavBar";
  import MainSwiper from "components/content/mainSwiper/MainSwiper";
  import TabControl from "components/common/tabControl/TabControl";
  //子组件
  import HomeRecommend from "./childComps/HomeRecommend";
  import HomeFeature from "./childComps/HomeFeature";
  //数据请求
  import {getHomeMultidata} from 'network/home';

  export default {
    name: "Home",
    components: {
      NavBar,
      MainSwiper,
      TabControl,
      HomeRecommend,
      HomeFeature
    },
    data() {
      return {
        banners: [],//banner数据
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        console.log("--------", res)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
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
    position: fixed;
    z-index: 9;
  }
  .tabControl{
    position: sticky;
    top: 44px;
  }
</style>
