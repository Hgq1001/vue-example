<template>
  <div class="search" v-if="searchStatus">
    <div class="search-header">
      <div class="search-box">
        <i class="icon iconfont icon-search"></i>
        <span>搜索</span>
      </div>
      <div class="cancel" @click="changeSearchStatus(false)">
        取消
      </div>
    </div>
  </div>
</template>

<script>
  import store from '../vuex/store';
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';

  export default {
    name: "Search",
    data() {
      return {}
    },
    methods: {
      ...mapMutations(['changeSearchStatus']),
    },
    computed: {
      ...mapState(['searchStatus'])
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../static/px2rem";

  .search {
    position: absolute;
    z-index: 102;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #fff;

  }

  .search-header {
    display: flex;
    flex-direction: row;
    flex: 1;
    margin: px2rem(20);
    align-items: center;
    .search-box {
      display: flex;
      flex: 1;
      padding: px2rem(10);
      background-color: #f3f3f3;
      border-radius: px2rem(8);
      align-items: center;
      .iconfont {
        font-size: px2rem(30);
        margin-left: px2rem(10);
      }
      span {
        margin-left: px2rem(10);
        color: #A8A8A8;
        font-size: px2rem(30);
      }
    }
    .cancel {
      width: px2rem(120);
      color: #00A5E0;
      font-size: px2rem(30);
    }
  }

</style>
