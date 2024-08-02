import request from './request.js'


export default {
    getTableData(){
        return request({
            url:"/home/getTableData",
            method:'get',
        })
    },
    getCountData(){
        return request({
            url:"/home/getCountData",
            method:'get',
        })
    },
    getChartData(){
        return request({
            url:"/home/getChartData",
            method:'get',
        })
    },
    getUserData(data){
        return request({
            url:"/home/getUserData",
            method:'get',
            data
        })
    },
    deleteUser(data){
        return request({
            url:"/home/deleteUser",
            method:'get',
            data
        })
    },
    addUser(params) {
        return request({
          url: '/user/addUser',
          method: 'post',
          data: params
        })
      },
    editUser(params) {
        return request({
          url: '/user/editUser',
          method: 'post',
          data: params
        })
    },
    getMenu(params){
        return request({
            url:"/permission/getMenu",
            method:"post",
            data:params,
        })
    }
}