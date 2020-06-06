import Vue from 'vue'
//导入路由 是个插件
import Router from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

//懒加载推荐这样写，方便管理
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')
//安装插件
Vue.use(Router)


const routes = [
    {
        path: '',
        //重定向
        redirect: '/home',
        component: Home,
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '首页'
        },
        children: [
            // {
            //     path: '',
            //     redirect: 'news'
            // }
            // ,
            {
                path: 'news',
                component: HomeNews
            },
            {
                path: 'messages',
                component: HomeMessage
            }
        ]
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '关于'
        }
    },
    {
        path: '/user/:userId',
        component: User,
        meta: {
            title: '用户'
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: '档案'
        }
    }
]
const router = new Router({
    //配置路由和组件之间的应用关系
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})


//前置钩子（守卫guard）
router.beforeEach((to, from, next) => {
    //从from跳转到to
    document.title = to.matched[0].meta.title
    // console.log('+++++')
    //必须调用
    next()
})

//后置钩子
router.afterEach((to, from) => {
    // console.log('----')
})


//导出Router
export default router
