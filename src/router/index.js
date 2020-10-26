// 路由配置
import Vue from 'vue'
import VueRouter from 'vue-router'
// 四个页面组件引用
import Msite from '../views/Msite/Msite.vue'
import Order from '../views/Order/Order.vue'
import Profile from '../views/Profile/Profile.vue'
import Search from '../views/Search/Search.vue'
//登录注册页面
import LogReg from '../views/LogReg/LogReg.vue'
// 商家店铺界面引入
import Shop from '../views/Shop/Shop.vue'
// 商家店铺界面   三个子路由
import ShopGoods from '../views/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../views/Shop/ShopInfo/ShopInfo.vue'
import ShopRatings from '../views/Shop/ShopRatings/ShopRatings.vue'


Vue.use(VueRouter)
const routes = [{ //路由配置
        path: '/',
        redirect: '/msite'
    }, {
        path: '/msite',
        component: Msite,
        meta: { Footers: true }
    }, {
        path: '/order',
        component: Order,
        meta: { Footers: true }
    }, {
        path: '/profile',
        component: Profile,
        meta: { Footers: true }

    }, {
        path: '/search',
        component: Search,
        meta: { Footers: true }

    },
    {
        path: '/logReg',
        component: LogReg,
        meta: { Footers: false }
    },
    // 路由配置商家店铺界面引入
    {
        path: '/Shop',
        component: Shop,
        // 三个子路由
        children: [{
                path: '/Shop/goods',
                component: ShopGoods,
            },
            {
                path: '/Shop/info',
                component: ShopInfo,
            },
            {
                path: '/Shop/ratings',
                component: ShopRatings,
            },
            { //当访问Shop时就显示goods内容
                path: '',
                redirect: '/shop/goods'
            },
        ]
    }
]
const router = new VueRouter({
    routes
})

export default router