<template>
    <div class="task" ref="task">
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
            tasktoptext: "今天",
            protasklist:[
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
            ],
            comtasklist:[
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
            ]
        }
    },
    components:{
        tasklist,
    },
    mounted:function (){

        console.log("task");
        // this.$refs.task.style.display = "block";
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
        /* display: none; */
    }
</style>
