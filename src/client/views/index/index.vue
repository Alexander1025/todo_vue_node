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
    },
    mounted:function (){
        let date = new Date();
        let mon = date.getMonth();
        this.$store.commit('getMonth',mon);

        this.$store.dispatch('getUserMsg');
    }
}
</script>

<style>

</style>
