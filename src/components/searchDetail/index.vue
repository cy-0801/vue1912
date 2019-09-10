<template>
<Cy-scroll>
    <div class="a">
        <ul class="block">
            <li class="block_li" v-for="(item,index) in rightList" :key="index">
                <div class="title">{{item.title}}</div>
                <div class="bg_block">
                    <ul>
                        <li v-for="(item2,index2) in item.goods" :key="index2">
                            <div><img :src="item2.image" alt=""></div>
                            <div class="item-title">{{item2.title}}</div>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    </Cy-scroll>
</template>

<script>
import {rightmenu} from "@api"
export default {
    name:"SearchDetail",
    data(){
        return {
            rightList:[]
        }
    },
    async created(){
        let data = await rightmenu(this.$route.query.cid);
        if(data.code == "200"){
            this.rightList = data.data;
        }
    },
    async updated(){
        let data = await rightmenu(this.$route.query.cid);
        if(data.code == "200"){
            this.rightList = data.data;
        }
    }
}
</script>

<style scoped>
    
    .a{
        width:5.5rem;
        height:auto;
        left:2rem;padding:0 .2rem;
    }
    .block{
        width:100%;display:flex;
        flex-wrap: wrap;
    }
    .block_li{
        width:100%;
    }
    .title{
        font-size:.3rem;
        margin:.2rem 0 ;
    }
    .bg_block{
        background:#fff;
    }
    .bg_block ul{
        width:100%;
        display: flex;
        flex-wrap: wrap;
    }
    .bg_block ul li{
        width:30%;
        height:2rem;margin-right:.17rem;
        display: flex;flex-direction: column;justify-content: space-around;
    }
    .bg_block ul li div:nth-child(1){
        width:100%;
        height:1.5rem;
        
    }
    .bg_block ul li div:nth-child(2){
        width:100%;
        text-align: center;
        height:.3rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .bg_block ul li div:nth-child(1) img{
        width:100%;height:100%;
    }
    .item-title{
        
    }
</style>