<template>
    <div class="indexwrap">
        <!-- <headerCommon></headerCommon> -->
        <!-- <calendar></calendar> -->
        <taskcomponent></taskcomponent>

        <!-- <footerCommon></footerCommon> -->
    </div>
</template>

<script>
import headerCommon from './../../components/Header.vue';
import calendar from './../../components/calendar.vue';
import taskcomponent from './../../components/taskcomponent.vue';
import footerCommon from './../../components/footer.vue';

export default {
    data () {
        return {
            message: ''
        }
    },
    components:{
        // headerCommon,
        // calendar,
        taskcomponent,
        // footerCommon,
    },
    mounted:function (){
        // let date = new Date();
        // let mon = date.getMonth();
        // this.$store.commit('getMonth',mon);

        // this.$store.dispatch('getUserMsg');
    }
}
</script>

<style>

</style>
