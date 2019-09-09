<template>
    <div class="pingjia">
        <div class="pingjia_font">商品评价({{this.list.length}})</div>
        <ul>
            <li class="liList" v-for="(item,index) in list" :key="index">
                <div>
                    <img :src="item.head" alt />
                    <div>{{item.nickname}}</div>
                </div>
                <div class="aaa">{{item.content}}</div>
                <div class="time">{{item.times}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
import {comment} from "@api"
export default {
    name: "Assess",
    data(){
        return {
            list:[]
        }
    },
    async created(){
        let data = await comment(this.$route.query.gid);
        if(data.code == "200"){
             this.list = data.data;
        }else {
            this.list = []
        }
    }
};
</script>

<style scoped>
.pingjia {
    width: 100%;
    background: #fff;
}
.pingjia .pingjia_font {
    width: 100%;
    height: 0.8rem;
    color: #969696;
    font-size: 0.38rem;
    display: flex;
    align-items: center;
    padding-left: 0.2rem;
}
.pingjia ul {
    width: 100%;
}
.pingjia ul .liList {
    padding: 0 0.2rem;
    width: 100%;
    margin-top: 0.1rem;
}
.pingjia ul .liList div:nth-child(1) {
    width: 100%;
    height: 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.pingjia ul .liList div:nth-child(1) img {
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.3rem;
}
.pingjia ul .liList .aaa {
    width: 100%;
    font-size: 0.3rem;
}
.pingjia ul .liList .time {
    width: 100%;
    margin-top: 0.2rem;
    font-size: 0.2rem;
    color: #7b7f82;
}
</style>