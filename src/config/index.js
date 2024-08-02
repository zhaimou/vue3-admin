const env = import.meta.env.mode || "prod";
const EnvConfig = {
    development:{
        baseApi:"/api",
        mockApi:"https://apifoxmock.com/m1/4068509-0-default/api",
    },
    test:{
        baseApi:"//test.future.com/api",
        mockApi:"https://apifoxmock.com/m1/4068509-0-default/api",
    },
    prod:{
        baseApi:"/api",
        mockApi:"https://apifoxmock.com/m1/4068509-0-default/api",
    },
}
export default {
    env,
    ...EnvConfig[env],
    //mock
    mock:false,
}