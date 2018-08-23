<template>
    <div class="tasklist">
        <div class="tasklistimg" v-if="this.item.status == 1">
            <img src="./../static/images/icon/emptyradio.svg" alt="">
        </div>
        <div class="tasklistimg" v-else-if="this.item.status == 2">
            <img src="./../static/images/icon/radio.svg" alt="">
        </div>
        <div class="taskdescribe" :class="[status == 2 ? 'emptytext' : '']">{{this.item.text}}</div>
        <div class="tasktime">{{this.item.text}}</div>
    </div>
</template>
<script>
export default {
    props:["item","status"],
    data () {
        return {

        }
    },
    mounted:function (){
        // console.log("tasklist");
    }
}
</script>
<style>
    .tasktop{
        background-color: #EDEFFB;
        line-height: 36px;
        color: #9FA5B3;
        font-size: 12px;
        padding: 0 0 0 5%;
    }
    .tasklist{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        padding: 0 3%;
        font-size: 14px;
        height: 52px;
    }
    .tasklistimg{
        flex: 0 1 8%;
        text-align: center;
    }
    .tasklistimg img{
        width: 60%;
        line-height: 52px;
        vertical-align: bottom;
    }
    .taskdescribe{
        flex: 0 1 65%;
        line-height: 52px;
    }
    .tasktime{
        flex: 0 1 20%;
        text-align: center;
        line-height: 52px;
        color: #bdbdbd;
        font-weight: 100;
        font-size: 12px;
    }
    .emptytext{
        color: #909090;
    }
</style>
