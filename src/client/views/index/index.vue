<template>
    <div class="indexwrap">
        <headerCommon></headerCommon>
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
import headerCommon from './../../components/Header.vue';

export default {
    data () {
        return {
            message: 'asd'
        }
    },
    components:{
        headerCommon
    }
}
</script>

<style>
html {
    height: 100%;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>
