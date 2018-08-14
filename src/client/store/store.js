import Vue from 'vue'
import Vuex from 'vuex'
import {trim,myparse} from './../static/js/common.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        datemonth: "八",
        username: "hi",
    },
    mutations: {
        getMonth:function (store,mon){
            let monarr = ['一','二','三','四','五','六','七','八','九','十','十一','十二',];
            store.datemonth = monarr[mon];
        },
        setAttr:function (store,option){
            store[option.attr] = option.field;
        }
    },
    actions: {
        getUserMsg (store,mon) {
            // var store = store;

            var that = this;
            var ajax = new XMLHttpRequest();
            ajax.open('post','/getuser');
            ajax.send();
            ajax.onreadystatechange = function () {
                if (ajax.readyState==4 &&ajax.status==200) {
                    var data = ajax.responseText;
                    data = myparse(data);
                    // console.log(data);//输入相应的内容
                    if(data.status == 1){
                        store.commit('setAttr',{attr:'username',field:data.data[0].username});
                    }
                }
            }



        }
    }
})

export default store
