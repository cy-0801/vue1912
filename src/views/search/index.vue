<template>
    <div class="page">
        <div class="header">
            <div @click="handler()">
                <img src="../../assets/images/home/goods/back.png" alt />
            </div>
            <div>请输入宝贝名称</div>
        </div>
        <div class="page1">
            <div class="page1_left">
                <van-sidebar v-model="activeKey">
                    <van-sidebar-item title="潮流女装" class="aaa"/>
                    <van-sidebar-item title="潮流女装" class="aaa"/>
                    <van-sidebar-item title="潮流女装" class="aaa"/>
                    <van-sidebar-item title="潮流女装" class="aaa"/>
                    <van-sidebar-item title="潮流女装" class="aaa"/>
                    <van-sidebar-item title="潮流女装" class="aaa"/>
                    <van-sidebar-item title="潮流女装" class="aaa"/>
                    <van-sidebar-item title="潮流女装" class="aaa"/>
                    <van-sidebar-item title="潮流女装" class="aaa"/>
                    <van-sidebar-item title="潮流女装" class="aaa"/>
                    <van-sidebar-item title="潮流女装" class="aaa"/>
                    <van-sidebar-item title="潮流女装" class="aaa"/>
                    <van-sidebar-item title="潮流女装" class="aaa"/>
                    <van-sidebar-item title="潮流女装" class="aaa"/>
                    <van-sidebar-item title="潮流女装" class="aaa"/>
                    <van-sidebar-item title="潮流女装" class="aaa"/>
                    <van-sidebar-item title="潮流女装" class="aaa"/>
                    <van-sidebar-item title="标签名称" class="aaa"/>
                    <van-sidebar-item title="标签名称" class="aaa"/>
                    <van-sidebar-item title="标签名称" class="aaa"/>
                    <van-sidebar-item title="标签名称" class="aaa"/>
                    <van-sidebar-item title="标签名称" class="aaa"/>
                    <van-sidebar-item title="标签名称" class="aaa"/>
                    <van-sidebar-item title="标签名称" class="aaa"/>
                    <van-sidebar-item title="标签名称" class="aaa"/>
                    <van-sidebar-item title="标签名称" class="aaa"/>
                    <van-sidebar-item title="标签名称" class="aaa"/>
                    <van-sidebar-item title="标签名称" class="aaa"/>
                    <van-sidebar-item title="标签名称" class="aaa"/>
                    <van-sidebar-item title="标签名称" class="aaa"/>
                    <van-sidebar-item title="标签名称" class="aaa"/>
                    <van-sidebar-item title="标签名称" class="aaa"/>
                    <van-sidebar-item title="标签名称" class="aaa"/>
                    <van-sidebar-item title="标签名称" class="aaa"/>
                    <van-sidebar-item title="标签名称" class="aaa"/>
                </van-sidebar>
            </div>
            <div class="page1_right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { Sidebar, SidebarItem } from "vant";

Vue.use(Sidebar);
Vue.use(SidebarItem);

export default {
    name: "Search",
    data() {
        return {
            activeKey: 0
        };
    },
    methods: {
        handler(){
            this.$router.go(-1)
        }
    }
};
</script>

<style scoped>
.page {
    width: 100%;
    height: 100%;
    background: #eee;
}
.page1 {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding-top: 1rem;
}
.page1 .page1_left{
    width:2rem;
    height:12.3rem;
    overflow: auto;
}
.page1 .page1_right{
    height:12.3rem;
    width:5.5rem;
    overflow: auto;
}
/* 
 ------------------------------------
 */
.header {
    position: fixed;
    width: 100%;
    height: 1rem;
    top: 0;
    left: 0;
    background: #fff;
    display: flex;
    align-items: center;
    z-index: 1;
}
.header div:nth-child(1) {
    width: 1rem;
    height: 1rem;
}
.header div:nth-child(1) img {
    width: 100%;
    height: 100%;
}
.header div:nth-child(2) {
    width: 5rem;
    height: 0.78rem;
    text-indent: 0.2rem;
    font-size: 0.3rem;
    border: 2px solid #ccc;
    border-radius: 0.16rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.aaa{
    width:2rem;;height:1rem;font-size:.3rem;
    display:flex;align-items: center;justify-content: center;
}
</style>