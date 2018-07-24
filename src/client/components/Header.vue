<template>
    <div class="header_common">
        {{datemo}}月
    </div>
</template>
<script>
export default {
    data () {
        return {
            datemo: "八",
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
    }
</style>

