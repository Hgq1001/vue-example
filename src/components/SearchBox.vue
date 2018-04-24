<template>
  <div class="search-box">

    <div class="search" @click="changeBottomNavStatus(false)">

      <i class="icon iconfont icon-search"></i>
      <span>搜索</span>

    </div>
  </div>

</template>

<script>

  import store from '../vuex/store';
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';

  export default {
    name: "SearchBox",
    data() {
      return {}
    },
    methods: {
      ...mapMutations(['changeBottomNavStatus']),
    },
    // props: ['clickSearch']
  }
</script>

<style lang="scss" scoped>
  @import "../../static/px2rem";

  .search-box{
    background-color: #fff;
    margin-top: px2rem(120);
  }

  .search {
    width: 96%;
    height: px2rem(60);
    margin: px2rem(20) 2%;
    background-color: #f3f3f3;
    border-radius: px2rem(10);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  .search-box {
    display: flex;

  }

  .search .icon {
    font-size: px2rem(36);
    margin-right: px2rem(10);
  }

  .search span {
    margin-left: px2rem(10);
    font-size: px2rem(28);
  }
</style>
