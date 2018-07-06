import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/store'

import axios from 'axios'

Vue.config.debug = true
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  el: '#app',
  router: router,
  store: store,
  template: '<App/>',
  components: { App }
})


console.log("asd");
var ajax = new XMLHttpRequest();
ajax.open('post','haha/haha?starName=haha');
ajax.send();
ajax.onreadystatechange = function () {
   if (ajax.readyState==4 &&ajax.status==200) {
　　　　console.log(ajax.responseText);//输入相应的内容
  　　}
}

var ajax2 = new XMLHttpRequest();
ajax2.open('post','login?starName=haha');
ajax2.send();
ajax2.onreadystatechange = function () {
   if (ajax2.readyState==4 &&ajax2.status==200) {
　　　　console.log(ajax2.responseText);//输入相应的内容
  　　}
}