import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

//安装插件
Vue.use(Router)

//创建路由对象
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    }
    ,
    {
        path: '/cart',
        component: Cart
    }
    ,
    {
        path: '/profile',
        component: Profile
    }

]

const router = new Router({
    routes,
    mode: 'history'
})

//导出router
export default router
