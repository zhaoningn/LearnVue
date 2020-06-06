import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
})

//全局配置
// axios.defaults.baseURL = 'http://xxx.xxx.xx.xx:xxxx'
// axios.defaults.timeout = 5000
//
//
// axios({
//     url: 'http://httpbin.org/',
//     method: 'get'
// }).then(res => {
//     console.log(res);
// })
//
//
//
//
// //2.axios 发送并发请求
// axios.all([axios({
//     url: 'http://httpbin.org'
// }), axios({
//     url: 'http://httpbin.org'
// })])
//     .then(results => {
//         console.log(results);
//     })
//

//2、创建对应的axios的实例
// const instance1 = axios.create({
//     baseURL: 'http://',
//     timeout: 5000
// })
//
// instance1({
//     url: '/home/multidata'
// }).then(res => {
//     console.log(res);
// })
//
// instance1({
//     url: '/home/data',
//     params: {
//         type: 'pop',
//         page: 1
//     }
// }).then(res => {
//     console.log(res);
// })
//
// const instance2 = axios.create({
//     baseURL: 'http://',
//     timeout: 1000
// })

//3、封装request模块
import {request} from "./network/request";

// request({
//     url: '/home'
// },res => {
//     console.log(res);
// },err =>{
//     console.log(err);
// })

// request({
//     baseConfig : {
//
//     },
//     success(res){
//         console.log(res);
//     },
//     failure(err){
//         console.log(err);
//     }
//
// })

request({
    url: '/home'
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})
