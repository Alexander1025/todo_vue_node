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

import task from './../views/task/index.vue';

import settingcommon from './../views/setting/settingcommon.vue';
import setting from './../views/setting/index.vue';
import theme from './../views/setting/theme.vue';
import addtheme from './../views/setting/addtheme.vue';


import test from './../views/test/test.vue';

import NotFoundComponent from './../views/404/404.vue';

import {trim,myparse} from './../static/js/common.js'


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
        },
        {
            path: '/task',
            component: task,
            children: [
                { path: '', component: task },
                { path: 'index', component: task },
            ],
            beforeEnter: function (to, from, next){
                var that = this;
                var ajax = new XMLHttpRequest();
                ajax.open('post','/node/getuser');
                ajax.send();
                ajax.onreadystatechange = function () {
                    if (ajax.readyState==4 &&ajax.status==200) {
                        var data = ajax.responseText;
                        data = myparse(data);
                        // console.log(data);//输入相应的内容
                        if(data.status == 1){
                            next();
                        }else if(data.status == 0){
                            layer.open({
                                content: "请登录",
                                skin: 'msg',
                                time: 2,
                            });
                            next('/login');
                        }
                    }
                }
            }
        },
        {
            path: '/setting',
            component: settingcommon,
            children: [
                { path: '', component: setting },
                { path: 'index', component: setting },
                { path: 'theme', component: theme },
                { path: 'addtheme', component: addtheme }
            ]
        },






        {
            path: '/test',
            component: test
        },

        { path: '*', component: NotFoundComponent }

        // { name: 'hello', path: '/hello', component: Hello }
    ]
})

export default router
