<template>
  <div>
    <app-header backBtn="true"></app-header>
    <div class="view-content" >
      <ul class="section1">
        <li>personal-details</li>
      </ul>
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/app-header'
export default {
  components:{
    appHeader
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