// 路由配置
import Vue from 'vue'
import VueRouter from 'vue-router'
// 四个页面组件引用
import Msite from '../views/Msite/Msite.vue'
import Order from '../views/Order/Order.vue'
import Profile from '../views/Profile/Profile.vue'
import Search from '../views/Search/Search.vue'



Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/msite'
}, {
    path: '/msite',
    component: Msite
}, {
    path: '/order',
    component: Order
}, {
    path: '/profile',
    component: Profile
}, {
    path: '/search',
    component: Search
}]

const router = new VueRouter({
    routes
})

export default router