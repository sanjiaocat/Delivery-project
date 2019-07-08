<template>
  <section class="msite">
    <!--首页头部-->
    <!-- 通过指令绑定的方式  动态的获取根据经纬度获取的地址值 并显示 -->
    <Header :title="address.name || '正在定位中...'">
      <span class="header_search" slot="left">
          <i class="iconfont icon-sousuo"></i>
      </span>

      <span class="header_login" slot="right">
          <span class="header_login_text">登录|注册</span>
      </span>
    </Header>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(category,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(c,index) in category" :key="index">
              <div class="food_container">
                <img :src=" 'http://fuss10.elemecdn.com' + c.image_url">
              </div>
              <span>{{c.title}}</span>
            </a>
           
          </div>
         
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
   <Shoplist></Shoplist>
      
      
      
  </section>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.css';
  import {mapState} from 'vuex';
  
 


//局部引入注册组件 ，其他组件不会使用到这个组件
  import Shoplist from '../../components/Shoplist/Shoplist'; 
  export default {
    name:'Msite',
    components:{Shoplist},
    mounted(){

       //调用actions 中的获取商铺的方法   然后函数会去调用mutation方法修改state  ，然后获取vuex状态数据更新模板
      this.$store.dispatch('getShops');

      //解决轮播图问题的第二种方法：
      //利用dispatch()返回的promise状态   配合await  或者 .then方法。

      // this.$store.dispatch('getCategorys').then((a)=>{
      //    var mySwiper = new Swiper('.swiper-container',{
      //           loop: true, // 循环模式选项
          
      //           // 如果需要分页器
      //           pagination: {
      //             el: '.swiper-pagination',
      //           }, 
                
      //           })   
      // })

     
    },
    watch:{
      categorys(){
           //轮播图的使用，必须在页面加载完成后进行.
           //so此处利用watch监视属性+categorys +$nextTick()方法解决
           //this.$nextTick（callback） 此回调函数会在页面更新之后执行。   前提是进行数据更新，所以配合watch使用
           this.$nextTick(()=>{
                var mySwiper = new Swiper('.swiper-container',{
                loop: true, // 循环模式选项
          
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                }, 
                
                })   
            })


          //解决轮播图的第三种方法：
          //传递一个回调函数，等待更新状态数据后在执行 $nextTick() 函数。
          //dispatch() + callback  +$nextTick() 

          // this.$store.dispatch('getCategorys',()=>{
          //   this.$nextTick(()=>{
          //     new Swiper('.swiper-container',{
          //       loop: true, // 循环模式选项
          
          //       // 如果需要分页器
          //       pagination: {
          //         el: '.swiper-pagination',
          //       }, 
                
          //       })   
          //   })
          // })
      
      }
    },




    //计算属性中接受从vuexstate里面的状态数据
    computed:{
      ...mapState(['address','categorys']),

      //将categorys数据转换成二维数组     并显示在轮播图上   每一页显示 八个分类选项。
      //二维数组categorysArr
      categorysArr(){
        //获取原来数据categorys
        const {categorys} = this;
        let bigArr = [];      //大数组  最后汇聚成二维数组返回出去
        let smallArr = [];    //小数组   相当于二维数组里的每一项   需要将原来的数据先放进先数组在放进大数组
        categorys.forEach((c)=>{
          //先将一个小数组放进大数组
          if(smallArr.length===0){
            bigArr.push(smallArr)
          }
          //往大叔组里面的小数组放入数据
          smallArr.push(c);

          //因为每一页只能显示八个分类  、
          //所以每个小数组的长度为8，然后重新创建一个小数组，放入大数组后继续接受其余的数据。
          if(smallArr.length===8){
            smallArr = [];
          }
        })
        //将转换完成的大数组返回出去
        return bigArr;

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .msite
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
</style>
