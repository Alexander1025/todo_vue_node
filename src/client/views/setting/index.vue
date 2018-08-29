<template>
    <div class="indexwrap">
        <headerCommon></headerCommon>
        <br><br><br><br><br>
        <div  @click="logout();">
            登出
        </div>

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
    methods:{
        logout:function (){
            this.$store.dispatch('logout');
        }
    },
    mounted:function (){

        this.$store.commit('setState',{attr:'footerindex',field:2});
    }
}
</script>

<style>

</style>
