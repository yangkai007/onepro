// getters来设置购物车的一些数据信息
// 包含多个基于state的getter计算属性的对象  
// 同时在 index。js中 关联上
export default {
    totalCount (state) {
        return state.cartFoods.reduce((preTotal, food) => preTotal + food.count , 0)
      },
    
      totalPrice (state) {
        return state.cartFoods.reduce((preTotal, food) => preTotal + food.count*food.price , 0)
      },
    
      positiveSize (state) {
        return state.ratings.reduce((preTotal, rating) => preTotal + (rating.rateType===0?1:0) , 0)
      }
  }