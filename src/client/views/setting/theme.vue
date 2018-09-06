<template>
    <div class="settingwrap">
        <div class="themewrap">
            <div class="themelisttop">
                纯色主题
            </div>
            <div class="thememain">
                <theme
                    v-for="(item, index) in themelist"
                    :title=item.title
                    :thisstyle=item.thisstyle
                    :present=item.present
                    :imgsrc=item.imgsrc
                    :item=item
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
        </div>

    </div>
</template>

<script>

export default {
    data () {
        return {
            message: '',
            themelist: [
                {
                    title: "默认",
                    thisstyle: "",
                    present: true,
                    imgsrc:"./../../static/images/icon/check.svg",
                },
                {
                    title: "默认",
                    thisstyle: "background: linear-gradient(-45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);",
                    present: false,
                    imgsrc:"./../../static/images/icon/check.svg",
                },
                {
                    title: "默认",
                    thisstyle: "background: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);",
                    present: false,
                    imgsrc:"./../../static/images/icon/check.svg",
                },
                {
                    title: "默认",
                    thisstyle: "background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);",
                    present: false,
                    imgsrc:"./../../static/images/icon/check.svg",
                },
                {
                    title: "默认",
                    thisstyle: "background: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);",
                    present: false,
                    imgsrc:"./../../static/images/icon/check.svg",
                },
                {
                    title: "默认",
                    thisstyle: "background: linear-gradient(to right, #fa709a 0%, #fee140 100%);",
                    present: false,
                    imgsrc:"./../../static/images/icon/check.svg",
                },
                {
                    title: "默认",
                    thisstyle: "background: linear-gradient(to top, #30cfd0 0%, #330867 100%);",
                    present: false,
                    imgsrc:"./../../static/images/icon/check.svg",
                },
                {
                    title: "默认",
                    thisstyle: "background: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);",
                    present: false,
                    imgsrc:"./../../static/images/icon/check.svg",
                },
                {
                    title: "默认",
                    thisstyle: "background: linear-gradient(to right, #434343 0%, black 100%);",
                    present: false,
                    imgsrc:"./../../static/images/icon/check.svg",
                },
                {
                    title: "默认",
                    thisstyle: "background: linear-gradient(to right, #f83600 0%, #f9d423 100%);",
                    present: false,
                    imgsrc:"./../../static/images/icon/check.svg",
                },
                {
                    title: "默认",
                    thisstyle: "background: linear-gradient(to top, #09203f 0%, #537895 100%);",
                    present: false,
                    imgsrc:"./../../static/images/icon/check.svg",
                },
            ],
        }
    },
    components:{
        "theme": {
            template: `<div class="theme">
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
            props:["title","thisstyle","present","imgsrc","item"],
            methods:{
                imgError: function (item) {
                    item.imgsrc = require('./../../static/images/icon/check.svg');
                }
            }

        },
    },
    methods:{

    },
    mounted:function (){



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
</style>
