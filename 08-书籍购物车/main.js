const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程》',
                date: '2008-10',
                price: 39.00,
                count: 1
            }
        ]
    },
    methods: {
        decrement(index) {
            this.books[index].count--;

        },
        increment(index){
            this.books[index].count++;
        },
        removeHandle(index){
             this.books.splice(index,1)
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2);
        }
    },
    computed:{
        totalPrice(){
            //方式一
            // let totalPrice = 0;
            // for (let i = 0; i <this.books.length; i++) {
            //     totalPrice += this.books[i].price*this.books[i].count;
            // }
            // return totalPrice;
            //方式二
            // let totalPrice = 0;
            // for (let i in this.books){
            //     totalPrice += this.books[i].price*this.books[i].count;
            // }
            // return totalPrice;
            //方式三
            // let totalPrice = 0;
            // for (let book of this.books){
            //     totalPrice += book.price*book.count;
            // }
            // return totalPrice;

            return this.books.reduce(function (pre,book) {
                return pre+book.price*book.count;
            },0)
        }
    }
})

const nums=[10,20,30,11,1111,2222,40]

let total = nums.filter(n => n < 100).map(n => n * 2).reduce((preValue , n) => preValue + n );
console.log(total)

let total1 = nums.filter(function (n) {
    return n<100
}).map(function (n) {
    return n*2

}).reduce(function (preValue,n) {
    return preValue+n;

},0)
console.log(total1);

//找出小于100的数
let newNums = nums.filter(function(n){
    return n<100
})
// console.log(newNums);
//将小于100的数乘以2
let new2Nums = newNums.map(function (n) {
    return n*2;
})
// console.log(new2Nums);

//将数组中的所有元素相加
//reduce作用，对数组中所有的内容进行汇总
let total2 = new2Nums.reduce(function(preValue,n){
    return preValue+n;
},0)
console.log(total2);

