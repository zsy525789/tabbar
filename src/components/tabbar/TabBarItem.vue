<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
<!--    <img src="../../assets/img/tabbar/index.svg" alt="">-->
<!--    <div>首页</div>-->
  </div>
<!--  <div class="tab-bar-item">-->
<!--    <img src="../../assets/img/tabbar/index.svg" alt="">-->
<!--    分类-->
<!--  </div>-->
<!--  <div class="tab-bar-item">-->
<!--    <img src="../../assets/img/tabbar/index.svg" alt="">-->
<!--    购物车-->
<!--  </div>-->
<!--  <div class="tab-bar-item">-->
<!--    <img src="../../assets/img/tabbar/index.svg" alt="">-->
<!--    我的-->
<!--  </div>-->
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default : 'red'
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle(){
      return this.isActive ? {color : this.activeColor} : {}
    }
  },
  data(){
    return {
      // isActive: false
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
