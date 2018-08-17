<template>
    <div class="task">
        <div class="tasktop">
            {{this.tasktoptext}}
        </div>
        <div class="tasklist">
            <tasklist
                v-for="(item, index) in tasklist"
                :item="item"
                :key="item.id"
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
            tasklist:[
                {
                    id:1,
                    text:"测试1"
                },
                {
                    id:2,
                    text:"测试2"
                },
                {
                    id:3,
                    text:"测试3"
                },
                {
                    id:4,
                    text:"测试4"
                },
            ]
        }
    },
    components:{
        tasklist,
    },
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
</style>
