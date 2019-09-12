import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/home"
    },
    {
        path:"/home",
        name:"home",
        component:()=>import("./views/home"),
        meta:{
            flag:true
        }
    },
    {
        path:"/shoppingCar",
        name:"shoppingCar",
        component:()=>import("./views/shoppingCar"),
        meta:{
            flag:true
        }
    },
    {
        path:"/mine",
        name:"mine",
        component:()=>import("./views/mine"),
        meta:{
            flag:true
        }
    },
    {
        path:"/search",
        name:"search",
        component:()=>import("./views/search"),
        redirect:"/search/searchDetail",
        children:[
            {
                path:"/search/searchDetail",
                name:"searchDetail",
                component:()=>import("./components/searchDetail")
            }
        ],
        meta:{
            flag:false
        }
    },
    {
        path:"/detail",
        name:"detail",
        component:()=>import("./views/detail"),
        meta:{
            flag:false
        },
        redirect:"/detail/goods",
        children:[
            {
                path:"/detail/goods",
                name:"goods",
                component:()=>import("./components/detail/goods.vue")
            },
            {
                path:"/detail/detail",
                name:"detail0",
                component:()=>import("./components/detail/detail.vue")
            },
            {
                path:"/detail/assess",
                name:"assess",
                component:()=>import("./components/detail/assess.vue")
            }
        ]
    },
    {
        path:"/searchOne",
        name:"searchOne",
        component:()=>import("./views/searchOne"),
        meta:{
            flag:true
        }
    }
    
  ]
})
