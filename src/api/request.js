import axios from "axios";
import config from '../config/index'
const service = axios.create({
    baseURL:config.baseApi,
});
const NETWORK_ERROR = '网络错误...'
service.interceptors.request.use(
    (config) => {
        return config
    },(error) => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use((res) => {
    const {code,data,msg} = res.data
    if(code===200){
        return data
    }else{
        return  Promise.reject(msg || NETWORK_ERROR)
    }
})

function request(options){
    console.log(config.env)
    options.method = options.method || "get"
    if(options.method.toLowerCase() === "get"){
        options.params = options.data
    }   
    //对mock的开关做一个处理
    let isMock = config.mock
    if(config.env !== "undefined"){
        isMock = config.env
    }
    //针对环境作处理
    if(config.env === "prod"){
        //不能用mock
        // console.log('isMock',isMock)
        service.defaults.baseURL = config.baseApi;
    }else{
        // console.log('isMock',isMock)
        service.defaults.baseURL = isMock ? config.mockApi : config.baseApi;
    }
    return service(options)
}
export default request