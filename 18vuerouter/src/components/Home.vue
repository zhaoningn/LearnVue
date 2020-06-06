<template>
    <div>
        <h2>我是首页</h2>
        <p>我是内容111</p>

        <router-link to="/home/news">新闻</router-link>
        <router-link to="/home/messages">消息</router-link>

        <keep-alive>
            <router-view/>
        </keep-alive>

    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                path: '/home/news'
            }
        },
        //活跃时调用，只有该组件使用了keep-alive时，这两个函数才是有效的
        activated() {
            this.$router.push(this.path)
        },
        //不活跃时候调用，
        deactivated() {

        },
        beforeRouteLeave(to, from, next) {
            console.log(this.$route.path);
            this.path = this.$route.path;
            next()
        }
    }

</script>

<style scoped>

</style>