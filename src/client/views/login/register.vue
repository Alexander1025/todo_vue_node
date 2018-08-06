<template>
    <div class="centerwrap">
        <img class="img" src="./../../static/images/common/login.png" alt="">
        <input
            class="logininput logininputregister"
            type="text"
            placeholder="账号"

            :class="[succeed?'logininputsucceed':'',failure?'logininputfailure':'']"
            v-model="username"
        >
        <input
            class="logininput logininputregister"
            type="password"
            placeholder="密码"

            v-model="password"
        >
        <a class="loginbtn loginbtnregister" href="javascript:void(0);">注册</a>
        <div class="logingray logingrayregister verticalbetween">
            <a href="javascript:void(0);"></a>
            <router-link to="/login">
                <a href="javascript:void(0);">密码登录</a>
            </router-link>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            username:"",
            password:"",
            succeed:false,
            failure:false,
        }
    },
    watch:{
        username:function (){
            var that = this;
            var ajaxargument = "";
            ajaxargument = `username=${this.username}`
            // console.log(ajaxargument);
            var ajax = new XMLHttpRequest();
            ajax.open('post','/haveUserName');
            ajax.send(ajaxargument);
            ajax.onreadystatechange = function () {
                if (ajax.readyState==4 &&ajax.status==200) {
                    var data = JSON.parse(ajax.responseText);
                    console.log(data);//输入相应的内容
                    if(data.status == 1){
                        console.log(data.data.length);
                        if(data.data.length == 0){
                            that.succeed = true;
                            that.failure = false;
                        }else{
                            that.succeed = false;
                            that.failure = true;
                        }
                    }
                }
            }
        }
    },
    components:{

    },
    mounted: function (){

        // var ajax2 = new XMLHttpRequest();
        // ajax2.open('post','/result');
        // ajax2.send();
        // ajax2.onreadystatechange = function () {
        //     if (ajax2.readyState==4 &&ajax2.status==200) {
        // 　　　　console.log(ajax2.responseText);//输入相应的内容
        //   　　}
        // }
    }
}
</script>

<style>
    .centerwrap .logininputregister{
        border: none;
        border-bottom: 1px solid #e2e2e2;
        width: 80%;
        line-height: 50px;
        margin: 10px 0;
        font-size: 16px;
        color: #a98604;
        outline: none;
    }
    .logininputsucceed{
        box-shadow:0px 5px 10px -5px #39c163;
        /* box-shadow:0px 5px 10px -5px #0084c6; */
    }
    .logininputfailure{
        box-shadow:0px 5px 10px -5px #c33030;
    }
    .centerwrap .logininputregister::-webkit-input-placeholder {
        color: #8fa2dc;
    }
    .centerwrap .logininputregister:-moz-placeholder {
        color: #8fa2dc;
    }
    .centerwrap .logininputregister::-moz-placeholder {
        color: #8fa2dc;
    }
    .centerwrap .logininputregister:-ms-input-placeholder {
        color: #8fa2dc;
    }
    .centerwrap .loginbtnregister{
        display: block;
        width: 80%;
        line-height: 42px;
        background-color: #617FDF;
        color: white;
        text-align: center;
        text-decoration: none;
        margin: 15px 0 0;
        border-radius: 3px;
    }
    .centerwrap .logingrayregister a{
        color: #a0a0a0;
        text-decoration: none;
        font-size: 14px;
    }
</style>
