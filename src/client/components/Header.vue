<template>
    <div
        class="header_common"
        ref="header"

        :style=this.$store.state.theme[1]
    >
        <span>
            {{this.$store.state.datemonth}}月
        </span>
        <span>
            {{this.$store.state.datemonth}}月
        </span>
        <span
            :class="[this.$store.state.islogin ? 'islo' : 'notlogin']"
            @click="goLogin"
        >
            {{this.$store.state.username}}
        </span>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    methods:{
        goLogin:function (){
            if(!this.$store.state.islogin){
                this.$router.push({path: '/login'});
            }
        }
    },
    mounted:function (){
        let date = new Date(this.$store.state.setnowdate);
        let mon = date.getMonth();
        this.$store.commit('getMonth',mon);

        this.$store.dispatch('getUserMsg');
    }
}
</script>
<style>
    .header_common{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background-color: #617FDF;
        color: white;
        text-align: center;
        line-height: 50px;
        font-size: 18px;


        display: flex;
        flex-flow:row nowrap;
        justify-content:space-between;
        align-items:center;
    }
    .header_common span{
        flex:0 1 18%;
    }
    .notlogin{
        font-size: 16px;
        color: #e6b85c;
    }
</style>

