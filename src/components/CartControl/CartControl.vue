<!--购物车里的加减商品按钮组件  -->
<template>
<div class="cartcontrol">
    <link rel="stylesheet" href="//at.alicdn.com/t/font_2085738_dg9djcieha5.css" />

  <!-- 有一个动画   减号出现和消失-->
  <transition name="move">
      <!-- 减号 -->
	<div class="iconfont icon-jianshao1" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
  </transition>
    <div class="cart-count" v-if="food.count">{{food.count}}</div>
      <!-- +号 -->
    <div class="iconfont icon-zengjia1" @click.stop="updateFoodCount(true)"></div>
</div>
</template>

<script>
export default {
    props:{
        food:Object
    },
    methods: {
        // 点击事件
      updateFoodCount (isAdd) {
        this.$store.dispatch('updateFoodCount', {isAdd, food: this.food})
      }
    }
}
</script>

<style scoped lang='stylus'>
@import "../../assets/stylus/mixins.styl"
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

    .icon-jianshao1
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
      &.move-enter-active, &.move-leave-active
        transition all .3s
      &.move-enter, &.move-leave-to
        opacity 0
        transform translateX(15px) rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-zengjia1
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color $green
</style>