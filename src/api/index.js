
//封装 接口请求方法；

import ajax from './ajax';
const BASE = '/api';


//根据经纬度获取位置详情
export const reqAddress = (latitude,longitude)=> ajax.get(BASE + `/position/${latitude},${longitude}`);

//获取食品分类列表
export const reqCategory = ()=> ajax({     
    method:'GET',
    url:BASE + '/index_category'
})

//根据经纬度获取商铺列表
export const reqShops = (latitude,longitude)=> ajax({
    method:'GET',
    url: BASE + '/shops',
    params:{
        latitude,        //利用了对象的简写方式
        longitude:longitude
    }
})

