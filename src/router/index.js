
/** 配置路由*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite';
import Order from '../pages/Order/Order';
import Profile from '../pages/Profile/Profile';
import Search from '../pages/Search/Search';
import Login from '../pages/Login/Login';

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  // 配置路由
  routes:[
    {
      path:'/msite',
      component:Msite,
      meta:{           //利用路由组件的$route.meta属性里可以存储数据来  实现指定组件 的显示
        isShowFoot:true
      }   
    },
    {
      path:'/order',
      component:Order,
      meta:{
        isShowFoot:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        isShowFoot:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        isShowFoot:true
      }
    },
    {
      path:'/Login',  //定义跳转路径
      component:Login
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})