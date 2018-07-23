<template>
  <div class="search">
    <div class="search-btn">
      <i class="weui_icon_search"></i>
      <span>搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.search{
  background: #efeff4;
  padding: 8px 10px;
  & .search-btn{
    // position: relative;
    background: #fff;
    color: #9b9b9b;
    border-radius: 3px;
    text-align: center;
    padding: 6px 0;
    & i{
      display: inline-block;
      position: relative;
      top: -2px;
    }
    & span{
      font-size: 14px;
    }
  }
}
</style>


