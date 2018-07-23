<template>
  <div id="app">
    <transition :name="animation">
        <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
let routerItems = [];

export default {
  name: "App",
  data() {
    return {
      routerGo: false,
    };
  },
  mounted() {
    routerItems.push(this.$route.path);
    this.$axios.get('/api/restaurants/').then(res => {
      console.log(res);
    })
  },
  watch: {
    $route(to, from, next) {
      //判断路由前进后退
      if (routerItems[routerItems.length-2] === to.path && routerItems.length > 0) {
        this.routerGo = false;
        routerItems.pop();
      } else {
        this.routerGo = true;
        routerItems.push(to.path);
      }
      console.log(routerItems);
      sessionStorage.setItem("routerItems", routerItems.join(";"));
    }
  },
  computed:{
    animation(){
      return this.routerGo ? 'slide-left' : 'slide-right';
    }
  }
};
</script>

<style lang="scss">
// @import url(./assets/css/base.css);
html,
body {
  overflow: hidden;
}
.child-view {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  z-index: 2;
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  box-shadow: 0 0 10px #d9d9d9;
}
.slide-left-leave-active,
.slide-right-enter {
  -webkit-transform: translateX(-30%);
  transform: translateX(-30%);
}
</style>

