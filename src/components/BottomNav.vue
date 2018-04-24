<template>
  <div class="bottom-nav">

    <div class="nav-item" :class="{ active: isActive('Message') }" @click="openPage('/Message')">
      <i class="icon iconfont icon-message"></i>
      <span>消息</span>
    </div>

    <div class="nav-item" :class="{ active: isActive('Friends') }" @click="openPage('/Friends')">
      <i class="icon iconfont icon-lianxirenweixuanzhong"></i>
      <span>联系人</span>
    </div>

    <div class="nav-item" :class="{ active: isActive('Dynamic') }" @click="openPage('/Dynamic')">
      <i class="icon iconfont icon-qzone"></i>
      <span>动态</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "BottomNav",
    data() {
      return {
        nowUrl: '/Message'
      }
    },
    methods: {
      isActive(name) {
        console.log('name:' + name);
        return this.nowUrl.indexOf(name) !== -1;
      },
      openPage(link) {
        this.$router.openPage(link)
      }
    },
    watch: {
      '$route'(to, from) {
        this.nowUrl = to.fullPath
      }
    },
    computed: {},
    created() {
      console.log(this.$router)
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../static/px2rem";

  $themeColor: #12b7f4;

  .bottom-nav {
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    flex: 1;
    width: 100%;
    height: px2rem(100);
    align-items: center;
    border-top: px2rem(2) solid #f1f2f1;
    -webkit-box-shadow: 0 px2rem(3) px2rem(14) px2rem(2) rgba(0, 0, 0, .12);
    box-shadow: 0 px2rem(3) px2rem(14) px2rem(2) rgba(0, 0, 0, .12);
    z-index: 101;
    background-color: white;
  }

  .nav-item {
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;
  }

  .bottom-nav .active {
    color: $themeColor;
  }

  .nav-item .icon {
    font-size: px2rem(36);
  }

  .nav-item span {
    font-size: px2rem(28);
  }

  /*12b7f4*/
</style>
