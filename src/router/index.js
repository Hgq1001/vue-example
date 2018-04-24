import Vue from 'vue'
import Router from 'vue-router'

import Message from '../page/Message'
import Friends from '../page/Friends'
import Dynamic from '../page/Dynamic'
import Search from '../page/Search'

Router.prototype.openPage = function (link) {
  this.push({path: link})
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Message'
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    },
    {
      path: '/Friends',
      name: 'Friends',
      component: Friends
    },
    {
      path: '/Dynamic',
      name: 'Dynamic',
      component: Dynamic
    }
  ]
})
