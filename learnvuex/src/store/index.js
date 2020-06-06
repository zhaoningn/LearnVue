import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const moduleA = {
    state: {
        name: 'hello'
    },
    mutations:{
        updateName(state,payload){
            state.name = payload
        }
    },
    actions:{},
    getters: {
        fullname(state){
            return state.name +'111'
        },
        //引用store中的state数据
        fullname2(state,getters,rootState){
            return getters.fullname + rootState.counter
        }
    }
}




const store = new Vuex.Store({
    //共享状态 状态信息
    state: {
        counter: 1000,
        students: [
            {id: 123, name: 'zhaoning', age: 19},
            {id: 124, name: 'zhaoning', age: 22},
            {id: 125, name: 'zhaoning', age: 23},
            {id: 126, name: 'zhaoning', age: 24}
        ],
        info: {
            name: '赵凝',
            age: 20
        }
    },
    //方法
    mutations: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        incrementCount(state, count) {
            state.counter += count

        },
        addStudent(state, stu) {
            state.students.push(stu)
        },
        updateInfo(state) {
            state.info.name = 'zhaoxiquan'
        }
    },
    actions: {
        //context：上下文 相当于store
        // aUpdateInfo(context,payload){
        //     setTimeout(() => {
        //         context.commit('updateInfo')
        //         console.log(payload.message);
        //         payload.success();
        //     },1000)
        // }
        aUpdateInfo(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('updateInfo')
                    console.log(payload);
                    resolve('1111')
                }, 1000)
            })
        }
    },
    //相当计算属性
    getters: {
        powerCounter(state) {
            return state.counter * state.counter
        },
        moreStu(state) {
            return state.students.filter(s => s.age > 20)
        },
        moreStuLength(state, getters) {
            return getters.moreStu.length
        },
        //接收参数
        moreAgeStu(state) {
            // return function(age){
            //     return state.students.filter(s => s.age > age)
            // }
            return age => {
                return state.students.filter(s => s.age > age)
            }
        }

    },
    modules: {
        a: moduleA
    }
})

// 3.导出store
export default store