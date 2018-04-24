/**
 * @Author:hgq
 * @Date: 2018/4/13
 * @Describe:
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  isLogin: false,         //  登陆状态
  sideBarStatus: false,
  bottomNavStatus: true,
  searchStatus: false,
};

const mutations = {
  changeSideBarStatus(state, flag) {
    console.log(state)
    state.sideBarStatus = flag;
  },
  changeBottomNavStatus(state, flag) {
    console.log(state);
    state.bottomNavStatus = flag;
    state.searchStatus = !flag;
  },
  changeSearchStatus(state, flag) {
    console.log(state);
    state.searchStatus = flag;
  },
};       //  改变state的方法

const actions = {           //  异步提交mutations

};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
