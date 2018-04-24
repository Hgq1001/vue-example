<template>
  <div class="header">
    <div class="avatar" @click="changeSideBarStatus(true)">
      <img src="../../static/images/avatar-default.png" alt="">
    </div>
    <div class="title">
      <span class="titleBox">{{title}}</span>
    </div>
    <div class="more">
      <!--<i class="icon iconfont icon-add"></i>-->
      <!--<el-dropdown trigger="click" size="medium">-->
        <!--<i class="icon iconfont icon-add el-dropdown-link"></i>-->
        <!--<el-dropdown-menu slot="dropdown">-->

          <!--<el-dropdown-item v-for="item in dropDownList">-->
            <!--{{item.title}}-->
          <!--</el-dropdown-item>-->
        <!--</el-dropdown-menu>-->
      <!--</el-dropdown>-->
      <slot>

      </slot>
    </div>
  </div>
</template>

<script>
  import store from '../vuex/store'
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';

  export default {
    store,
    name: "Header",
    data() {
      return {
        dropDownList:[{title:'测试1'},{title:'测试2'},{title:'测试3'},{title:'测试4'}]
      }
    },
    methods: {
      ...mapMutations(['changeSideBarStatus']),
    },
    props: ['title','child']
  }
</script>

<style lang="scss" scoped>
  @import "../../static/px2rem";

  .header {
    background-color: #12b7f4;
    padding: px2rem(20);
    height: px2rem(80);
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;

  }

  .avatar {
    width: px2rem(80);
    height: px2rem(80);
    border-radius: px2rem(80);
    border: px2rem(0.1) solid transparent;
    /*cursor: pointer;*/
  }

  .avatar img {
    width: px2rem(80);
    height: px2rem(80);
  }

  .title {
    flex: 1;
    color: #fff;
    font-size: px2rem(40);
    margin: 0 px2rem(5);
  }

  .title span {
    text-align: center;
  }

  .more {
    width: px2rem(120);
    align-items: center;
    justify-content: center;
  }



</style>
