<template>
    <div class="task">
        <div class="tasktop">
            {{this.tasktoptext}}
        </div>
        <div class="tasklist">

        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            tasktoptext: "今天",
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
