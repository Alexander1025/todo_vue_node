<template>
    <div class="indexwrap">
        <headerCommon></headerCommon>

        <footerCommon></footerCommon>
    </div>
</template>

<script>
import headerCommon from './../../components/Header.vue';
import footerCommon from './../../components/footer.vue';

export default {
    data () {
        return {
            message: ''
        }
    },
    components:{
        headerCommon,
        footerCommon,
    },
    mounted:function (){
        let date = new Date();
        let mon = date.getMonth();
        this.$store.commit('getMonth',mon);

        this.$store.dispatch('getUserMsg');

        this.$store.commit('setState',{attr:'footerindex',field:0});
    }
}
</script>

<style>

</style>
