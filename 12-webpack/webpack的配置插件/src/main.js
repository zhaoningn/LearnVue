//使用commonjs模块化规范
const {add, mul} = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

//使用ES6的模块化规范
import {name, age} from "./js/info";

console.log(name);
console.log(age);


//使用Vue进行开发
import Vue from 'vue'

import App from './vue/App.vue'

new Vue({
    el: '#app',
    template:'<App/>',
    components: {
        App
    }
})