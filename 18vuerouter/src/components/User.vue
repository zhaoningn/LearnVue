<template>
    <div>
        <h2>我是用户界面</h2>
        <p>我是用户信息，呵呵呵</p>
        <h2>{{userId}}</h2>
    </div>
</template>

<script>
    export default {
        name: "User",
        computed: {
            userId() {
                //和传过来的参数名保持一致
                return this.$route.params.userId
            }
        }
    }
</script>

<style scoped>

</style>