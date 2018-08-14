<template>
    <div class="header_common">
        <span>
            {{this.$store.state.datemonth}}月
        </span>
        <span>
            {{this.$store.state.datemonth}}月
        </span>
        <span>
            {{this.$store.state.username}}
        </span>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    }
}
</script>
<style>
    .header_common{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background-color: #617FDF;
        color: white;
        text-align: center;
        line-height: 50px;
        font-size: 18px;


        display: flex;
        flex-flow:row nowrap;
        justify-content:space-between;
        align-items:center;
    }
    .header_common span{
        flex:0 1 18%;
    }
</style>

