<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <Cpn></Cpn>
    </div>
</template>
<script>
    import Cpn from './Cpn.vue'
    export default {
        name: "App",
        components:{
          Cpn
        },
        data(){
            return {
                message: 'Hello zhaoning'
            }
        }
    }
</script>

<style scoped>
    .title{
        color: pink;
    }
</style>