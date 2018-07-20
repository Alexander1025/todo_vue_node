<template>
    <div class="app full-height">

        <h1>{{ message }}</h1>
    </div>
</template>

<script>
export default {
    data () {
        return {
            message: ''
        }
    }
}
</script>

<style>
html {
    height: 100%;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>
