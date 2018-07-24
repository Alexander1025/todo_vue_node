<template>
    <div class="indexwrap">
        <headerCommon></headerCommon>
        <calendar></calendar>
    </div>
</template>

<script>
import headerCommon from './../../components/Header.vue';
import calendar from './../../components/calendar.vue';

export default {
    data () {
        return {
            message: ''
        }
    },
    components:{
        headerCommon,
        calendar
    }
}
</script>

<style>

</style>
