<template>
    <div class="indexwrap">
        <headerCommon ref="headerCommon"></headerCommon>

        <div class="setting" ref="setting" :style="{ top: settingtop + 'px', height: settingheight + 'px'}">

            <router-view></router-view>

        </div>

        <footerCommon ref="footerCommon"></footerCommon>
    </div>
</template>

<script>
import headerCommon from './../../components/Header.vue';
import footerCommon from './../../components/footer.vue';

export default {
    data () {
        return {
            message: '',
            settingtop: 0,
            settingheight: 0,
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


        this.$nextTick(function () {

            this.settingtop += this.$refs.headerCommon.$el.offsetHeight;

            this.settingheight = (document.body.clientHeight || document.documentElement.clientHeight) - this.$refs.footerCommon.$el.offsetHeight - this.settingtop;

            this.$refs.setting.style.display = "block";
        })

    }
}
</script>

<style>
    .setting{
        overflow: scroll;
        display: none;
        position: fixed;
        top:0;
        left: 0;
        width: 100%;


    }
</style>
