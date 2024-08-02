import Mock from "mockjs"
import homeApi from "./mockData/home.js"
import userApi from "./mockData/user.js"
import menuApi from "./mockData/permission.js"
Mock.mock(/api\/home\/getTableData/,"get",homeApi.getTableData)
Mock.mock(/api\/home\/getCountData/,"get",homeApi.getCountData)
Mock.mock(/api\/home\/getChartData/,"get",homeApi.getChartData)
Mock.mock(/api\/home\/getUserData/,"get",userApi.getUserList)
Mock.mock(/api\/home\/deleteUser/,"get",userApi.deleteUser)
Mock.mock(/api\/user\/addUser/,"post", userApi.createUser)
Mock.mock(/api\/user\/editUser/, "post",userApi.updateUser)
Mock.mock(/api\/user\/editUser/, "post",userApi.updateUser)
Mock.mock(/api\/permission\/getMenu/, "post",menuApi.getMenu)
