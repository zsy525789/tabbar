<template>
  <div id="app">

    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/index.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/index_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/catory.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/catory_Active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcar" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/shopcar.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcar_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/tabbar/TabBar'
import TabBarItem from "components/tabbar/TabBarItem";

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
