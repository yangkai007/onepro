import Vue from 'vue'
import Vuex from 'vuex'

//导入四个模块文件
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 因为要在项目中使用vuex, 所以要注入灵魂
Vue.use(Vuex)

// state相当于真实存放的位置货物
// mutitions相当取货的运输员
// actions相当于安排取货的管理
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})










// import { from } from 'core-js/fn/array'
// import Vue from 'vue'
// import Vuex from 'vuex'

// import { reqAddress } from '../api'
// const RECEIVE_ADDRESS = 'abc' //接受地址信息
// Vue.use(Vuex)

// export default new Vuex.Store({
//     state: { //储存数据
//         latitude: 34.806,
//         longitude: 113.799,
//         address: {} //地址相关信息对象
//     },
//     mutations: {
//         //调度者 将数据存储到state相应的位置
//         [RECEIVE_ADDRESS](state, { address }) { //全写 address: address 
//             state.address = address
//         }
//     },
//     actions: {
//         //数据：调取数据，提交给mutations
//         async getAddress({ commit, state }) {
//             //从state状态中获取到经纬度用来设置reqAdress的参数
//             const geohash = state.latitude + ',' + state.longitude
//             const result = await reqAddress(geohash)

//             if (result.code === 0) {
//                 const address = result.data
//                 commit(RECEIVE_ADDRESS, {
//                     address //全写 address: address
//                 })
//             }
//         }
//     },
//     modules: {

//     }
// })