<template>
  <div class="friends">

    <Header title="联系人">
      <span class="moreTitle">添加</span>
    </Header>

    <SearchBox/>

    <div class="friends-content">

      <div class="top-content">
        <div class="setting-item">
          <div class="setting-item-name">新朋友</div>
          <i class="icon iconfont icon-i-right"></i>
        </div>
        <div class="setting-item">
          <div class="setting-item-name">创建群聊</div>
          <i class="icon iconfont icon-i-right"></i>
        </div>
      </div>

      <div class="nav-list">
        <mt-navbar class="page-part" v-model="selected">
          <mt-tab-item id="friends">好友</mt-tab-item>
          <mt-tab-item id="groupChat">群聊</mt-tab-item>
          <mt-tab-item id="device">设备</mt-tab-item>
          <mt-tab-item id="addressList">通讯录</mt-tab-item>
          <mt-tab-item id="public">公众号</mt-tab-item>
        </mt-navbar>
      </div>

      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="friends">
          <div class="friends-list " v-for="item in friendList">
            <i class="icon iconfont icon-i-right"></i>
            <div class="groupName">{{item.groupName}}</div>
            <div class="number">{{item.number}}</div>
          </div>
          <!--<mt-cell v-for="item in friendList">-->

          <!--</mt-cell>-->
        </mt-tab-container-item>
        <mt-tab-container-item id="groupChat">
          <div class="friends-list tabs">
            这是群聊
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="device">
          <div class="friends-list tabs">
            这是设备
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="addressList">
          <div class="friends-list tabs">
            这是通讯录
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="public">
          <div class="friends-list tabs">
            这是公众号
          </div>
        </mt-tab-container-item>
      </mt-tab-container>

    </div>

    <!--<BottomNav/>-->

  </div>
</template>

<script>
  import Header from '../components/Header';
  import SearchBox from '../components/SearchBox';
  import BottomNav from '../components/BottomNav'

  export default {
    name: "Friends",
    components: {
      Header,
      SearchBox,
      BottomNav
    },
    data() {
      return {
        selected: 'friends',
        friendList: [
          {
            groupName: "特别关心",
            icon: "/images/close.png",
            number: "0/0"
          },
          {
            groupName: "常用群聊",
            icon: "/images/close.png",
            number: "1/1"
          },
          {
            groupName: "我的好友",
            icon: "/images/close.png",
            number: "41/53"
          },
          {
            groupName: "三年情",
            icon: "/images/close.png",
            number: "4/10"
          },
          {
            groupName: "十年友",
            icon: "/images/close.png",
            number: "10/20"
          },
          {
            groupName: "前端开发组",
            icon: "/images/close.png",
            number: "10/22"
          },
          {
            groupName: "后台开发组",
            icon: "/images/close.png",
            number: "4/9"
          },
          {
            groupName: "微信小程序",
            icon: "/images/close.png",
            number: "12/13"
          },
          {
            groupName: "滥人情",
            icon: "/images/close.png",
            number: "3/8"
          },
          {
            groupName: "娇人笑",
            icon: "/images/close.png",
            number: "4/9"
          },
          {
            groupName: "奈何桥",
            icon: "/images/close.png",
            number: "6/13"
          },
          {
            groupName: "乱人心",
            icon: "/images/close.png",
            number: "1/3"
          },
          {
            groupName: "惹人爱",
            icon: "/images/close.png",
            number: "9/12"
          },
          {
            groupName: "惹人醉",
            icon: "/images/close.png",
            number: "10/21"
          }
        ]
      }
    },
    methods: {
      clickSearch() {

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../static/px2rem";

  .friends {

    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .moreTitle {
    font-size: px2rem(36);
    color: white;
  }

  .friends-content {
    background-color: #F9F9FB;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    .top-content {
      background-color: white;
      width: 100%;
      .setting-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: px2rem(16);
        border-bottom: px2rem(1) solid #E0E1E2;
        border-top: px2rem(1) solid #E0E1E2;
        .setting-item-name {
          flex: 1;
          text-align: left;
          font-size: px2rem(40);
          color: #000;
        }
        .iconfont {
          font-size: px2rem(40);
          color: #858585;
        }
      }
    }

    .nav-list {
      margin-top: px2rem(30);
      .page-part {
        border-bottom: px2rem(1) solid #E0E1E2;
        border-top: px2rem(1) solid #E0E1E2;

        .is-selected {
          border-bottom: px2rem(3) solid #26a2ff;
          color: #26a2ff;
          margin-bottom: 0;
        }
      }
    }

    .mint-tab-container {
      padding-bottom: px2rem(100);
    }
    .mint-tab-container-item {
      background-color: #ffffff;
    }
    .tabs{
      min-height: px2rem(600);
    }

    .friends-list {
      display: flex;
      flex-direction: row;
      flex: 1;
      padding: px2rem(20) px2rem(20);
      align-items: center;
    }

    .friends-list .iconfont {
      font-size: px2rem(30);
      color: #c4c4c4;
      width: px2rem(50);
    }

    .friends-list .groupName {
      flex: 1;
      color: black;
      font-size: px2rem(36);
      text-align: left;
    }

    .friends-list .number {
      font-size: px2rem(26);
      color: #c4c4c4;
    }
  }
</style>
