<template>
    <div class="addtheme">
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
        >
        </theme>
        <div class="link"></div>
        <div class="centerwrap">
            <input type="text" class="logininput">
        </div>
        <colorPicker v-model="color" defaultColor="#ff0000"></colorPicker>
    </div>
</template>
<script>
import colorPicker from './../../components/colorpicker.vue'

export default {
    data() {
        return{
            themelist: [
                {
                    themeid:1,
                    title: "自定义主题",
                    thisstyle: "background: linear-gradient(-45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);",
                    thisheadstyle:"background: #FD7897;",
                    present: false,
                    imgsrc:"",
                },
            ],
            color:''
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
                    item.imgsrc = require('./../../static/images/icon/check.svg');
                },
            }

        },
    },
    methods:{
        
    }
}
</script>
<style>
    .addtheme .logininput{
        text-align: center;
        border: none;
        border-bottom: 1px solid #e2e2e2;
        width: 100%;
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

