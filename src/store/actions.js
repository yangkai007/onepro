/*
 *Action:通过操作mutation间接更新state的多个方法的对象
 *Action 可以包含任意异步操作。
 */

// 注意要引入api接口函数
import { reqAddress, reqShops, reqCategorys, reqUserInfo, reqShopInfo, reqShopRatings,
     reqShopGoods,reqLogout,reqSearchShop } from '../api'
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
    RECEIVE_SEARCH_SHOPS
} from './mutation-types'
export default {
    // 1.请求地址函数
    async getAddress({ commit, state }) {
        // 从state状态中获取到经纬度用来设置reqAddress的参数（看接口文档）
        const geohash = state.latitude + ',' + state.longitude
            // 1. 发送异步ajax请求
        const result = await reqAddress(geohash)
            // 2. 提交一个mutation
        if (result.code === 0) {
            const address = result.data
            commit(RECEIVE_ADDRESS, {
                address
            })
        }
    },
    // 2.异步获取商家分类列表
    async getShops({ commit, state }) {
        // 1. 发送异步ajax请求
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqShops(geohash)
            // 2. 提交一个mutation
        if (result.code === 0) {
            const shoplist = result.data
            commit(RECEIVE_SHOPS, {
                shoplist: shoplist
            })
        }
    },
    // 3.异步获取食品列表
    async getCategorys({ commit }) {
        // 1. 发送异步ajax请求
        const result = await reqCategorys()
            // 2. 提交一个mutation
        if (result.code === 0) {
            const categorys = result.data
            commit(RECEIVE_EACH, {
                categorys
            })
        }
    },
    // 3.用户名获取储存
    recordUser({ commit }, userInfo) {
        commit(RECEIVE_USER_INFO, { userInfo })
    },
    // //自动登录 异步获取用户信息(先引入reqUserInfo接口) 
    async getUserInfo({ commit }) {
        const result = await reqUserInfo() //从api index。js中来
        if (result.code === 0) {
            const userInfo = result.data
            commit(RECEIVE_USER_INFO, { userInfo })
        }
    },

    // 4. action
    // 异步获取商家信息
    async getShopInfo({ commit }) {
        const result = await reqShopInfo()
        if (result.code === 0) {
            const info = result.data
            commit(RECEIVE_INFO, { info })
        }
    },

    // 异步获取商家评价列表
    async getShopRatings({ commit },callback) {
        const result = await reqShopRatings()
        if (result.code === 0) {
            const ratings = result.data
            commit(RECEIVE_RATINGS, { ratings })
            callback && callback() //以防callback不传值 或者watch方式
        }
    },

    // 异步获取商家商品列表
    async getShopGoods({ commit }, callback) { //callback是用来接收ShopGoods里穿过来的函数
        const result = await reqShopGoods()
        if (result.code === 0) {
            const goods = result.data
            commit(RECEIVE_GOODS, { goods })
                // 数据更新了, 通知一下组件
            callback && callback() //以防callback不传值 或者watch方式
        }
    },
    
    //同步更新food中的count值
    updateFoodCount({ commit }, { isAdd, food }) {
        if (isAdd) {
            commit(INCREMENT_FOOD_COUNT, { food })
        } else {
            commit(DECREMENT_FOOD_COUNT, { food })
        }
    },
    // 同步清空购物车
    clearCart({commit}) {
      commit(CLEAR_CART)
    },
    //退出 
    async logout ({commit}) {
        const result = await reqLogout()
        if (result.code === 0) { commit(RESET_USER_INFO)}

    },
    // 搜索
    async searchShops ({commit, state}, keyword) {
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqSearchShop(geohash, keyword)
        if (result.code === 0) {
          const searchShops = result.data
          commit(RECEIVE_SEARCH_SHOPS, {searchShops})
        }
      }
}