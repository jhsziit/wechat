<template>
  <div>
    <app-header backBtn="true" backBtnText="联系人"></app-header>
    <div class="view-content" >
      <ul class="section1">
        <router-link tag="li" :to="{name:'personal-details'}">点击跳转</router-link> 
      </ul>
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/app-header'
export default {
  data() {
    return {
      level:null,
      transitionName: ""
    };
  },
  components:{
    appHeader
  },
  watch: {
    $route(to, from) {
      let toLevel = to.meta.level;
      this.level = toLevel;
      let fromLevel = from.meta.level;
      if (toLevel>fromLevel) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.child-view {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
.second-view{
  z-index: 2;
  -webkit-transform: translateX(-50px);
  transform: translateX(-50px);
}
.inside-view-enter,
.inside-view-leave-active {
  z-index: 3;
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}
.second-view-leave-active,
.second-view-enter {
  -webkit-transform: translateX(-50px);
  transform: translateX(-50px);
}
.view-content{
  padding-top: 40px;
}
.section1{
  background: #fff;
  & li{
    height: 54px;
    line-height: 37px;
    padding: 8px 10px;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    font-size: 18px;
  }
}
</style>