
//封装含有ajax请求函数的模块
// 目的  ： 1、统一处理请求异常
    // 2、异步请求返回的数据不是response ，而是reponse.data
    ///3、 将请求参数的json格式转为 unicode格式进行请求   (有时后台不支持json格式）
    //配置全局 请求超时错误。

//引入axios库
import axios from 'axios';    

import qs from 'qs';


//设置一个全局的 请求超时的错误
axios.defaults.timeout = 20000;   //设置超时时间为 20s



//请求拦截器     并传入了请求信息
axios.interceptors.request.use((config)=>{
    //利用解构  获取 config中的请求参数method和请求参数data
    const {data,method} = config;
    //判断请求方式是否为post ，data是否有值，  数据类型是否为对象。
    if(method.toLowerCase()==='post' && data && typeof data === 'object'){
        //利用qs库将 post参数json格式转换为 unlcode 格式。
        config.data = qs.stringify(data);
   
    }
    return config;
    
},(error)=>{
   
    return Promise.reject(error);       //调用失败的方法      中断promise链   
})


//设置步请求返回的数据不是response ，而是reponse.data
//配置一个全局的返回数据的拦截器     并对数据进行加工后就可以实现
axios.interceptors.response.use((response)=>{
    //只需要把返回的通过拦截器的值中的data数据直接返回就可以。
    return response.data
},(error)=>{
    // reutrn new Promise(()=>{})     //使promise的状态永远为padding初始状态      中断promise链
    return Promise.reject(error)     //调用失败函数，    中断promise链
});


export default axios



//测试使用

// //设置api以便于配置的代理匹配到。
// axios.get('/api/test_get',{
//     params:{
//         name:'aa',
//         pwd:'123'
//     }
// })
// axios.post('/api/test_post',{name:"zhangsan",pwd:'123'})
