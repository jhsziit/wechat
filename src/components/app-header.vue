<template>
  <div>
    <mt-header fixed :title="headTitle" style="background:#000">
      <router-link :to="{path:backPath}" slot="left" v-show="backBtn">
        <mt-button icon="back">{{backBtnText?backBtnText:'返回'}}</mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
import Header from 'mint-ui'
export default {
  data() {
    return {
      backPath:''
    };
  },
  props: ['backBtn', 'backBtnText'],
  computed: {
    headTitle() {
      return this.$route.meta.title;
    }
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    setBackText(text) {
      this.backBtnText = this.$store.state.backBtnText;
    }
  },
  mounted() {
    let backPathList = sessionStorage.getItem("routerItems").split(";");
    let _length = backPathList.length
    this.backPath=_length>1?backPathList[_length - 2]:'/';
  }
};
</script>

<style lang="scss" scoped>
.app-header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  background: linear-gradient(180deg, #303036, #3c3b40);
  height: 45px;
  width: 100%;
  color: white;
  font-size: 19px;
  & .left {
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
    height: 45px;
    line-height: 45px;
    padding: 0 10px;
    text-align: left;
    & .iconfont {
      font-size: 22px;
      position: relative;
      top: 1px;
    }
  }
  & .center {
    z-index: 2;
    width: 60%;
    height: 45px;
    line-height: 45px;
    margin: 0 auto;
    text-align: center;
  }
  & .right {
    z-index: 3;
    position: absolute;
    top: 0;
    right: 0;
    height: 45px;
    line-height: 45px;
    text-align: right;
    padding: 0 15px;
    & .iconfont {
      font-size: 22px;
    }
  }
}
</style>


