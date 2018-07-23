<template>
  <div>
    <app-header></app-header>
    <router-view class="app-content"></router-view>
    <app-nav></app-nav>
  </div>
</template>

<script>
import appHeader from "@/components/app-header";
import appNav from "../components/app-nav";
export default {
  data() {
    return {};
  },
  components: {
    appHeader,
    appNav
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-content {
  padding: 40px 0 50px;
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
  z-index: 3;
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}
.slide-left-leave-active,
.slide-right-enter {
  -webkit-transform: translateX(-50px);
  transform: translateX(-50px);
}
</style>
