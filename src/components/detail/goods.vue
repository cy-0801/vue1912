<template>
    <div>
        <div class="banner">
            <div class="swiper-container" ref="swiper-container1">
                <div class="swiper-wrapper">
                    <div
                        class="photo swiper-slide"
                        v-for="(item,index) in goodsDetail.images"
                        :key="index"
                    >
                        <img :src="item" alt />
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
            </div>
        </div>
        <!-- ------------------------------------- -->
        <div class="content">
            <div class="title">{{goodsDetail.title}}</div>
            <div class="price">¥{{goodsDetail.price}}</div>
            <div class="num">
                <div>快递:{{goodsDetail.freight}}元</div>
                <div>月销量{{goodsDetail.sales}}件</div>
            </div>
        </div>
        <div class="pingjia">
            <div v-if="comment.length">
                <div class="pingjia_font">商品评价({{comment.length}})</div>
                <ul>
                    <li class="liList" v-for="(item,index) in comment" :key="index">
                        <div>
                            <img :src="item.head" alt />
                            <div>{{item.nickname}}</div>
                        </div>
                        <div class="aaa">{{item.content}}</div>
                        <div class="time">{{item.times}}</div>
                    </li>
                </ul>
            </div>
            <div v-else >
                <div class="pingjia_font">商品评价({{comment.length}})</div>
                <div class="nodata">{{nodata}}</div>
            </div>
        </div>
        <div class="jump_assess_dad">
            <router-link class="jump_assess" :to=this.path>查看更多评价</router-link>
        </div>
        <div class="kong"></div>
        <div class="mask123" v-show=mask0 @touchmove.prevent></div>
        <div>
            <div class="btns">
                <div class="btns_left">收藏</div>
                <div class="btns_right" @click="addCart()">加入购物车</div>
            </div>
            <div :class="['mask',movePanel]">
                <div class="goods-info">
                    <div class="imgsize">
                        <img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt />
                    </div>
                    <div class="goods-detail">
                        <div class="goods-title">{{goodsDetail.title}}</div>
                        <div class="goods-right">
                            <div class="goods-price">￥{{goodsDetail.price}}</div>
                            <div class="goods-num">商品编号:{{goodsDetail.gid}}</div>
                        </div>
                    </div>
                    <div class="del">
                        <div class="spot"></div>
                        <div class="line"></div>
                        <div class="close" @click="close()"></div>
                    </div>
                </div>
                <div class="goods-style">
                    <div class="name" v-for="(item,index) in this.list" :key="index">
                        <div class="one">{{item.title}}</div>
                        <div class="four">
                            <div v-for="(item2,index2) in item.values" :key="index2"
                                @click="selsect(index,index2)"
                                :class="{aaa:true,active:item2.checked}"
                            >{{item2.value}}</div>
                        </div>
                    </div>
                </div>
                <div class="goods-buyNum">
                    <div>购买数量</div>
                    <div>
                        <div class="type" @click="handleDel()">-</div>
                        <div class="shuru">
                            <input type="text" v-model="value" @input="handleChange($event)"/>
                        </div>
                        <div class="type" @click="handleAdd()">+</div>
                    </div>
                </div>
                <div class="yes" @click="tijiao()">确认</div>
            </div>
        </div>
    </div>
</template>

<script>
import { goodsdetail, comment ,goodsSize} from "@api";
import {mapMutations} from "vuex"
import Vue from "vue"
export default {
    name: "Goods",
    data() {
        return {
            flag: false,
            movePanel: "down",
            goodsDetail: {},
            comment: [],
            nodata: "",
            list:[],
            path:"/detail/assess?gid="+this.$route.query.gid,
            value:1,
            mask0:false,
        };
    },
    methods: {
        ...mapMutations({
            addList:"goods/addList"
        }),
        addCart() {
            this.mask0 = true
            this.movePanel = "up";
        },
        close() {
            this.mask0 = false
            this.movePanel = "down";
        },
        selsect(index,index2){ 
            for(var i=0;i<this.list[index].values.length;i++){
                // this.$set(this.list[index].values[i],'checked',false);
                this.list[index].values[i].checked = false;
                // Vue.set(this.list[index].values[i],checked,false)
            }
            this.list[index].values[index2].checked = true;
            // Vue.set(this.list[index].values[index2],checked,true)
            // this.$set(this.list[index].values[i],'checked',true);
            this.$forceUpdate(); 
        },
        handleAdd(){
           this.value++
        },
        handleDel(){
            if(this.value>1){
                this.value--;
            }else{
                this.value=1;
            }
        },
        handleChange(e){
            this.value = parseInt(e.target.value.replace(/\D/g,""));
            console.log(e.target.value,"输入的触发函数")
        },
        tijiao(){
            // 颜色 尺寸 
            //价格 gid title img 快递费 数量
            let obj = {};
            obj.title = this.goodsDetail.title;
            obj.price = this.goodsDetail.price;
            obj.gid = this.goodsDetail.gid;
            obj.freight = this.goodsDetail.freight;
            obj.image = this.goodsDetail.images[0];
            obj.mounts = this.value;
            var info = {};
            for(var i=0;i<this.list.length;i++){
                for(var j=0;j<this.list[i].values.length;j++){
                    if(this.list[i].values[j].checked == true){
                        // console.log(this.list[i].title)
                        // console.log(this.list[i].values[j].value)
                        if(i == 0){
                            info.color = this.list[i].values[j].value;
                        }else{
                            info.size = this.list[i].values[j].value;
                        }    
                    }
                }
            }
            obj.info = info;
            this.addList(obj);
            this.close();
            alert("已添加到购物车");
        }
    },
    async created() {
        
        let data = await goodsdetail(this.$route.query.gid);
        if (data.code == "200") {
            this.goodsDetail = data.data;
        }
        this.$nextTick(() => {
            new Swiper(this.$refs["swiper-container1"], {
                loop: true, // 循环模式选项
                autoplay: {
                    //可选选项，自动滑动
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                }
            });
        });
        let data0 = await comment(this.$route.query.gid);
        if (data0.code == "200") {
            this.comment = data0.data;
        } else {
            this.nodata = data0.data;
        }

        let sizedata = await goodsSize(this.$route.query.gid);
        
        if(sizedata.code == "200"){
            this.list = sizedata.data;
            for(var i=0;i<this.list.length;i++){
                this.list[i].values.forEach((item)=>{
                    item.checked = false
                })
            }
        }
    }
};
</script>

<style scoped>
.mask123{
    width:100%;height:13.34rem;background:rgba(0,0,0,.3);
    position: absolute;z-index:10;top:0;left:0;
}
.banner {
    width: 100%;
    height: 7.6rem;
}
.banner .swiper-container {
    width: 100%;
    height: 100%;
}
.banner .swiper-container .swiper-wrapper {
    width: 100%;
    height: 100%;
}
.photo {
    width: 100%;
    height: 100%;
}
.photo img {
    width: 100%;
    height: 100%;
}
.content {
    width: 100%;
    height: 3rem;
    padding: 0.3rem;
    background: #fff;
}
.content .title {
    font-size: 0.3rem;
}
.content .price {
    font-size: 0.4rem;
    margin-top: 0.2rem;
    color: red;
}
.content .num {
    font-size: 0.3rem;
    display: flex;
    margin-top: 0.2rem;
    color: #969696;
    justify-content: space-between;
}
.pingjia {
    width: 100%;
    margin-top: 1rem;
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
.nodata{
    font-size:.4rem;
    color:#48Ef94;
    width:100%;height:.8rem;
    display:flex;justify-content: center;align-items: center;
}
.jump_assess_dad {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
}
.jump_assess {
    width: 2.6rem;
    height: 0.6rem;
    border: 2px solid #c33;
    border-radius: 0.1rem;
    font-size: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.kong {
    width: 100%;
    height: 1.3rem;
}
.btns {
    width: 100%;
    height: 1.3rem;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
}
.btns .btns_left {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.4rem;
    color: #fff;
    background: #fcb40a;
}
.btns .btns_right {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.4rem;
    color: #fff;
    background: red;
}
.mask {
    width: 100%;
    height: 60%;
    position: fixed;
    z-index: 12;
    left: 0px;
    bottom: 0px;
    background-color: #f5f5f9;
    transition: transform 0.5s;
    -webkit-transition: transform 0.5s;
}
.mask.down {
    transform: translateY(120%);
    -webkit-transform: translateY(120%);
}
.mask.up {
    transform: translateY(0%);
    -webkit-transform: translateY(0%);
}

.goods-info {
    width: 100%;
    height: 1.5rem;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    position: relative;
    background: #fff;
}
.goods-info .imgsize {
    width: 1rem;
    height: 1rem;
    margin-left: 0.2rem;
}
.goods-info .imgsize img {
    width: 100%;
    height: 100%;
}
.goods-info .goods-detail {
    margin-left: 0.2rem;
}
.goods-info .goods-detail .goods-right {
    margin-top: 0.2rem;
    display: flex;
    justify-content: space-between;
}
.goods-info .goods-detail .goods-right .goods-price {
    color: red;
}
.goods-info .goods-detail .goods-right .goods-num {
    color: #888888;
}
.goods-info .del {
    width: 0.5rem;
    height: 1rem;
    position: absolute;
    right: 0;
    top: -0.8rem;
}
.goods-info .del .spot {
    width: 0.1rem;
    height: 0.1rem;
    position: absolute;
    z-index: 1;
    bottom: 0px;
    left: 0.2rem;
    background-color: #000000;
    border-radius: 100%;
}
.goods-info .del .line {
    width: 0.05rem;
    height: 0.7rem;
    position: absolute;
    z-index: 1;
    bottom: 0.11rem;
    left: 0.23rem;
    background-color: #fff;
}
.goods-info .del .close {
    width: 0.4rem;
    height: 0.4rem;
    background-image: url("../../assets/images/home/goods/x.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    left: 0.07rem;
    top: 0rem;
    z-index: 1;
}
.goods-style {
    width: 100%;
    height: auto;
    background: #fff;
}
.goods-style .name {
    width: 100%;
    height: 1.5rem;
    padding: 0.2rem;
}
.goods-style .name .one {
    width: 100%;
    height: 0.5rem;
    font-size: 0.3rem;
    margin-left: 0.22rem;
    margin-bottom: 0.1rem;
}
/* ------------------------------------------------------------------------------------------------------ */
.goods-style .name .four {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.goods-style .name .four .aaa {
    width: 0.8rem;
    height: 100%;
    border-radius: 0.16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.2rem;
    background: #efefef;
}
.goods-style .name .four .active{
    background: #FDA208;
    color: #FFFFFF;
}
.goods-buyNum {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 0.4rem;
    align-items: center;
}
.goods-buyNum div:nth-child(1) {
    font-size: 0.3rem;
}
.goods-buyNum div:nth-child(2) {
    display: flex;
    width: 3rem;
}
.goods-buyNum div:nth-child(2) .shuru {
    width: 1.8rem;
    height: 0.6rem;
}
.goods-buyNum div:nth-child(2) .shuru input {
    width: 100%;
    height: 100%;
    font-size: 0.3rem;
    text-align: center;
}
.goods-buyNum div:nth-child(2) .type {
    width: 0.6rem;
    height: 0.6rem;
    border: 1px solid #000;
    font-size: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.yes {
    width: 100%;
    height: 1rem;
    background: red;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.38rem;
    color: #fff;
}
</style>