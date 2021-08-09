import axios from 'axios'
// import { message } from 'antd';
// 创建axios实例
const instance = axios.create({
    baseURL: 'http://localhost:9999', //本地服务器
    timeout: 7000,  // 超时设置
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
      //  Authorization:localStorage.getItem('token')  +'bearer'
    }
  })

  // 封装请求拦截器,在请求发送出去之前，做一些验证操作。
instance.interceptors.request.use(function (config) {
    //console.log('请求拦截器',config)
    config.headers.Authorization = localStorage.getItem('token') || ''
    return config
  }, function (error) {
      return Promise.reject(error)
  })

  //响应拦截器,在响应到达前，先进行数据过滤。
instance.interceptors.response.use(function (response){
    //if (response.status === 200) {
        if (response.data && response.status===200) {
            return response.data
        } 
        else {
           alert('网络异常，请稍后再试')
          // message.error(response.data.message);
        }
    //}
},function (error){
    return Promise.reject(error)
})

export default instance
