import { defineStore } from 'pinia'

export const  useAllDataStore = defineStore('allData', {
  state:() => {
    return { 
        isCollapse: true,
        tags:[
                {
                    path:'/home',
                    name:'home',
                    label:'首页',
                    icon:'home',
                }
        ],
        currentMenu:null,
        menuList:[],
        token:"",
        routerList:[],
     }
  },
  actions: {
    selectMenu(val){
        if(val.name === "home"){
            this.currentMenu =null;
        }else{
            
            this.currentMenu = val 
            // console.log()     
            let index = this.tags.findIndex((item)=> item.name === val.name);

            index === -1 ? this.tags.push(val) : "";
        }
    },
    updateMenu(tag){
        let index =this.tags.findIndex((item) => item.name === tag.name)
        this.tags.splice(index,1)
    },
    updateMenuList(val){
        this.menuList =val;
    },
    //动态添加路由

    addMenu(router,type){
        const menu = this.menuList
        const module = import.meta.glob("../views/**/*.vue");
        const routeArr = [];
        menu.forEach((item)=>{
            if(item.children){
                item.children.forEach((val) => {
                    let url = `../views/${val.url}.vue`;
                    val.component = module[url];
                    routeArr.push(...item.children);
                })
            }else{
                let url = `../views/${item.url}.vue`;
                item.component = module[url];
                routeArr.push(item)
            }
        })
        this.routerList= [];
        let routers = router.getRoutes()
        routers.map((item) => {
            if(item.name === 'Main' || item.name ==="Login"){ 
                return ;
            }else{
                router.removeRoute(item.name)
            }
        })        
        routeArr.forEach(
            (item) => {
                this.routerList.push(router.addRoute("Main",item))
            }
        )
        // this.routerList= [];
        // let routers = router.getRoutes()
        // routers.map((item) => {
        //     if(item.name === 'main' || item.name ==="login"){ return ;}else{
        //         router.removeRoute(item.name)
        //     }

        // })

    },
    clean(){
        this.routerList.forEach((item) => {
            if(item) item()
        })
        this.$reset()
    }
  },

})