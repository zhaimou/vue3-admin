import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        name:'Main',
        component:()=>import("@/views/Main.vue"),
        redirect:"/home",
        children:[
        ]

    },
    {
        path:"/login",
        name:"Login",
        component:()=>import("@/views/Login.vue")
    }
]
const router = createRouter({
    history:createWebHashHistory() ,  
    routes
})
export default router