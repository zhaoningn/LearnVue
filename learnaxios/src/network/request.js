import axios from 'axios'

// export function request(config,success,failure) {
//
//     //1.创建axios的实例
//     const instance = axios.create({
//         baseURL: 'http://',
//         timeout: 5000
//     })
//
//     //发送真正的网络请求
//     instance(config).then(res => {
//         // console.log(res);
//         success(res)
//     }).catch(err => {
//         // console.log(err);
//         failure(err)
//     })
// }

// export function request(config) {
//
//     //1.创建axios的实例
//     const instance = axios.create({
//         baseURL: 'http://',
//         timeout: 5000
//     })
//
//     //发送真正的网络请求
//     instance(config.baseConfig).then(res => {
//         // console.log(res);
//         config.success(res)
//     }).catch(err => {
//         // console.log(err);
//         config.failure(err)
//     })
// }

// export function request(config) {
//     return new Promise((resolve, reject) => {
//         const instance = axios.create({
//             baseURL: 'http://',
//             timeout: 5000
//         })
//         //发送真正的网络请求
//         instance(config).then(res => {
//             resolve(res)
//         }).catch(err => {
//             reject(err)
//         })
//     })
// }

export function request(config) {
    //1、创建axios的实例
    const instance = axios.create({
        baseURL: 'http://',
        timeout: 5000
    })

    //2、axios的拦截器
    //request拦截请求
    instance.interceptors.request.use(config => {
        //请求前拦截
        console.log(config);
        //1、比如config中的一些信息不符合服务器的要求

        //2、比如每次发送网络请求时，都希望在界面中显示一个请求的图标

        //3、某些网络请求（比如登录（token）），必须携带一些特殊的信息
        return config
    }, error => {
        //失败
        console.log(error);
    })
    //response响应拦截
    instance.interceptors.response.use(res => {
        //结果
        console.log(res);
        return res.data
    }, error => {
        //失败
        console.log(error);
    })


    //3、发送真正的网络请求
    //instance(config)就是Promise
    return instance(config)
}