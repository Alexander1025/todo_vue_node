<template>
    <div class="indexwrap">
        <headerCommon></headerCommon>
        <colorPicker v-model="color" defaultColor="#ff0000"></colorPicker>
        <footerCommon></footerCommon>
    </div>
</template>

<script>
import headerCommon from './../../components/Header.vue';
import footerCommon from './../../components/footer.vue';

import colorPicker from './../../components/colorpicker.vue'

export default {
    data () {
        return {
            message: '',
            color:''
        }
    },
    components:{
        headerCommon,
        footerCommon,
        colorPicker
    },
    mounted:function (){


        this.$store.commit('setState',{attr:'footerindex',field:0});
    }
}
</script>

<style>

</style>
