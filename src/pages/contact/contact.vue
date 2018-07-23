<template>
  <div>
    <div>
      <search-bar></search-bar>
      <ul class="section1">
        <router-link tag="li" :to="{name:'new-friends'}">新的朋友</router-link>
      </ul>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
import searchBar from '../../components/search-bar'
export default {
  components:{
    searchBar
  }
}
</script>

<style lang="scss" scoped>
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