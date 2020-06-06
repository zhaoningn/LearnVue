<template>
    <div>
        <h2>{{$store.state.counter}}</h2>
        <h2>{{$store.getters.powerCounter}}</h2>
        <p>{{$store.getters.moreStu}}</p>
    </div>
</template>

<script>
    export default {
        name: "HelloVuex",
    }
</script>

<style scoped>

</style>