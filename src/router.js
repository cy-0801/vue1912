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
        path:"/my",
        name:"my",
        component:()=>import("@views/my/index.vue"),
        meta:{
            flag:true
        }
    },
    {
        path:"/login",
        component:()=>import("@views/my/login.vue"),
        name:"login",
       
    },
    {
        path:'/place',
        component:()=>import("@views/my/place.vue"),
        name:"place"
    },
    {
        path:"/profile",
        component:()=>import("@views/my/profile.vue"),
        name:"profile",
       
    },
    {
        path:"/reg",
        component:()=>import("@views/my/reg.vue"),
        name:"reg",
       
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
        component:()=>import("./views/searchOne")
    }
    
  ]
})
