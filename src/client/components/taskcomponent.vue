<template>
    <div class="task" ref="task" :style="{ top: tasktop + 'px', height: taskheight + 'px'}">
        <div class="tasktop">
            {{this.tasktoptext}}
        </div>
        <div class="tasklistwrap">
            <tasklist
                v-for="(item, index) in protasklist"
                :item="item"
                :key="item.id"
            >
            </tasklist>
        </div>
        <div class="tasktop">
            已完成
        </div>
        <div class="tasklistwrap">
            <tasklist
                v-for="(item, index) in comtasklist"
                :item="item"
                :key="item.id"
                :status="item.status"
            >
            </tasklist>
        </div>
    </div>
</template>
<script>
import tasklist from './tasklistcomponent.vue';

export default {
    data () {
        return {
            tasktop:0,
            taskheight:0,
            tasktoptext: "今天",
            protasklist:[
                {
                    id:1,
                    text:"测试1",
                    status: 1,
                },
                {
                    id:2,
                    text:"测试2",
                    status: 1,
                },
                {
                    id:3,
                    text:"测试3",
                    status: 1,
                },
                {
                    id:4,
                    text:"测试4",
                    status: 1,
                },
            ],
            comtasklist:[
                {
                    id:1,
                    text:"测试1",
                    status: 2,
                },
                {
                    id:2,
                    text:"测试2",
                    status: 2,
                },
                {
                    id:3,
                    text:"测试3",
                    status: 2,
                },
                {
                    id:4,
                    text:"测试4",
                    status: 2,
                },
            ]
        }
    },
    components:{
        tasklist,
    },
    mounted:function (){
        this.$nextTick(function () {
            for(let i = 0 , j = this.$parent.$children ; i <= j.length-1 ; i++){
                if(this.$parent.$children[i].$el.className == "header_common" || this.$parent.$children[i].$el.className == "calendar"){
                    this.tasktop += this.$parent.$children[i].$el.offsetHeight;
                }
            }
            for(let i = 0 , j = this.$parent.$children ; i <= j.length-1 ; i++){
                if(this.$parent.$children[i].$el.className == "footer_common"){
                    this.taskheight = (document.body.clientHeight || document.documentElement.clientHeight) - this.$parent.$children[i].$el.clientHeight - this.tasktop;
                }
            }
            this.$refs.task.style.display = "block";
            this.$refs.task.style
        })

    }
}

</script>
<style>
    .tasktop{
        background-color: #EDEFFB;
        line-height: 26px;
        color: #9FA5B3;
        font-size: 12px;
        padding: 0 0 0 5%;
    }
    .task{
        overflow: scroll;
        display: none;
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
    }
    .tasklistwrap{
        overflow: hidden;
        background: -webkit-linear-gradient(left, #617FDF -20%, white 40%, white 60%, red 90%); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(to right, #617FDF -20%, white 40%, white 60%, red 90%); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(to right, #617FDF -20%, white 40%, white 60%, red 90%); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #617FDF -20%, white 40%, white 60%, red 90%); /* 标准的语法 */
    }
</style>
