import Vue from 'vue'
import Router from 'vue-router'

// 导入对应的vuex文件
// import store from './../store/store'

// 导入相应的子组件
// import Hello from './../components/Hello'
import index from './../views/index/index.vue';


import logincommon from './../views/login/logincommon.vue';
import login from './../views/login/login.vue';
import register from './../views/login/register.vue';


Vue.use(Router)

var router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: index
        },
        {
            path: '/login',
            component: logincommon,
            children: [
                { path: '', component: login },
                { path: 'register', component: register },
            ]
        }
        // { name: 'hello', path: '/hello', component: Hello }
    ]
})

export default router
