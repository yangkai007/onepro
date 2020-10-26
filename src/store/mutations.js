/*
vuex 的 mutations 模块
*/
// export const RECEIVE_ADDRESS = 'receive_address'
import Vue from 'vue'

import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPS,
    RECEIVE_EACH,
    RECEIVE_USER_INFO,
    RECEIVE_INFO,
    RECEIVE_RATINGS,
    RECEIVE_GOODS,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART,
    RESET_USER_INFO,
    RECEIVE_SEARCH_SHOPS,
} from './mutation-types'
// [方法名](state,{param}){}————实现更改state
export default {
    [RECEIVE_ADDRESS](state, { address }) { //调度地址信息
        state.address = address
    },
    [RECEIVE_SHOPS](state, { shoplist }) { //商品列表
        state.shoplist = shoplist
    },
    [RECEIVE_EACH](state, { categorys }) { //轮播食品
        state.categorys = categorys
    },
    [RECEIVE_USER_INFO](state, { userInfo }) {
        state.userInfo = userInfo
    },
    // 3. mutations
    [RECEIVE_INFO](state, { info }) {
        state.info = info
    },

    [RECEIVE_RATINGS](state, { ratings }) {
        state.ratings = ratings
    },

    [RECEIVE_GOODS](state, { goods }) {
        state.goods = goods
    },
    [INCREMENT_FOOD_COUNT](state, { food }) {
        if (!food.count) { // 第一次增加
            // food.count = 1  // 这样新增的属性没有数据绑定
            /*
            对象
            属性名
            属性值
             */
            Vue.set(food, 'count', 1) // 让新增的属性也有数据绑定
            // 将food添加到cartFoods中
          state.cartFoods.push(food)
        } else {
            food.count++
        }
    },
    [DECREMENT_FOOD_COUNT](state, { food }) {
        if (food.count) { // 做限制 有值才去减  
            food.count--
        }
        if(food.count===0) {
            // 将food从cartFoods中移除
            state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
          }
    },
    [CLEAR_CART](state) {
     
        // 清除food中的count
        state.cartFoods.forEach(food => food.count = 0)
        // 移除购物车中所有购物项
        state.cartFoods = []
      },
      [RESET_USER_INFO] (state) {
        state.userInfo = {}
      },

    // 搜索
    [RECEIVE_SEARCH_SHOPS](state, {searchShops}) {
        state.searchShops = searchShops
      },
}