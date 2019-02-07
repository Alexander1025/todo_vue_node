<template>
    <div class="addtheme addthemewarp">
        <theme
            :themeid="themeid"
            :title="title"
            :thisstyle="thisstyle"
            :thisheadstyle="thisheadstyle"
            :present="present"
            :imgsrc="imgsrc"
        >
        </theme>
        <div class="link"></div>
        <div class="centerwrap">
            <input v-model="title" type="text" class="logininput" placeholder="给主题起个名字吧 ^_^">
        </div>
        <div class="color">
            <span>头部主题颜色</span>
            <colorPicker v-model="colortop" defaultColor="#ff0000"></colorPicker>
        </div>
        <div class="color">
            <span>主题颜色</span>
            <colorPicker v-model="colormain" defaultColor="#ff0000"></colorPicker>
        </div>
        <div
            class="submit"
            @click="submittheme"
        >
            新增
        </div>
    </div>
</template>
<script>
import colorPicker from './../../components/colorpicker.vue';
import {trim,myparse} from './../../static/js/common.js';

export default {
    data() {
        return{

            themeid:1,
            title: "",
            thisstyle: "background: linear-gradient(-45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);",
            thisheadstyle:"background: #FD7897;",
            present: false,
            imgsrc:"",

            colortop:'#ff0000',
            colormain:'#ff0000',
        }
    },
    components:{
        colorPicker,
        "theme": {
            template: `<div class="theme">
                    <div class="themeheadcolor" :style="thisheadstyle">
                    </div>
                    <div class="themecolor" :style="thisstyle">
                        <img
                            :src="imgsrc"
                            alt=""
                            @error="imgError(item)"
                            v-show="present == true"
                        >
                    </div>
                    <span>{{title}}</span>
                </div>`,
            props:["themeid","title","thisstyle","thisheadstyle","present","imgsrc","item"],
            methods:{
                imgError: function (item) {
                    item = require('./../../static/images/icon/check.svg');
                },
            }

        },
    },
    methods:{
        submittheme: function(){
            if(this.title.trim() == ""){
                this.title = "自定义主题";
            }
            console.log(this.colormain);
            console.log(this.colortop);
            console.log(this.title);
            var that = this;
            var ajaxargument = "";
            ajaxargument = `themehead=background:${this.colortop}&thememain=background:${this.colormain}&themename=${this.title}`;
            var ajax = new XMLHttpRequest();
            ajax.open('post','/node/addtheme');
            ajax.send(ajaxargument);
            ajax.onreadystatechange = function () {
                if (ajax.readyState==4 &&ajax.status==200) {
                    var data = ajax.responseText;
                    data = myparse(data);
                    // console.log(data);//输入相应的内容
                    if(data.status == 1){
                        layer.open({
                            content: `设置主题信息成功`,
                            skin: 'msg',
                            time: 2,
                        });
                        var time = setTimeout(()=>{
                            that.$router.push({path: '/setting/theme'});
                        },2000);
                    }else{
                        layer.open({
                            content: `设置主题信息超时`,
                            skin: 'msg',
                            time: 2,
                        });
                    }
                }
            }
        }
    }
}
</script>
<style>
    .open{
        z-index: 1;
    }
    .submit{
        display: block;
        width: 80%;
        position: fixed;
        left: 10%;
        bottom: 60px;
        line-height: 42px;
        background-color: #0084c6;
        color: white;
        text-align: center;
        text-decoration: none;
        margin: 80px auto 0;
        border-radius: 3px;
    }
    .color{
        margin-top: 20px;
    }
    .m-colorPicker, .colorBtn, .colorBtn, #task{
        position: relative;
        display: block !important;
        width: 80vw !important;
        height: 40px !important;
        margin: 0px auto 0;
        border: none;
        border-radius: 3px;
    }
    .addtheme .logininput{
        text-align: center;
        border: none;
        border-bottom: 1px solid #e2e2e2;
        width: 80%;
        line-height: 50px;
        margin: 10px 0;
        font-size: 16px;
        color: #a98604;
        outline: none;
    }
    .link{
        width: 80%;
        border-top: 1px solid #ccc;
        margin: 10px auto;
    }
    .themelisttop{
        background-color: #F5F6F8;
        color: #b7b7b7;
        font-size: 14px;
        line-height: 40px;
        padding: 0 6%;
    }
    .thememain{
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: center;
        align-content: space-around;
    }
    .theme{
        flex: 0 1 25%;
        margin: 10px 0 0;
    }
    .themecolor{
        margin: auto;
        width: 16vw;
        height: 16vw;
        background-color: #617FDF;
        border-radius: 4px;
        position: relative;
        box-shadow: 0px 0px 10px #ccc;
    }
    .themecolor img{
        bottom: -3vw;
        right: -3vw;
        width: 6vw;
        height: 6vw;
        position: absolute;
    }
    .theme span, .color span{
        display: block;
        font-size: 10px;
        line-height: 26px;
        text-align: center;
    }
    .themeheadcolor{
        margin: 3px auto;
        width: 16vw;
        height: 3vw;
        background-color: #617FDF;
        border-radius: 4px;
    }
    .addtheme .themecolor, .addtheme .themeheadcolor{
        background-color: rgba(255, 255, 255, 0);
        box-shadow: 0px 0px 10px #ccc;
    }
    .addtheme{
        position: relative;
    }
    .addtheme .themecolor > img{
        position: absolute;
        width: 45%;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>

