
//包含了多个间接修改state状态数据的方法
import {reqAddress,reqCategory,reqShops} from '../api';
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutationTypes';
import { get } from 'http';

export default {
    //根据经纬度获取地址
    async getAddress({commit,state}){
        //从状态数据state中获取需要的参数
        
        const {latitude,longitude} = state;

       console.log(latitude,longitude)
        //发送ajax异步请求   并获取返回的值
        const result = await reqAddress(latitude,longitude);
        if(result.code === 0){
            //获取我么需要的值
            const address = result.data;
            //调用直接修改状态的方法 并传入参数
            commit(RECEIVE_ADDRESS,address);

        }

    },
    ////获取食品分类列表
    async getCategorys({commit},callback){
        
        //发送异步请求
        const result = await reqCategory();
        if(result.code === 0){
            const categorys = result.data;
            //调用直接修改state数据的方法
            commit(RECEIVE_CATEGORYS,categorys)
            

            //执行组件中传递的函数参数，在状态数据更新后执行 ，在执行轮播图的代码。
            typeof callback === 'function' && callback()
          }
    },
    //
        //根据经纬度获取商铺列表    
    async getShops({commit,state}){
        const {latitude,longitude} = state;
        //发送异步请求
        const result = await reqShops(latitude,longitude)
        if(result.code===0){
            const shops = result.data;
            //调用直接修改数据的mutation
            commit(RECEIVE_SHOPS,{shops});    //传递数据时以对象的方式传递{},接受时也一定以对象的形式进行接受。
        }
        
    }    
}