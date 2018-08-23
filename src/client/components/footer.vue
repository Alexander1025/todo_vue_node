<template>
    <div class="footer_common">
        <div :class="[this.$store.state.footerindex == 0 ? 'thisdiv' : '']">
            <img
                src="./../static/images/icon/task_blue.svg" alt=""
                v-if="this.$store.state.footerindex == 0"
            >
            <img
                src="./../static/images/icon/task_gray.svg" alt=""
                v-else
            >
            <span>任 务</span>
        </div>
        <div :class="[this.$store.state.footerindex == 1 ? 'thisdiv' : '']">
            <img
                src="./../static/images/icon/calendar_blue.svg" alt=""
                v-if="this.$store.state.footerindex == 1"
            >
            <img
                src="./../static/images/icon/calendar_gray.svg" alt=""
                v-else
            >
            <span>日 历</span>
        </div>
        <div :class="[this.$store.state.footerindex == 2 ? 'thisdiv' : '']">
            <img
                src="./../static/images/icon/set_blue.svg" alt=""
                v-if="this.$store.state.footerindex == 2"
            >
            <img
                src="./../static/images/icon/set_gray.svg" alt=""
                v-else
            >
            <span>设 置</span>
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
        // console.log(this.$store.state.footerindex);

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
        background-color: white;

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
        color: #8a8a8a;
    }
    .footer_common > div.thisdiv > span{
        color: #1296db;
    }
</style>

