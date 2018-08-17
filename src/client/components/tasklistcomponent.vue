<template>
    <div class="tasklist">
        {{this.item.text}}
    </div>
</template>
<script>
export default {
    props:["item"],
    data () {
        return {

        }
    },

}
</script>
<style>
    .tasktop{
        background-color: #EDEFFB;
        line-height: 36px;
        color: #9FA5B3;
        font-size: 12px;
        padding: 0 0 0 5%;
    }
</style>
