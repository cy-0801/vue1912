<template>
    <div class="page">
        <div class="header" >
            <div class="back" @click=handler()>
                <img src="../../assets/images/home/goods/back.png" alt />
            </div>
            <div class="center">
                <router-link v-for="(item,index) in nav" :key="index"
                    :to="item.path"
                    tag="div"
                >{{item.name}}</router-link>
            </div>
            <div class="right_icon">
                <img src="../../assets/images/home/goods/cart.png" alt="">
                <div class="slot" v-show="list.length>0?true:false "></div>
            </div>
        </div>
        <div class="router_view">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

import {mapState} from "vuex"
export default {
    name:"detail",
    data(){
        return {
            nav:[
                {
                    path:"/detail/goods?gid="+this.$route.query.gid,
                    name:"商品"
                },
                {
                    path:"/detail/detail?gid="+this.$route.query.gid,
                    name:"详情"
                },
                {
                    path:"/detail/assess?gid="+this.$route.query.gid,
                    name:"评价"
                }
            ]
        }
    },
    methods:{
        handler(){
            this.$router.push("/home")
        }
    },
    computed:{
        ...mapState({
            list:state=>state.goods.list
        })
    }

}
</script>


<style scoped>
    .page{
        width:100%;height:100%;display:flex;
    }
    .header{
        width:100%;height:1rem;
        position: absolute;left:0;top:0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .back{
        width:1rem;height:1rem;
    }
    .back img{
        width:100%;height:100%;
    }
    .header .center{
        width:4rem;height:100%;
        display:flex;justify-content: space-between;
        align-items: center;font-size:.36rem;
    }
    .header .center div{
        height:100%;
        display: flex;
        align-items: center;
    }
    .header .right_icon{
        width:1rem;height:100%;position: relative;
        display: flex;justify-content: center;align-items: center;
    }
    .header .right_icon img{
        width:80%;height:80%;
    }
    .header .right_icon .slot{
        width:0.2rem;height:0.2rem;background:red;
        border:1px solid #ccc;
        border-radius: .1rem;
        position:absolute;
        right:.1rem;
        top:.24rem;
    }
    .router_view{
        width:100%;height:12.32rem;overflow: auto;
        position: absolute;top:1rem;left:0;
        background:#eee;
    }
    .router-link-active{
        border-bottom:2px solid #c33;
    }
</style>