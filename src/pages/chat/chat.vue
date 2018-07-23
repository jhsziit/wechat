<template>
  <div>
    <search-bar></search-bar>
    <div>wechat</div>
  </div>
</template>

<script>
import searchBar from '../../components/search-bar'
export default {
  components:{
    searchBar
  },
  created(){
    
  },
  mounted(){
    this.$emit('setHead',{
      backBtn:false,
      plusBtn:true,
      addNewFriendBtn:true
    })
  }
}
</script>

<style lang="scss" scoped>

</style>


