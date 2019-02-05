import Vue from 'vue'
import Router from 'vue-router'

// 导入对应的vuex文件
// import store from './../store/store'

// 导入相应的子组件
// import Hello from './../components/Hello'
import index from './../views/index/index.vue';


// import logincommon from './../views/login/logincommon.vue';
// import login from './../views/login/login.vue';
// import register from './../views/login/register.vue';

// import task from './../views/task/index.vue';

// import settingcommon from './../views/setting/settingcommon.vue';
// import setting from './../views/setting/index.vue';
// import theme from './../views/setting/theme.vue';
// import addtheme from './../views/setting/addtheme.vue';


// import test from './../views/test/test.vue';

// import NotFoundComponent from './../views/404/404.vue';

import {trim,myparse} from './../static/js/common.js'


Vue.use(Router)

function loadView(view) {
    // return () => import(`@/views/${view}.vue`)
    return () => import( `./../views/${view}.vue`)
}

var router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: index,
            // component: loadView('index/index'),
        },
        {
            path: '/login',
            // component: logincommon,
            component: loadView('login/logincommon'),
            children: [
                {
                    path: '',
                    // component: login,
                    component: loadView('login/login'),
                },
                {
                    path: 'register',
                    // component: register,
                    component: loadView('login/register'),
                },
            ]
        },
        {
            path: '/task',
            // component: task,
            component: loadView('task/index'),
            children: [
                {
                    path: '',
                    // component: task,
                    component: loadView('task/index'),
                },
                {
                    path: 'index',
                    // component: task,
                    component: loadView('task/index'),
                },
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
            // component: settingcommon,
            component: loadView('setting/settingcommon'),
            children: [
                {
                    path: '',
                    // component: setting,
                    component: loadView('setting/index'),
                },
                {
                    path: 'index',
                    // component: setting,
                    component: loadView('setting/index'),
                },
                {
                    path: 'theme',
                    // component: theme,
                    component: loadView('setting/theme'),
                },
                {
                    path: 'addtheme',
                    // component: addtheme,
                    component: loadView('setting/addtheme'),
                }
            ]
        },






        {
            path: '/test',
            // component: test,
            component: loadView('test/test'),
        },

        {
            path: '*',
            // component: NotFoundComponent,
            component: loadView('404/404'),
        }

        // { name: 'hello', path: '/hello', component: Hello }
    ]
})

router.onError((error) => {
    const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    const targetPath = router.history.pending.fullPath;
    if(isChunkLoadFailed){
        router.replace(targetPath);
    }
})

export default router
