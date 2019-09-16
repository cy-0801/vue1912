<template>
    <div class="wrapper123">
        <ul>
            <router-link v-for="(item,index) in navs" 
                :key="index"
                tag="li"
                :to="item.path"
            >
                <div class="icon" :style="item.note"></div>
                <!-- <div class="icon" v-show=!isShow  :style="item.note1"></div> -->
                <span>{{item.name}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"tabBar",
    data(){
        return {
            isShow:true,
            navs:[
                {
                    name:"首页",
                    path:"/home",
                    note: {
                        backgroundImage: "url(" + require("../../assets/home1.png") + ")",
                        backgroundRepeat: "no-repeat"
                    },
                    note1: {
                        backgroundImage: "url(" + require("../../assets/home2.png") + ")",
                        backgroundRepeat: "no-repeat"
                    }
                },
                {
                    name:"购物车",
                    path:"/shoppingCar",
                    note: {
                        backgroundImage: "url(" + require("../../assets/cart1.png") + ")",
                        backgroundRepeat: "no-repeat"
                    },
                    note1: {
                        backgroundImage: "url(" + require("../../assets/cart2.png") + ")",
                        backgroundRepeat: "no-repeat"
                    }
                },
                {
                    name:"我的",
                    path:"/my",
                    note: {
                        backgroundImage: "url(" + require("../../assets/my1.png") + ")",
                        backgroundRepeat: "no-repeat"
                    },
                    note1: {
                        backgroundImage: "url(" + require("../../assets/my2.png") + ")",
                        backgroundRepeat: "no-repeat"
                    }
                }
            ]
        }
    }
}
</script>


<style scoped>
.wrapper123{
    width:100%;height:1rem;
}
ul{
    width:100%;height:1rem;background:white;position: fixed;bottom:0;left:0;
    display: flex;justify-content: space-around;
}
ul li{
    display: flex;flex-direction: column;align-items: center;
    justify-content: center;flex:1;font-size:.3rem;
}
.icon{
    width:.6rem;height:1rem;
}
.icon img{
    width:100%;height:100%;
}
.router-link-active{
    color:red;
}
</style>