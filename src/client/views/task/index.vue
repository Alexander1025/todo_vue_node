<template>
    <div class="indexwrap">
        <headerCommon></headerCommon>
        <div class="taskwrap">
            <i>新增任务</i>
            <input id="task" v-model="taskname" type="text" placeholder="^_^ 在这里填写下一个任务吧 ^_^">
            <i>新增任务颜色</i>
            <colorPicker v-model="color" defaultColor="#ff0000"></colorPicker>
            <i>系统预设可选颜色</i>
            <div class="select">
                <div
                    class="selectlist"
                    @click="changecolor('#FA709A')"
                    style="background-color:#FA709A"
                >
                </div>
                <div
                    class="selectlist"
                    @click="changecolor('#FFCC70')"
                    style="background-color:#FFCC70"
                >
                </div>
                <div
                    class="selectlist"
                    @click="changecolor('#617FDF')"
                    style="background-color:#617FDF"
                >
                </div>
                <div
                    class="selectlist"
                    @click="changecolor('#2AF598')"
                    style="background-color:#2AF598"
                >
                </div>
            </div>
            <div
                class="submit"
                @click="submittask"
            >
                新增
            </div>
        </div>

        <footerCommon></footerCommon>
    </div>
</template>

<script>
import headerCommon from './../../components/Header.vue';
import footerCommon from './../../components/footer.vue';

import colorPicker from './../../components/colorpicker.vue';

import {trim,myparse} from './../../static/js/common.js';

export default {
    data () {
        return {
            message: '',
            color:'#f2f2f2',
            taskname:'',
            submited: false,
        }
    },
    components:{
        headerCommon,
        footerCommon,
        colorPicker
    },
    mounted:function (){
        this.$store.commit('setState',{attr:'footerindex',field:0});
    },
    methods:{
        changecolor:function (color){
            this.color = color;
        },
        submittask:function (){
            if(!this.submited){
                this.submited = true;
                layer.open({
                    content: "正在添加",
                    skin: 'msg',
                    time: 2,
                });
                var ajaxargument = "";
                ajaxargument = `userid=${this.$store.state.userid}&taskname=${this.taskname}&taskcolor=${this.color}`;
                var that = this;
                var ajax = new XMLHttpRequest();
                ajax.open('post','/node/addtask');
                ajax.send(ajaxargument);
                ajax.onreadystatechange = function () {
                    if (ajax.readyState==4 &&ajax.status==200) {
                        var data = ajax.responseText;
                        data = myparse(data);
                        console.log(data);//输入相应的内容
                        if(data.status == 1){
                            layer.open({
                                content: "添加成功",
                                skin: 'msg',
                                time: 2,
                            });
                            var time = setTimeout(()=>{
                                that.$router.push({path: '/'});
                            },300);
                        }else if(data.status == 0){

                        }
                    }
                }
            }

        }
    }
}
</script>

<style>
    .m-colorPicker, .colorBtn, .colorBtn, #task{
        position: relative;
        display: block !important;
        width: 80vw !important;
        height: 40px !important;
        margin: 20px auto 0;
        border: none;
        border-radius: 3px;
    }
    #task{
        border: 1px solid #0084c6;
    }
    .taskwrap{
        position: fixed;
        top: 50px;
        left: 0;
        width: 100vw;
    }
    .taskwrap i, .submit{
        display: block;
        width: 80vw;
        margin: 60px auto 0;
        font-style: normal;
    }
    .submit{
        display: block;
        width: 80%;
        line-height: 42px;
        background-color: #0084c6;
        color: white;
        text-align: center;
        text-decoration: none;
        margin: 80px auto 0;
        border-radius: 3px;
    }
    .colorBtn{
        margin: 0 !important;
    }
    .select{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        margin: 20px auto 0;
    }
    .selectlist{
        height: 40px;
        width: 40px;
        margin: 10px;
    }
</style>
