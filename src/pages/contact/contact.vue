<template>
  <div>
    <search-bar></search-bar>
    <mt-cell title="新的朋友" :to="{name:'new-friends'}">
      <img slot="icon" src="../../assets/images/contact_top-friend-notify.png" width="24" height="24">
    </mt-cell>
    <mt-cell title="群聊" :to="{name:'new-friends'}">
      <img slot="icon" src="../../assets/images/contact_add-friend-addgroup.png" width="24" height="24">
    </mt-cell>
    <mt-cell title="标签" :to="{name:'new-friends'}">
      <img slot="icon" src="../../assets/images/contact_top-tag.png" width="24" height="24">
    </mt-cell>
    <mt-cell title="公众号" :to="{name:'new-friends'}">
      <img slot="icon" src="../../assets/images/contact_top-offical.png" width="24" height="24">
    </mt-cell>
  </div>
</template>

<script>
import searchBar from "../../components/search-bar";
export default {
  components: {
    searchBar
  }
};
</script>

<style lang="scss" scoped>

</style>