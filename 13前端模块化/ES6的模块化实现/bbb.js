import {name, age, sex, mul, Person} from "./aaa.js";

console.log(name);
console.log(sex);
var a = mul(1, 5);
console.log(a);
const person = new Person();
person.run();

//导入address
import addr from "./aaa.js"

console.log(addr);

//统一全部导入
import  * as aaa from  './aaa.js'

console.log(aaa.name);
console.log(aaa.sex);
console.log(aaa.sex);
console.log(aaa.sex);