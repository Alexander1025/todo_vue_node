<template>
    <div class="footer_common">
        <div>
            <img src="./../static/images/icon/task_gray.svg" alt="">
            <span>任务</span>
        </div>
        <div>
            <img src="./../static/images/icon/calendar_gray.svg" alt="">
            <span>日历</span>
        </div>
        <div>
            <img src="./../static/images/icon/set_gray.svg" alt="">
            <span>设置</span>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    mounted:function (){
        console.log(this.$store.state.footerindex);

    }
}
</script>
<style>
    .footer_common{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        border-top: 1px solid #ccc;
        padding: 5px 0 3px;

        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-content: center;
    }
    .footer_common > div{
        align-self: center;
        text-align: center;
    }
    .footer_common > div > img{
        width: 20px;
    }
    .footer_common > div > span{
        display: block;
        line-height: 16px;
        font-size: 12px;
    }
</style>

