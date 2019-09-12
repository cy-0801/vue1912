<template>
    <div>
        <div class="header">
            <div class="back" @click="back()"><img src="../../assets/images/home/goods/back.png" alt=""></div>
            <div class="search">
                <input type="text" placeholder="请输入宝贝名称">
                <div>
                    <img src="../../assets/images/common/search_icon.png" alt="">
                </div>
            </div>
        </div>
        <div class="center">
            <div class="RecentSearch">
                <div class="RecentSearch-top">
                    <div>最近搜索</div>
                    <div><img src="../../assets/images/common/bin.png" alt=""></div>
                </div>
                <ul class="RecentSearch-bottom">
                    <li>电脑</li>
                    <li>裤</li>
                    <li>裙装</li>
                    <li>羽绒服</li>
                    <li>裙装</li>
                </ul>
            </div>
            <div class="hotSearch">
                <div class="RecentSearch-top">热门搜索</div>
                <ul class="RecentSearch-bottom">
                    <li v-for="(item,index) in list" 
                        :key="index"
                        @click="handlerSearch(item)"
                    >{{item.title}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {hotSearch,goodsSearch} from "@api"
export default {
    name: "SearchOne",
    data() {
        return {
            list:[]
        };
    },
    async created(){
        let data = await hotSearch();
        if(data.code == "200"){
            this.list = data.data;
        }

        let data0 = await goodsSearch("连衣裙");
        console.log(data0,"搜索的结果")
    },
    methods:{
        handlerSearch(item){
            console.log(item.title)
        },
        back(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>

.header{
    width:100%;height:1rem;
    border-bottom:1px solid #ccc;
    display:flex;
    justify-content:flex-start;align-items: center;
}
.back{
    width:1rem;height:100%;
    margin-right:.2rem;
}
.back img{
    width:100%;height:100%;
}
.search {
    width:6rem;height:100%;
    display: flex;
    align-items: center;
}
.search input{
    width:80%;height:80%;font-size:.3rem;
    text-indent: .2rem;border:1px solid #ccc;outline: none;
    border-radius: .2rem;
}
.search div{
    width:20%;height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
}
.search div img{
    width:60%;height:60%;
}
.center{
    width:100%;padding:.2rem .2rem 0;
}
.RecentSearch{
    width:100%;
}
.RecentSearch-top{
    width:100%;height:.8rem;font-size:.3rem;
    display:flex;
    justify-content: space-between;align-items: center;
}
.RecentSearch-top div:nth-child(2){
    width:1rem;height:100%;
    display:flex;justify-content: center;align-items: center;
}
.RecentSearch-top div:nth-child(2) img{
    width:50%;height:50%;
}
.RecentSearch-bottom{
    width:100%;
    display:flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.RecentSearch-bottom li{
    width:2rem;height:.5rem;
    margin-bottom:.2rem;display: flex;
    justify-content: center;align-items: center;
    margin-right:.2rem;border:1px solid #ccc;border-radius: .2rem;
}
</style>