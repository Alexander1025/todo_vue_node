<template>
    <div class="settingwrap">
        <ul>
            <router-link to="/setting/theme">
                <li>
                    <span class="flexleft"><img src="./../../static/images/icon/theme.svg" alt=""></span>
                    <span class="flexmian">主题</span>
                    <span class="flexdescribe">默认</span>
                    <span class="flexright"><img src="./../../static/images/icon/rightmore.svg" alt=""></span>
                </li>
            </router-link>
            <li>
                <span class="flexleft"><img src="./../../static/images/icon/grade.svg" alt=""></span>
                <span class="flexmian">任务等级偏好(暂未开放)</span>
                <span class="flexdescribe"></span>
                <span class="flexright"><img src="./../../static/images/icon/rightmore.svg" alt=""></span>
            </li>
            <li>
                <span class="flexleft"><img src="./../../static/images/icon/personal.svg" alt=""></span>
                <span class="flexmian">个人信息(暂未开放)</span>
                <span class="flexdescribe"></span>
                <span class="flexright"><img src="./../../static/images/icon/rightmore.svg" alt=""></span>
            </li>
        </ul>
        <ul>
            <li>
                <span class="flexleft"><img src="./../../static/images/icon/buy.svg" alt=""></span>
                <span class="flexmian">购买pro版(暂未开放)</span>
                <span class="flexdescribe"></span>
                <span class="flexright"><img src="./../../static/images/icon/rightmore.svg" alt=""></span>
            </li>
            <li>
                <span class="flexleft"><img src="./../../static/images/icon/gift.svg" alt=""></span>
                <span class="flexmian">赞助(暂未开放)</span>
                <span class="flexdescribe"></span>
                <span class="flexright"><img src="./../../static/images/icon/rightmore.svg" alt=""></span>
            </li>
        </ul>
        <ul>
            <li @click="logout();">
                <span class="flexleft"><img src="./../../static/images/icon/logout.svg" alt=""></span>
                <span class="flexmian">登出</span>
                <span class="flexdescribe"></span>
                <span class="flexright"><img src="./../../static/images/icon/rightmore.svg" alt=""></span>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data () {
        return {
            message: '',
        }
    },
    components:{

    },
    methods:{
        logout:function (){
            this.$store.dispatch('logout');
        }
    },
    mounted:function (){



    }
}
</script>

<style>

    .settingwrap{
        width: 100%;
    }
    .settingwrap ul, .settingwrap li{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    /* .settingwrap ul:nth-of-type(1){
        border-top:none;
    } */
    .settingwrap ul a{
        text-decoration: none;
    }
    .settingwrap ul{
        border-bottom: 18px solid rgba(97, 127, 223, 0.5);
        background-color: rgba(255, 255, 255, 0.5);
    }
    .settingwrap ul>li:nth-last-of-type(1){
        border-bottom: none;
    }
    .settingwrap li{
        width: 90%;
        margin: auto;
        border-bottom: 1px solid #efefef;
        line-height: 50px;
        color: #B2B4BC;
        font-size: 14px;

        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }
    .settingwrap li span{
        text-align: center;
    }

    .flexleft{
        flex: 0 1 10%;
    }
    .settingwrap .flexmian{
        text-align: left;
        font-size: 16px;
        color: #373D49;
        flex: 0 1 70%;
    }
    .flexdescribe{
        flex: 0 1 10%;
    }
    .flexright{
        flex: 0 1 10%;
    }
    .flexleft img{
        width: 50%;
        vertical-align: middle;
    }
    .flexright img{
        width: 50%;
        vertical-align: middle;
    }
</style>
