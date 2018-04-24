<template>
  <div class="side-bar" v-if="sideBarStatus">
    <div class="side-bar-content">
      <div class="side-bar-content-top">
        <div class="user-info">
          <div class="avatar">
            <img src="../../static/images/avatar-default.png" alt="">
            <span>何某某</span>
          </div>
          <span class="signature">你永远要感谢给你逆境的众生</span>
        </div>
      </div>
    </div>
    <div class="side-bar-blank" @click="changeSideBarStatus(false)"></div>
  </div>
</template>

<script>
  import store from '../vuex/store';
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';

  export default {
    store,
    name: "SideBar",
    data() {
      return {}
    },
    methods: {
      ...mapMutations(['changeSideBarStatus']),
    },
    computed: {
      ...mapState(['sideBarStatus'])
    },
    // props: ['isShowSideBar']
  }
</script>


<style lang="scss" scoped>
  @import "../../static/px2rem";

  .side-bar {
    width: 100vw;
    height: 100vh;
    z-index: 201;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex: 1;
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: row;

  }

  .showSideBar {

  }

  .hideSideBar {

  }

  .side-bar-content {
    background-color: #fff;
    width: 70%;
  }

  .side-bar-content-top {
    background: rgba(204, 146, 104, 0.52);
    width: 100%;
    height: px2rem(300);
    display: flex;
    /*justify-content: center;*/
    /*flex-direction: column;*/
    .user-info {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: left;
      .avatar {
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: flex-end;
        padding-left: px2rem(30);
        padding-bottom: px2rem(20);
        img {
          width: px2rem(70);
          height: px2rem(70);
          border-radius: px2rem(70);
          background: #fff;
          padding: px2rem(4);
        }
        span {
          color: #fff;
          margin-left: px2rem(20);
        }
      }
      .signature {
        display: inline-block;
        height: px2rem(60);
        color: #fff;
        font-size: px2rem(28);
        padding-left: px2rem(40);
      }
    }
  }

  .side-bar-blank {
    /*background-color: #ff0000;*/
    width: 30%;
  }


</style>
