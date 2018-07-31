<template>
    <div class="app full-height">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
}
</script>

<style>
html {
    height: 100%;
}
body {
    /* display: flex;
    align-items: center;
    justify-content: center; */
    height: 100%;
    margin: 0;
}
.centerwrap{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
}
.verticalbetween{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
}
</style>
