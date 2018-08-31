<template>
    <div class="bg"></div>
</template>
<script>
export default {

}
</script>
<style>
.bg{
    position: fixed;
    height: 100vh;
    width: 100vw;
    margin: 0;
    background: url("./static/images/common/bg4.png");
    background-size:100% 100%;
    -webkit-filter: blur(10px);
       -moz-filter: blur(10px);
        -ms-filter: blur(10px);
            filter: blur(10px);
    z-index: -1;
    /* background: linear-gradient(280deg, #accbee 0%, #e7f0fd 100%); */
    background: #EDEFFB;
    /* background: linear-gradient(180deg, #dfe9f3 0%, white 100%); */
}
</style>

