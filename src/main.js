import { createApp,watch } from 'vue'
import './assets/sass/reset.scss'
import App from './App.vue'
import router from './router' 
import {createPinia}from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import api from "./api/api.js"
import "./api/mock.js"

import {useAllDataStore} from './stores/index.js'
function isRoute(to){
    let res = router.getRoutes();
    let resFil = res.filter((item)=> item.path === to.path)
    return resFil.length > 0;
}
router.beforeEach((to,from)=>{
    if(to.path !== "/login" && !store.$state.token){
        return {name:"Login"}
    }
    // if(!isRoute(to)){
    //     return '111'
    // }
})
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router).mount('#app')
const store = useAllDataStore()
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
 app.config.globalProperties.$api = api;