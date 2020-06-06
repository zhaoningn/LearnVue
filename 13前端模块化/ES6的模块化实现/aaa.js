var name = '小明'
var age = 5

function sum(num1,num2) {
    return num1 + num2;
}

//导出方式一
export {
    name, age
}

//导出方式二
export var sex = '男'

//导出函数、类
export function mul(num1,num2) {
    return num1 + num2;
}

export class Person {
    run(){
        console.log('在跑')
    }
}

//export default 只能有一个
//用此方法时，引入可以随便起名字
const address = '黑龙江省'
export default address;