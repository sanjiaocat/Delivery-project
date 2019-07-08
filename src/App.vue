<template>
  <div>
    <router-view/>
    <FooterGuide v-if="$route.meta.isShowFoot"/>
  </div>
  
</template>

<script type="text/ecmascript-6">
  import {reqAddress} from './api';
  import FooterGuide from './components/FooterGuide/FooterGuide.vue';
  import {mapActions} from 'vuex';


  export default {
    name:'App',
    components:{FooterGuide},   //注册组件以直接显示出来不受跳转的影响。
    async mounted(){
      // const result = await reqAddress(40.10038,116.36863)
      // console.log(result)

      //组件中调用获取地址间接修改state状态数据的方法
      this.$store.dispatch('getAddress');
      // ...mapActions(['getCategorys'])
      this.$store.dispatch('getCategorys')
     
      
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
