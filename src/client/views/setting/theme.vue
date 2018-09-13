<template>
    <div class="settingwrap">
        <div class="themewrap">
            <div class="themelisttop">
                纯色主题
            </div>
            <div class="thememain">
                <theme
                    v-for="(item, index) in themelist"
                    :themeid="item.themeid"
                    :title="item.title"
                    :thisstyle="item.thisstyle"
                    :thisheadstyle="item.thisheadstyle"
                    :present="item.present"
                    :imgsrc="item.imgsrc"
                    :item="item"
                    :key="index"
                    @togglethemeimg="togglethemeimg"
                >
                </theme>

                <!-- <div class="theme">
                    <div class="themecolor">
                        <img
                            src="./../../static/images/icon/check.svg"
                            alt=""
                        >
                    </div>
                    <span>默认</span>
                </div> -->

            </div>
            <div class="themelisttop">
                自定义主题
            </div>
            <div class="thememain">

                <div class="theme">
                    <div class="themeheadcolor">
                    </div>
                    <div class="themecolor">
                        <img
                            src=""
                            alt=""
                        >
                    </div>
                    <span>默认</span>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import {trim,myparse} from './../../static/js/common.js';

export default {
    data () {
        return {
            message: '',
            themelist: [
                // {
                //     themeid:1,
                //     title: "默认",
                //     thisstyle: "",
                //     thisheadstyle:"",
                //     present: true,
                //     imgsrc:"",
                // },
                // {
                //     themeid:1,
                //     title: "默认",
                //     thisstyle: "background: linear-gradient(-45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);",
                //     thisheadstyle:"background: #FD7897;",
                //     present: false,
                //     imgsrc:"",
                // },
                // {
                //     themeid:1,
                //     title: "默认",
                //     thisstyle: "background: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);",
                //     thisheadstyle:"background: #9983c5;",
                //     present: false,
                //     imgsrc:"",
                // },
                // {
                //     themeid:1,
                //     title: "默认",
                //     thisstyle: "background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);",
                //     thisheadstyle:"background: #70a0ea;",
                //     present: false,
                //     imgsrc:"",
                // },
                // {
                //     themeid:1,
                //     title: "默认",
                //     thisstyle: "background: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);",
                //     thisheadstyle:"background: #617fdf;",
                //     present: false,
                //     imgsrc:"",
                // },
                // {
                //     themeid:1,
                //     title: "默认",
                //     thisstyle: "background: linear-gradient(to right, #fa709a 0%, #fee140 100%);",
                //     thisheadstyle:"background: #617fdf;",
                //     present: false,
                //     imgsrc:"",
                // },
                // {
                //     themeid:1,
                //     title: "默认",
                //     thisstyle: "background: linear-gradient(to right, #f83600 0%, #f9d423 100%);",
                //     thisheadstyle:"background: #616161;",
                //     present: false,
                //     imgsrc:"",
                // },
                // {
                //     themeid:1,
                //     title: "默认",
                //     thisstyle: "background: linear-gradient(to top, #30cfd0 0%, #330867 100%);",
                //     thisheadstyle:"background: #956de8;",
                //     present: false,
                //     imgsrc:"",
                // },
                // {
                //     themeid:1,
                //     title: "默认",
                //     thisstyle: "background: linear-gradient(to top, #09203f 0%, #537895 100%);",
                //     thisheadstyle:"background: #449fe8;",
                //     present: false,
                //     imgsrc:"",
                // },
                // {
                //     themeid:1,
                //     title: "默认",
                //     thisstyle: "background: linear-gradient(to right, #434343 0%, black 100%);",
                //     thisheadstyle:"background: #678bff;",
                //     present: false,
                //     imgsrc:"",
                // },
                // {
                //     themeid:1,
                //     title: "默认",
                //     thisstyle: "background: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);",
                //     thisheadstyle:"background: #678bff;",
                //     present: false,
                //     imgsrc:"",
                // },
            ],
        }
    },
    components:{
        "theme": {
            template: `<div class="theme" @click="toggletheme">
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
                    item.imgsrc = require('./../../static/images/icon/check.svg');
                },
                toggletheme:function (){

                    // console.log(this.themeid,this.thisheadstyle,this.thisstyle);

                    var that = this;
                    var ajaxargument = "";
                    ajaxargument = `themeid=${this.themeid}&thisheadstyle=${this.thisheadstyle}&thisstyle=${this.thisstyle}`;

                    var ajax = new XMLHttpRequest();
                    ajax.open('post','/settheme');
                    ajax.send(ajaxargument);
                    ajax.onreadystatechange = function () {
                        if (ajax.readyState==4 &&ajax.status==200) {
                            var data = ajax.responseText;
                            data = myparse(data);
                            // console.log(data);//输入相应的内容
                            if(data.status == 1){
                                that.$store.commit('setState',{attr:'theme',field:[that.themeid,that.thisheadstyle,that.thisstyle]});
                                that.$emit("togglethemeimg",that.themeid);
                                layer.open({
                                    content: `设置主题成功`,
                                    skin: 'msg',
                                    time: 2,
                                });
                            }else{
                                layer.open({
                                    content: `设置主题超时`,
                                    skin: 'msg',
                                    time: 2,
                                });
                            }
                        }
                    }

                }
            }

        },
    },
    methods:{
        togglethemeimg:function (themeid){
            for(let i = 0 ; i <= this.themelist.length-1 ; i++){
                this.themelist[i].present = false;
                if(this.themelist[i].themeid == themeid){
                    this.themelist[i].present = true;
                }
            }
        }
    },
    mounted:function (){
        this.$store.dispatch('getUserMsg');

        // var userthemeid = this.$store.state.theme;
        var that = this;



        var ajax = new XMLHttpRequest();
        ajax.open('post','/gettheme');
        ajax.send();
        ajax.onreadystatechange = function () {
            if (ajax.readyState==4 &&ajax.status==200) {
                var data = ajax.responseText;
                data = myparse(data);
                // console.log(data);//输入相应的内容
                if(data.status == 1){
                    var thisthemelist = [];
                    for(let i = 0 ; i <= data.data.length-1 ; i++){
                        // console.log(data.data[i]);
                        if(data.data[i].themeuser == 0){
                            // {
                            //     themeid:1,
                            //     title: "默认",
                            //     thisstyle: "background: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);",
                            //     thisheadstyle:"background: #678bff;",
                            //     present: false,
                            //     imgsrc:"",
                            // },

                            // status: 1
                            // themehead: "background: #678bff;"
                            // themeid: 1
                            // thememain: "background: #617FDF;"
                            // themename: null
                            // themetype: 1
                            // themeuser: 0
                            var thisObj = {};
                            thisObj.themeid = data.data[i].themeid;
                            thisObj.title = data.data[i].themename;
                            thisObj.thisstyle = data.data[i].thememain;
                            thisObj.thisheadstyle = data.data[i].themehead;
                            thisObj.present = false;
                            thisObj.imgsrc = "";
                            if(that.$store.state.theme[0] == data.data[i].themeid){
                                thisObj.present = true;
                            }
                            thisthemelist.push(thisObj);
                        }
                    }
                    that.themelist = thisthemelist;

                }else{
                    layer.open({
                        content: `获取主题信息超时`,
                        skin: 'msg',
                        time: 2,
                    });
                }
            }
        }



    }
}
</script>

<style>
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
    .theme span{
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
</style>
