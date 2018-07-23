<template>
  <div class="app-footer">
      <ul>
          <router-link tag="li" :to="{name: 'chat'}">
              <i class="iconfont icon-wechat"></i>
              <p>微信</p>
          </router-link>
          <router-link tag="li" :to="{name: 'contact'}">
              <i class="iconfont icon-contact"></i>
              <p>联系人</p>
          </router-link>
          <router-link tag="li" :to="{name: 'find'}">
              <i class="iconfont icon-find"></i>
              <p>发现</p>
          </router-link>
          <router-link tag="li" :to="{name: 'me'}">
              <i class="iconfont icon-me"></i>
              <p>我</p>
          </router-link>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    computed:{
        appNavs(){
            return this.$store.state.appNavs;
        }
    },
    methods:{
    },
    mounted(){

    }
};
</script>

<style lang="scss" scoped>
.app-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  &:before{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      content: " ";
      display: block;
      background:lightgray;
  }
}
ul li {
  width: 25%;
  float: left;
  padding-top: 8px;
  height: 50px;
  color: #929292;
  & i{
      display: block;
      width: 26px;
      height: 26px;
      font-size: 26px;
      margin: 0 auto;
  }
  & p{
      margin-top: 2px;
      font-size: 12px;
      text-align: center;   
  }
}
.router-link-active{
    color: #0bb908;
}
</style>


