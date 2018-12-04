<template>
    <div class="app full-height">
        <div
            class="bg"
            :style=this.$store.state.theme[2]
        ></div>
        <router-view></router-view>
        <div class="bottom"></div>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    mounted: function (){
        console.log("%c周机智分享网"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em;color:#fc6d41");
        console.log("%c记住它：http://www.zhoujizhi.com","color: red;  font-size: 24px;")
    }
}
</script>

<style>
html {
    height: 100%;
}

body {
    /* display: flex;
    align-items: center;
    justify-content: center; */
    height: 100%;
    margin: 0;
}
.bg{
    position: fixed;
    height: 100vh;
    width: 100vw;
    margin: 0;
    /* background: url("./static/images/common/bg4.png"); */
    background-size:100% 100%;
    -webkit-filter: blur(10px);
       -moz-filter: blur(10px);
        -ms-filter: blur(10px);
            filter: blur(10px);
    z-index: -1;
    /* background: linear-gradient(280deg, #accbee 0%, #e7f0fd 100%); */
    /* background: #EDEFFB; */
    /* background: linear-gradient(180deg, #dfe9f3 0%, white 100%); */
    opacity: 0.4;
}
.centerwrap{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
}
.verticalbetween{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
}
.bottom{
    height: 49px;
}
.indexwrap{
    z-index: 1;
}
.bgfullcover{

}
</style>
