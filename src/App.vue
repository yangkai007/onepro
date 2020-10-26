<template>
  <div id="app">
    <div id="nav">  
      <!-- 获取 -->
    <FooterNav v-show="$route.meta.Footers">  </FooterNav>
    <!-- <FooterNav/> -->
     <router-view></router-view>
    </div>
  </div>
</template>
 <script>
// // 组建引用
  import FooterNav from '@/components/FooterNav/FooterNavss.vue'
// 引入 2.0
// import {reqAddress} from './api'
import { mapActions } from "vuex";

// 注册组件到components
export default{
  components:{
    FooterNav
  }, 

  //async 是函数修饰词
  //await 必须使用再async函数内部w
  async mounted() {
     this.$store.dispatch('getAddress'); //吧数据存进去\
     this.$store.dispatch('getShops'); //来自actions
     this.$store.dispatch('getCategorys');
     this.getUserInfo()

    // const result=await axios.get('/api/position/37.10038,113.3686')
    // const result = await axios.get('/api/index_category')
    // console.log(result);
  },
methods: {
    ...mapActions(['getUserInfo'])
  }
} 

</script>
<style lang="stylus">
@import url('./assets/stylus/reset.styl');
</style>
