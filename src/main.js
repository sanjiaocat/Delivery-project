import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './api/ajax';
import store from './store'

import Header from './components/Hheader/Header.vue';
import Star from './components/Star/Star.vue';


//注册全局组件
Vue.component('Header',Header);
Vue.component('Star',Star)






/* eslint-disable no-new */

new Vue({
  el: '#app',
  // components: { App },    // 注册组件
  // template: '<App/>',    //注册模板
  
  render: h=> h(App),    //相当于上面的两部写法  
  router,                // 注册路由器
  store              //注册配置vuex对象
})