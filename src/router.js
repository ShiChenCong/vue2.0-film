/**
 * Created by cql-cql-cql on 2016/12/27 0027.
 */
import index from './components/index.vue'
import firstComponent from './components/first-component.vue'
import my from './components/my.vue'
import updatePage from './components/updatePage.vue'
import home from './components/home.vue'
import search from './components/search.vue'
import login from './components/login.vue'
import register from './components/register.vue'
import myCollection from './components/myCollection.vue'
import detail from './components/public/detail.vue'

var router = [

    {
        path: '/index',
        redirect: {name: 'home'},
        component: index,

        children: [
            {
                //跳转到第一个页面，就是和图片
                path: 'first',
                component: firstComponent,
            },
            {
                //跳转到我的页面
                path: 'my',
                component: my
            },

            {
                //跳转到详情页面
                path: 'detail',
                component: detail
            },
            {
                //搜索结果
                path: 'search',
                component: search
            },
            {
                //主页:功能:第几页
                path: 'home/:list/:page',
                name: "home",
                component: home
            },
            {
                //主页:功能:第几页
                path: 'myCollection',
                name: "myCollection",
                component: myCollection
            }
        ],


    },

    {
        path: '/updatePage',
        component: updatePage
    },
    {
        //跳转到登陆
        path: '/login',
        component: login,
        name: "login",
    },
    {
        //跳转到注册
        path: '/register',
        component: register,
        name: "register",
    },
    //引导页
    {
        path: '/',
        redirect: '/updatePage'

    },
    {path: '*', redirect: {name: 'home'},}


]
export default router