<template>
  <div id="app">

    <!--侧边栏-->
    <transition name="el-fade-in">
      <SideBar/>
    </transition>

    <!--搜索页面-->
    <transition name="el-fade-in">
      <Search/>
    </transition>

    <!--路由内容-->
    <div class="container-content">
      <router-view/>
    </div>

    <!--底部导航-->
    <div v-if="$store.state.bottomNavStatus">
      <BottomNav/>
    </div>


  </div>
</template>

<script>
  import BottomNav from '@/components/BottomNav';
  import SideBar from '@/components/SideBar';
  import Search from './page/Search';

  import store from './vuex/store';
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';


  export default {
    store,
    name: 'App',
    components: {
      BottomNav,
      SideBar,
      Search
    },
    data() {
      return {
        ...mapState(['bottomNavStatus']),

      }
    },
    computed: {},
    created(){
      console.log('state----->')
      console.log(store.state.bottomNavStatus)
    }
  }
</script>

<style lang="scss" scoped>
  @import "../static/px2rem";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }

  .container-content {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
</style>
