<template>
    <div class="slidewrap" :style="{ left : slideleft + 'px' }" v-if="item.status == 0 || item.status == 1">
        <div class="tasklist">
            <div class="tasklistimg" v-if="item.status == 0" @click="changecomplete(item.id, 1, item)">
                <img
                    src="./../static/images/icon/emptyradio.svg"
                    alt=""
                >
                <div
                    class="imgimgbg"
                    :style="{ backgroundColor: bgcolor }"
                >
                </div>
            </div>
            <div class="tasklistimg" v-else-if="item.status == 1" @click="changecomplete(item.id, 0, item)">
                <img
                    src="./../static/images/icon/radio1.png"
                    alt=""
                >
                <div
                    class="imgimgbg"
                    :style="{ backgroundColor: bgcolor }"
                >
                </div>
            </div>

            <div
                class="taskdescribe"
                :class="[status == 2 ? 'emptytext' : '']"
                :style="{ color: color }"
                @touchstart="touchstart"
                @touchmove="touchmove"
                @touchend="touchend"
                @click="taskclick"
            >
                {{item.text}}
            </div>

            <!-- <div
                class="tasktime">
                {{item.text}}
            </div> -->
        </div>
        <div class="slideright" @click="deletetask(item.id, item)">
            删除
        </div>
    </div>
</template>
<script>
import { tween, easing } from 'popmotion';

import {trim,myparse} from './../static/js/common.js';

export default {
    props:["item","status","bgcolor","color"],
    data () {
        return {
            clientX:0,
            clientY:0,
            isvertical:false,
            iscrosswise:false,
            isoriginal:true,
            slideleft:0,
            offset:0,
            multiple:40,
            taskwidth:(document.documentElement.clientWidth)*0.2,
            taskstatus: 0, // 0:初始状态,1:右侧显示,2:左侧显示,3:
            thistask: '',
        }
    },
    mounted:function (){

    },
    methods:{
        touchstart:function (e){
            clearTimeout(this.thistask);
            this.clientX = e.changedTouches[0].clientX;
            this.clientY = e.changedTouches[0].clientY;
        },
        touchmove:function (e){
            if(!this.isvertical){
                // 判断是否有横向移动
                var crosswisemove = 40;
                if(Math.abs(e.changedTouches[0].clientX - this.clientX) > crosswisemove){
                    this.iscrosswise = true;
                }
            }
            if(!this.iscrosswise){
                // 判断是否有竖向移动
                // 有竖向移动的时候就将横向移动关闭
                var verticalmove = 20;
                if(Math.abs(e.changedTouches[0].clientY - this.clientY) > verticalmove){
                    this.isvertical = true;
                    if(this.isoriginal){
                        this.isoriginal = false;
                        this.resilience(this.slideleft, 0);
                    }

                }
            }
            if(!this.isvertical){
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
            }

        },
        touchend:function (e){
            this.isvertical = false;
            this.iscrosswise = false;
            this.isoriginal = true;
            if(!this.isvertical){
                // console.log(e);
                // console.log("touchend");
                if(this.taskstatus == 0){
                    this.resilience(this.slideleft, 0);
                    this.offset = 0;
                }else if(this.taskstatus == 1){
                    this.resilience(this.slideleft, -this.taskwidth);
                    this.offset = -this.taskwidth;
                }

                this.thistask = setTimeout(() => {
                    this.resilience(this.slideleft, 0);
                    this.taskstatus = 0;
                    this.offset = 0;
                },2000);
                // clearInterval(this.thistask);
            }
            this.isvertical = false;
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
        changecomplete:function (taskid, tostatus, item){

            var ajaxargument = "";
            ajaxargument = `userid=${this.$store.state.userid}&taskid=${taskid}&tostatus=${tostatus}`;
            var ajax1 = new XMLHttpRequest();
            ajax1.open('post','/node/changecomplete');
            ajax1.send(ajaxargument);
            ajax1.onreadystatechange = function () {
                if (ajax1.readyState==4 &&ajax1.status==200) {
                    var data = ajax1.responseText;
                    data = myparse(data);
                    // console.log(data);//输入相应的内容
                    if(data.status == 1){
                        item.status = tostatus;
                    }else if(data.status == 0){
                        layer.open({
                            content: "修改不成功",
                            skin: 'msg',
                            time: 2,
                        });
                    }
                }
            }
        },
        deletetask:function (taskid, item){
            var ajaxargument = "";
            ajaxargument = `userid=${this.$store.state.userid}&taskid=${taskid}`;
            var ajax1 = new XMLHttpRequest();
            ajax1.open('post','/node/deletetask');
            ajax1.send(ajaxargument);
            ajax1.onreadystatechange = function () {
                if (ajax1.readyState==4 &&ajax1.status==200) {
                    var data = ajax1.responseText;
                    data = myparse(data);
                    // console.log(data);//输入相应的内容
                    if(data.status == 1){
                        item.status = -1;
                    }else if(data.status == 0){
                        layer.open({
                            content: "修改不成功",
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
        position: relative;
    }
    .tasklistimg img{
        width: 20px;
        height: 20px;
        line-height: 52px;
        vertical-align: bottom;
    }
    .imgimgbg{
        width: 16px;
        height: 16px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.6;
    }
    .taskdescribe{
        /* flex: 0 1 65%; */
        flex: 0 1 85%;
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
        height: 52px;
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
