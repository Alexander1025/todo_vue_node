<template>
    <div class="slidewrap" :style="{ left : slideleft + 'px' }">
        <div class="tasklist">
            <div class="tasklistimg" v-if="this.item.status == 1">
                <img src="./../static/images/icon/emptyradio.svg" alt="">
            </div>
            <div class="tasklistimg" v-else-if="this.item.status == 2">
                <img src="./../static/images/icon/radio.svg" alt="">
            </div>

            <div
                class="taskdescribe"
                :class="[status == 2 ? 'emptytext' : '']"
                @touchstart="touchstart"
                @touchmove="touchmove"
                @touchend="touchend"
                @click="taskclick">
                {{this.item.text}}
            </div>

            <div
                class="tasktime">
                {{this.item.text}}
            </div>
        </div>
        <div class="slideright">
            test
        </div>
    </div>
</template>
<script>
import { tween, easing } from 'popmotion';
import { setTimeout } from 'timers';

export default {
    props:["item","status"],
    data () {
        return {
            clientX:0,
            slideleft:0,
            offset:0,
            multiple:40,
            taskwidth:(document.documentElement.clientWidth)*0.2,
            taskstatus: 0 // 0:初始状态,1:右侧显示,2:左侧显示,3:
        }
    },
    mounted:function (){

    },
    methods:{
        touchstart:function (e){
            // console.log(e);
            this.clientX = e.changedTouches[0].clientX;
            // console.log("touchstart");
        },
        touchmove:function (e){
            // console.log(e);
            var translationleft = e.changedTouches[0].clientX - this.clientX + this.offset;
            if(translationleft < 0 && translationleft >= -this.taskwidth){
                this.slideleft = translationleft;
                this.taskstatus = 0;
            }else if(translationleft < -this.taskwidth){
                var translationleft1 = e.changedTouches[0].clientX + this.taskwidth - this.clientX + this.offset;
                this.slideleft = -this.taskwidth + (Math.atan(translationleft1/this.multiple))*this.multiple;
                this.taskstatus = 1;
            }else if(translationleft > 0){
                // this.slideleft = (translationleft)/((translationleft)/80+0.8);
                // this.slideleft = (translationleft)/(((translationleft*translationleft)/10000)+1);
                this .slideleft = (Math.atan(translationleft/this.multiple))*this.multiple;
                this.taskstatus = 0;
            }
            // console.log("touchmove");
        },
        touchend:function (e){
            // console.log(e);
            // console.log("touchend");
            if(this.taskstatus == 0){
                this.resilience(this.slideleft, 0);
                this.offset = 0;
            }else if(this.taskstatus == 1){
                this.resilience(this.slideleft, -this.taskwidth);
                this.offset = -this.taskwidth;
            }

            let thistask = setTimeout(() => {
                this.resilience(this.slideleft, 0);
                this.taskstatus = 0;
                this.offset = 0;
            },2000);
        },
        taskclick:function (){
            if(this.taskstatus != 0){
                this.resilience(this.slideleft, 0);
                this.taskstatus = 0;
                this.offset = 0;
                return false;
            }
        },



        resilience:function (start, end){
            tween({ from: start, to: end, duration: 400, ease: easing.backOut}).start(
                (slideleft) => {
                    this.slideleft = slideleft;
                }
            );
        },
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
        font-size: 14px;
        height: 52px;
        width: 100vw;
        padding: 0 3%;
        box-sizing: border-box;
        float: left;
        background-color: white;
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
    .slidewrap{
        width: 120vw;
        overflow: hidden;
        position: relative;
        margin-top: -1px;
    }
    .slideright{
        float: left;
        /* background-color: #FD3C2D; */
        height: 52px;
        line-height: 52px;
        width: 20vw;
        text-align: center;
        color: white;
        font-size: 12px;
    }
</style>
