<template>
    <div id="app">
        <h2>=====App内容:modules中的内容=====</h2>
        <h2>{{$store.state.a.name}}</h2>
        <h2>{{$store.getters.fullname}}</h2>
        <button @click="updateName">修改名字</button>

        <h2>=====App内容=====</h2>
        <h2>{{$store.state.counter}}</h2>

        <h2>{{$store.state.info}}</h2>
        <button @click="updateInfo">修改信息</button>

        <button @click="addition">+</button>
        <button @click="subtraction">-</button>
        <button @click="addCount(5)">+5</button>
        <button @click="addCount(10)">+10</button>
        <button @click="addStudent()">添加学生</button>

        <h2>{{$store.getters.powerCounter}}</h2>
        <p>{{$store.getters.moreStu}}</p>
        <p>{{$store.getters.moreAgeStu(23)}}</p>
        <h2>=====Hello内容=====</h2>



        <hello-vuex/>
    </div>
</template>

<script>

    import HelloVuex from "./components/HelloVuex";

    export default {
        name: 'App',
        components: {
            HelloVuex
        },
        data() {
            return {
                message: '我是App组件'
            }
        },
        computed: {
            morestu() {
                return this.$store.state.students.filter(s => s.age > 20)
            }
        },
        methods: {
            addition() {
                this.$store.commit('increment')
            },
            subtraction() {
                this.$store.commit('decrement')
            },
            addCount(count) {
                //1.普通的提交风格
                this.$store.commit('incrementCount', count)

                //2.特殊的提交风格
                this.$store.commit({
                    type: "incrementCount",
                    count
                })
            },
            addStudent() {
                const stu = {id: 119, name: 'alan', age: 30}
                this.$store.commit('addStudent', stu)
            },
            updateInfo(){
                //因为有异步操作，要经过action
                // this.$store.dispatch('aUpdateInfo')
                // this.$store.dispatch('aUpdateInfo',{
                //     message: '我是携带的信息',
                //     success(){
                //         console.log('里面已经完成');
                //     }
                // })
                this.$store.dispatch('aUpdateInfo','我是携带的信息').then(res => {
                    console.log('里面完成了提交');
                    console.log(res);
                })
            },
            updateName(){
                this.$store.commit('updateName','ning')
            }

        }
    }
</script>

<style>

</style>
