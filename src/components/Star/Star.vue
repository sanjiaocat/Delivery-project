<template>
    <div class="star" :class="'star-'+size">
        <span class="star-item" v-for="(c,index) in classess" :key="index" :class="c"></span>
        <!-- <span class="star-item on"></span>
        <span class="star-item on"></span>
        <span class="star-item half"></span>
        <span class="star-item off"></span> -->
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
      name:'Star',
      props:{
          size:Number,
          rating:Number
      },
      computed:{
          //把类名装入一个数组中。
          classess(){
            
              //获取评分
              const {rating} = this;
              const integer = Math.floor(rating);
              let classess = [];
                //先循环添加为满星星的类
              for(let i = 0; i < integer; i++){
                classess.push('on');
              }
                //判断是否超过0.5，超过则添加半颗星星，不超过不添加
              if(rating-integer>0.5){
                classess.push('half');
              }
              //一共五颗星  根据已经有的星星数 来确定添加几颗无星星的图片
              while(classess.length<5){
                classess.push('off')
              }

              return classess;
                
          }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    .star //2x图 3x图
        float left
        font-size 0
        .star-item
            display inline-block
            background-repeat no-repeat
        &.star-48
            .star-item
                width 20px
                height 20px
                margin-right 22px
                background-size 20px 20px
            &:last-child
                margin-right: 0
            &.on
                bg-image('./images/star48_on')
            &.half
                bg-image('./images/star48_half')
            &.off
                bg-image('./images/star48_off')
        &.star-36
            .star-item
                width 15px
                height 15px
                margin-right 6px
                background-size 15px 15px
            &:last-child
                margin-right 0
            &.on
                bg-image('./images/star36_on')
            &.half
                bg-image('./images/star36_half')
            &.off
                bg-image('./images/star36_off')
        &.star-24
            .star-item
                width 10px
                height 10px
                margin-right 3px
                background-size 10px 10px
                &:last-child
                    margin-right 0
                &.on
                    bg-image('./images/star24_on')
                &.half
                    bg-image('./images/star24_half')
                &.off
                    bg-image('./images/star24_off')
                            
 
</style>
