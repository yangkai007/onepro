<!--  -->
<template>
  <div class="star star-24" >
    <!-- {{rating}} -->
    <span
      class="star-item"
      v-for="(item, index) in starArr"
      :key="index"
      :class="item"
    ></span>
  </div>
</template>

<script>
export default {
  props: {
    rating: Number,
  },
  // data(){
  //     return {arr:['on','half','off','off','off']}
  // },
  computed: {
    // 向下取整
    // 小数大于五添加一半星星 half
    // 剩余的微off
    starArr() {
      let arr = [];
      let { rating } = this; //从this解构拿到rating数据
      // 添加on 向下取整
      let upInt = Math.floor(rating);

      for (let i = 0; i < upInt; i++) {
        arr.push("on"); //向数组添加on
      }
      //添加 half 半个星星 判断小数是否大于5
      if (rating * 10 - upInt * 10 > 5) {
        arr.push("half"); //向数组添加half
      }
      // 添加off 剩余数
      let res = 5 - arr.length;
      for (let j = 0; j < res; j++) {
        arr.push("off"); //向数组添加添加off
      }
      return arr;
    },
  },
};
</script>

<style scoped lang='stylus'>
@import '../../assets/stylus/mixins.styl';

.star {
  float: left;
  font-size: 0;

  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }

  &.star-48 {
    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('./images/stars/star48_on');
      }

      &.half {
        bg-image('./images/stars/star48_half');
      }

      &.off {
        bg-image('./images/stars/star48_off');
      }
    }
  }

  &.star-36 {
    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('./images/stars/star36_on');
      }

      &.half {
        bg-image('./images/stars/star36_half');
      }

      &.off {
        bg-image('./images/stars/star36_off');
      }
    }
  }

  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('./images/stars/star24_on');
      }

      &.half {
        bg-image('./images/stars/star24_half');
      }

      &.off {
        bg-image('./images/stars/star24_off');
      }
    }
  }
}
</style>