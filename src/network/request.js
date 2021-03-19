import axios from 'axios'

export function request(config) {
  //创建对象实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //创建请求拦截
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    return err;
  })
  //创建相应拦截
  instance.interceptors.response.use(res => {
    return res;
  }, error => {
    return error;
  })
  //真正进行数据请求
  return instance(config)
}
