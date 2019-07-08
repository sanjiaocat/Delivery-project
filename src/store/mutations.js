
//包含了多个直接修改state状态数据的方法
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutationTypes';
export default {
    //定义直接修改地址数据的方法   采用常量的方法  相当于 receive_address(){}
    [RECEIVE_ADDRESS](state,address){       //利用了解构赋值的方法  值取出我们需要的地址数据
        state.address = address;
        
    },
    //获取食品分类列表  并修改状态数据中的数据
    [RECEIVE_CATEGORYS](state,categorys){
        state.categorys = categorys;
        
       
    },
    //如果从actions中传递来数据以对象的形式{}传递  接受的时候一定也是以对象的形式接受，不然会报错或者undefined
    ////根据经纬度获取商铺列表   并修改状态数据中的数据
    [RECEIVE_SHOPS](state,{shops}){
        state.shops = shops;
        //console.log(state)
    }
}