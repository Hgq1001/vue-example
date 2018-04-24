<template>
  <div class="message">

    <Header title="消息">
      <el-dropdown trigger="click" size="medium" placement="top" @command="clickDropDownItem">
        <i class="icon iconfont icon-add el-dropdown-link"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="item in dropDownData" :key="item.id" :command='{item}'>
            <i class="icon iconfont moreIcon" v-bind:class="item.iconName"></i>
            <span>{{item.title}}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </Header>

    <SearchBox/>

    <!--消息列表-->
    <div class="message-list">

      <div class="item" v-for="item in messageData">

        <img :src="item.url" class="avatar"/>

        <div class="item-middle">
          <span class="chat-user">{{item.chatUser}}</span>
          <span class="end-message">{{item.endMessage}}</span>
        </div>

        <div class="item_right">
          <span class="time">{{item.time}}</span>
          <span class="mark" v-if="item.count>0">{{item.count}}</span>
        </div>

      </div>

    </div>


    <!--<BottomNav/>-->

  </div>
</template>

<script>
  import Header from '../components/Header';
  import SearchBox from '../components/SearchBox';
  import BottomNav from '../components/BottomNav';
  import SideBar from '../components/SideBar'
  import {Toast} from 'mint-ui';

  export default {
    name: "Message",
    components: {
      Header,
      BottomNav,
      SearchBox,
      SideBar
    },
    data() {
      return {
        dropDownData: [
          {id: 1, title: '创建群聊', iconName: 'icon-chuangjianketang'},
          {id: 2, title: '加好友/群', iconName: 'icon-mn_tianjiahaoyou'},
          {id: 3, title: '扫一扫', iconName: 'icon-saoyisao'},
          {id: 4, title: '面对面快传', iconName: 'icon-wenjiandocuments4'},
          {id: 5, title: '付款', iconName: 'icon-tiaoxingma'},
          {id: 6, title: '拍摄', iconName: 'icon-31paishe'},
        ],
        messageData: [
          {
            chatUser: "马云",
            url: "http://img1.3lian.com/gif/more/11/201212/0d1252b54be4f2d240b6b7fe4ed35054.jpg",
            endMessage: "什么鬼，我有支付宝",
            time: "15:15",
            count: 5
          },
          {
            chatUser: "马化腾",
            url: "http://img1.3lian.com/gif/more/11/201212/cd1d745ed855bef27f47c8aff0786067.jpg",
            endMessage: "哈哈哈，我要一统江湖啦，",
            time: "15:15",
            count: 22
          },
          {
            chatUser: "马化腾",
            url: "http://img1.3lian.com/gif/more/11/201212/cd1d745ed855bef27f47c8aff0786067.jpg",
            endMessage: "哈哈哈，我要一统江湖啦，",
            time: "15:15",
            count: 22
          },
          {
            chatUser: "李彦宏",
            url: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
            endMessage: "抄袭我的吧，我早都做过了",
            time: "12:13",
            count: 1
          },
          {
            chatUser: "雷军",
            url: "http://img1.3lian.com/gif/more/11/201212/cf9d56d05c0cbc1edbf21cf64ad9c341.jpg",
            endMessage: "微信给你下线，看你还嘚瑟",
            time: "12:11",
            count: 0
          },
          {
            chatUser: "前端开发者",
            url: "http://img1.3lian.com/gif/more/11/201212/04b335ead07530a6188a27549fad1a68.jpg",
            endMessage: "我们的春天来啦，哈哈哈",
            time: "11:35",
            count: 0
          },
          {
            chatUser: "微信小程序",
            url: "http://img1.3lian.com/gif/more/11/201212/e10e8faa201671b5a2e8a6146f80d99e.jpg",
            endMessage: "谁有内测资格啊啊，300万买一个",
            time: "08:23",
            count: 0
          },
          {
            chatUser: "后台",
            url: "http://img1.3lian.com/gif/more/11/201212/411cffabcd6e4474b48f1ecac76e1b3f.jpg",
            endMessage: "不看好小程序",
            time: "02:45",
            count: 0
          },
          {
            chatUser: "闯天下",
            url: "http://img1.3lian.com/gif/more/11/201212/04378257474004fcdd62f619d724db0c.jpg",
            endMessage: "微信太强大了",
            time: "01:09",
            count: 0
          },
          {
            chatUser: "小程序",
            url: "http://img1.3lian.com/gif/more/11/201212/58ec7c89b16c529fc9d0dc440a72e14d.jpg",
            endMessage: "有快来看直播啦，学习开始啦",
            time: "00:24",
            count: 2
          }
        ],
      }
    },
    methods: {
      clickDropDownItem(e) {
        console.log(e);
        Toast({
          message: '您点击了' + e.item.title,
          position: 'center',
          duration: 1000
        });
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../static/px2rem";

  .el-dropdown-menu--medium {
    min-width: px2rem(300);
  }

  .el-dropdown .el-dropdown-link {
    font-size: px2rem(80);
    color: white;
  }

  .el-dropdown-menu--medium .el-dropdown-menu__item {
    font-size: px2rem(30);
    padding: px2rem(30) px2rem(20);
  }

  .el-dropdown-menu--medium .el-dropdown-menu__item .moreIcon {
    font-size: px2rem(36);
    color: #121212;
  }

  .el-dropdown-menu--medium .el-dropdown-menu__item span {
    font-size: px2rem(30);
    color: #121212;
  }

  .message {
    display: flex;
    flex: 1;
    flex-direction: column;

  }

  .message-list {
    background-color: #fff;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    padding-bottom: px2rem(100);
  }

  .message-list div:nth-child(1) {
    border-top: px2rem(2) solid #f2f1f2;
  }

  .item {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: px2rem(14) px2rem(28);
    border-bottom: px2rem(2) solid #f2f1f2;
    /*border-top: px2rem(2) solid #f2f1f2;*/
  }

  .avatar {
    display: flex;
    width: px2rem(120);
    height: px2rem(120);
    border: px2rem(2) transparent;
    border-radius: px2rem(120);
  }

  .item-middle {
    display: flex;
    flex: 1;
    height: px2rem(120);
    margin: 0 px2rem(10);
    flex-direction: column;
    padding: 0 px2rem(10);
    text-align: left;
  }

  .chat-user {
    font-size: px2rem(32);
    color: #000;
    margin-top: px2rem(14);
  }

  .end-message {
    margin-top: px2rem(14);
    font-size: px2rem(28);
    color: #8c8c8c;
  }

  .item_right {
    /*background-color: #ff0000;*/
    width: px2rem(80);
  }

  .time {
    display: inline-block;
    color: #9B9B9B;
    font-size: px2rem(28);
    font-weight: bold;
    margin-bottom: px2rem(4);
  }

  .mark {
    display: inline-block;
    padding: px2rem(8);
    min-width: px2rem(60);
    border: px2rem(2) transparent;
    border-radius: px2rem(30);
    background-color: #ff0000;
    margin-top: px2rem(8);
    color: #fff;
    font-size: px2rem(24);
    text-align: center;
  }


</style>
