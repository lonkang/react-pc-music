import axios from "axios";


const instance = axios.create({
  baseURL: 'http://123.207.32.32:9001/',
  timeout: 1000
});

// instance.interceptors.requese.requese(config => {
//   return config
// }, err => {
//   return err
// })

// instance.interceptors.response.use(response => {
//   return response.data
// }, err => {
//   if (err && err.response) {
//     switch (err.response.status) {
//       case 400:
//         err.message = '请求错误'
//         break
//       case 401:
//         err.message = '未授权的访问'
//         break
//       default:
//         err.message = "其他错误信息"
//     }
//   }
//   return err
// })
export default instance