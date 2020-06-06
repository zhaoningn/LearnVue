<template>
    <div id="app">
        <!--        <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
        <!--        <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->

        <!--        <button @click="homeclick">首页</button>-->
        <!--        <button @click="aboutclick">关于</button>-->
        <router-link to="/home">首页</router-link>
        <router-link to="/about">关于</router-link>
        <!--        <router-link :to="'/user/'+userId">用户</router-link>-->
        <!--        <router-link :to="{path: '/profile',query: {name:'zhaoning',age:20,height:1.83}}">档案</router-link>-->

        <button @click="userClick">用户</button>
        <button @click="profileClick">档案</button>

        <!--        使得组件不会重复创建-->
        <keep-alive exclude="Profile,User">
            <router-view/>
        </keep-alive>
    </div>
</template>
<script>
    export default {
        name: 'App',
        data() {
            return {
                userId: 'lisi'
            }
        },
        methods: {
            // homeclick(){
            //     //通过代码的方式修改路由
            //     // this.$router.push('/home');
            //     this.$router.replace('/home');
            // },
            // aboutclick(){
            //     //通过代码的方式修改路由
            //     // this.$router.push('/about');
            //     this.$router.replace('/about');
            // }
            userClick() {
                this.$router.push('/user/' + this.userId)
            },
            profileClick() {
                this.$router.push({
                    path: '/profile',
                    query: {
                        name: 'kobe',
                        age: 19,
                        height: 1.88
                    }
                })
            }
        }
    }
</script>

<style>
</style>
