import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/store'

import axios from 'axios'
import layer from './static/js/layer.js'
import './static/css/layer.css';

Vue.config.debug = true
Vue.config.productionTip = false
Vue.prototype.$axios = axios


// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
})

new Vue({
    el: '#app',
    router: router,
    store: store,
    template: '<App/>',
    components: { App },
})


// console.log("asd");
// var ajax = new XMLHttpRequest();
// ajax.open('post','haha/haha?starName=haha');
// ajax.send();
// ajax.onreadystatechange = function () {
//    if (ajax.readyState==4 &&ajax.status==200) {
// 　　　　console.log(ajax.responseText);//输入相应的内容
//   　　}
// }

// var ajax2 = new XMLHttpRequest();
// ajax2.open('post','login?starName=haha');
// ajax2.send();
// ajax2.onreadystatechange = function () {
//    if (ajax2.readyState==4 &&ajax2.status==200) {
// 　　　　console.log(ajax2.responseText);//输入相应的内容
//   　　}
// }
