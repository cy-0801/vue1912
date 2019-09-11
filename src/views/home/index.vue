<template>
    <div class="big" ref="aaa">
        <div class="header">
            <div class="header_left" @click="handler()"></div>
            <div class="header_center">
                <div class="header_center_left"></div>
                <div class="header_center_right">输入喜欢的宝贝名称</div>
            </div>
            <div class="header_right">登录</div>
        </div>

        <!-- 轮播图 -->
        <div class="banner">
            <div class="swiper-container" ref="swiper-container">
                <div class="swiper-wrapper">
                    <div
                        class="swiper-slide"
                        v-for="(item,index) in swiperdata ? swiperdata:'' "
                        :key="index"
                    >
                        <img :src="item.image" />
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
            </div>
        </div>
        <!-- 分类图标 -->
        <div class="feilei">
            <ul>
                <router-link to="/search" tag="li">
                    <img src="//vueshop.glbuys.com/uploadfiles/1484287695.png" alt />
                    <span>分类</span>
                </router-link>
                <router-link
                    v-for="(item,index) in navdata?navdata:''"
                    :key="index"
                    to="/search/searchDetail"
                    tag="li"
                >
                    <img :src="item.image" alt />
                    <span>{{item.title}}</span>
                </router-link>
            </ul>
        </div>
        <template v-for="(item,index) in goodsdata">
            <div class="goods" v-if="index==0 | index%2==0" :key="index">
                <div class="goodsTitle">------{{item.title}}------</div>
                <div class="goodsCenter">
                    <div class="goods_left" @click="handlerdetail(item.items[0].gid)">
                        <div class="jieshao">{{item.items[0].title}}</div>
                        <span class="dazhe">精品打折</span>
                        <span class="price">{{item.items[0].price}}</span>
                        <div class="photo">
                            <img :src="item.items[0].image" alt />
                        </div>
                    </div>
                    <div class="goods_right">
                        <div class="goods_r_top" @click="handlerdetail(item.items[1].gid)">
                            <p>{{item.items[1].title}}</p>
                            <p>品质精挑</p>
                            <div>
                                <img :src="item.items[1].image" alt />
                            </div>
                        </div>
                        <div class="goods_r_bottom" @click="handlerdetail(item.items[2].gid)">
                            <p>{{item.items[2].title}}</p>
                            <p>品质精挑</p>
                            <div>
                                <img :src="item.items[2].image" alt />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="goodsFooter">
                    <ul>
                        <li
                            class="goodsList"
                            v-for="(item2,index2) in item.items.slice(3)"
                            :key="index2"
                            @click="handlerdetail(item2.gid)"
                        >
                            <p>{{item2.title}}</p>
                            <div>
                                <img :src="item2.image" alt />
                            </div>
                            <p>¥{{item2.price}}</p>
                            <del>¥{{item2.price*2}}</del>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="goods2" v-else :key="index">
                <div class="goodsTitle">------{{item.title}}------</div>
                <div class="goods2_center">
                    <div class="goods2_center_left" @click="handlerdetail(item.items[0].gid)">
                        <p>{{item.items[0].title}}</p>
                        <p>火爆开售</p>
                        <div>
                            <img :src="item.items[0].image" alt />
                        </div>
                    </div>
                    <div class="goods2_center_right" @click="handlerdetail(item.items[1].gid)">
                        <p>{{item.items[1].title}}</p>
                        <p>火爆开售</p>
                        <div>
                            <img :src="item.items[1].image" alt />
                        </div>
                    </div>
                </div>
                <div class="goods2_bottom">
                    <ul>
                        <li
                            class="goods2_list"
                            v-for="(item2,index2) in item.items.slice(2)"
                            :key="index2"
                            @click="handlerdetail(item2.gid)"
                        >
                            <p>{{item2.title}}</p>
                            <div>
                                <img :src="item2.image" alt />
                            </div>
                            <p>¥{{item2.price}}</p>
                            <del>¥{{item2.price*2}}</del>
                        </li>
                    </ul>
                </div>
            </div>
        </template>

        <div class="foryou">
            <p>-----为您推荐-----</p>
            <ul>
                <li
                    v-for="(item,index) in tuijiandata"
                    :key="index"
                    @click="handlerdetail(item.gid)"
                >
                    <div>
                        <img :src="item.image" alt />
                    </div>
                    <p>{{item.title}}</p>
                    <p>
                        ¥
                        <span>{{item.price}}</span>
                    </p>
                </li>
            </ul>
        </div>
        <div class="kong"></div>
    </div>
</template>

<script>
import { homelunboApi, homeNav, getGoods, tuijian, } from "@api";

export default {
    name: "home",
    data() {
        return {
            swiperdata: JSON.parse(sessionStorage.getItem("swiperdata")) || [],
            navdata: JSON.parse(sessionStorage.getItem("navdata")) || [],
            goodsdata: JSON.parse(sessionStorage.getItem("goodsdata")) || [],
            tuijiandata: JSON.parse(sessionStorage.getItem("tuijiandata")) || []
        };
    },
    async created() {
        this.getLunbo();
        this.homeNav();
        this.getGoods();
        this.gettuijian();
    },
    methods: {
        handler() {
            this.$router.push("/search/searchDetail?cid=492");
        },
        handlerdetail(gid) {
            this.$router.push("/detail?gid=" + gid);
        },
        async getLunbo() {

            if(!sessionStorage.getItem("swiperdata")){
                let data = await homelunboApi();
                this.swiperdata = data.data;
                sessionStorage.setItem("swiperdata",JSON.stringify(data.data));
            }
            this.$nextTick(() => {
                new Swiper(this.$refs["swiper-container"], {
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
        },
        async homeNav() {
            if(!sessionStorage.getItem("navdata")){
                let data = await homeNav();
                this.navdata = data.data;
                sessionStorage.setItem("navdata",JSON.stringify(data.data))
            }
        },
        async getGoods() {
            if(!sessionStorage.getItem("goodsdata")){
                let data = await getGoods();
                this.goodsdata = data.data;
                sessionStorage.setItem("goodsdata",JSON.stringify(data.data))
            }
        },
        async gettuijian() {
            if(!sessionStorage.getItem("tuijiandata")){
                let data = await tuijian();
                this.tuijiandata = data.data;
                sessionStorage.setItem("tuijiandata",JSON.stringify(data.data))
            }    
        }
    }
};
</script>

<style scoped>
.big {
    background: #eee;
    overflow-x: hidden;
}
.header {
    width: 100%;
    height: 1rem;
    background: linear-gradient(
        rgba(1, 1, 1, 0.2) 0%,
        rgba(255, 255, 255, 0) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 0.3rem;
    z-index: 100;
}
.header .header_left {
    width: 0.6rem;
    height: 50%;
    margin-top: 0.2rem;
    background-image: url("../../assets/images/common/class.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.header .header_center {
    width: 70%;
    height: 50%;
    margin-top: 0.2rem;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 0.1rem;
    font-size: 0.3rem;
    position: relative;
    color: #ffffff;
}
.header .header_center .header_center_left {
    width: 0.5rem;
    height: 100%;
    position: absolute;
    background: white;
    background: url("../../assets/images/common/search.png") no-repeat 100%;
}
.header .header_center .header_center_right {
    padding-left: 0.6rem;
}
.header .header_right {
    margin-top: 0.22rem;
    font-size: 0.3rem;
    color: white;
}

.banner {
    width: 100%;
    height: 3.6rem;
}
.banner .swiper-container {
    width: 100%;
    height: 100%;
}
.banner .swiper-container .swiper-wrapper {
    width: 100%;
    height: 100%;
}
.banner img {
    width: 100%;
    height: 100%;
}

/* ------------分类-------------- */
.feilei {
    width: 100%;
    height: 1.5rem;
    background: #fff;
}
.feilei ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.feilei ul li {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #7b7f82;
}

/* ------潮流女装-------------- */
.goods {
    margin-top: 0.3rem;
    width: 100%;
    height: 6rem;
    background: white;
}
.goods .goodsTitle {
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    color: red;
    border-bottom: 1px solid #ccc;
}
.goods .goodsCenter {
    width: 100%;
    height: 2.4rem;
    display: flex;
}
.goods .goodsCenter .goods_left {
    width: 50%;
    height: 100%;
    padding-left: 0.2rem;
    border-right: 2px solid #ccc;
}
.goods .goodsCenter .goods_left .jieshao {
    width: 100%;
    height: 0.3rem;
    margin-top: 0.2rem;
    font-weight: 900;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.goods .goodsCenter .goods_left .dazhe {
    color: red;
}
.goods .goodsCenter .goods_left .price {
    float: right;
    margin-right: 0.3rem;
    color: white;
    width: 0.6rem;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    border-radius: 45%;
    background: red;
}
.goods .goodsCenter .goods_left .photo {
    width: 3rem;
    height: 1.4rem;
    margin-top: 0.1rem;
    margin-left: 0.2rem;
}
.goods .goodsCenter .goods_left .photo img {
    width: 100%;
    height: 100%;
}

.goods .goodsCenter .goods_right {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
/* -----top--------- */
.goods .goodsCenter .goods_right .goods_r_top {
    width: 100%;
    height: 50%;
    position: relative;
    border-bottom: 1px solid #ccc;
}
.goods .goodsCenter .goods_right .goods_r_top p:nth-child(1) {
    width: 50%;
    height: 0.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.goods .goodsCenter .goods_right .goods_r_top p:nth-child(2) {
    width: 50%;
    height: 0.3rem;
    font-size: 0.2rem;
    margin-top: 0.1rem;
    color: #7b7f82;
}
.goods .goodsCenter .goods_right .goods_r_top div {
    width: 40%;
    height: 80%;
    position: absolute;
    top: 0.1rem;
    right: 0.2rem;
}
.goods .goodsCenter .goods_right .goods_r_top div img {
    width: 100%;
    height: 100%;
}
/* -----bottom---- */
.goods .goodsCenter .goods_right .goods_r_bottom {
    width: 100%;
    height: 50%;
    position: relative;
}
.goods .goodsCenter .goods_right .goods_r_bottom p:nth-child(1) {
    width: 50%;
    height: 0.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.goods .goodsCenter .goods_right .goods_r_bottom p:nth-child(2) {
    width: 50%;
    height: 0.3rem;
    font-size: 0.2rem;
    margin-top: 0.1rem;
    color: #7b7f82;
}
.goods .goodsCenter .goods_right .goods_r_bottom div {
    width: 40%;
    height: 80%;
    position: absolute;
    top: 0.1rem;
    right: 0.2rem;
}
.goods .goodsCenter .goods_right .goods_r_bottom div img {
    width: 100%;
    height: 100%;
}

/* ------footer---------- */
.goods .goodsFooter {
    width: 100%;
    height: 3rem;
}
.goods .goodsFooter ul {
    width: 100%;
    height: 100%;
    display: flex;
}

.goods .goodsFooter ul li {
    flex: 1;
    height: 100%;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    text-align: center;
}
.goods .goodsFooter ul li p:nth-child(1) {
    width: 100%;
    height: 0.3rem;
    font-weight: 900;
    overflow: hidden;
}
.goods .goodsFooter ul li div {
    width: 80%;
    height: 1.4rem;
    margin-left: 10%;
    margin-top: 0.2rem;
}
.goods .goodsFooter ul li div img {
    width: 100%;
    height: 100%;
}
.goods .goodsFooter ul li p:nth-child(3) {
    margin-top: 0.2rem;
}
/*  */
.goods2 {
    margin-top: 0.3rem;
    width: 100%;
    height: 6rem;
    background: white;
}
.goods2 .goodsTitle {
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    color: red;
    border-bottom: 1px solid #ccc;
}
.goods2 .goods2_center {
    width: 100%;
    height: 2.2rem;
    display: flex;
    border-bottom: 1px solid #ccc;
}
.goods2 .goods2_center .goods2_center_left {
    width: 50%;
    height: 100%;
    border-right: 1px solid #ccc;
    text-align: center;
}
.goods2 .goods2_center .goods2_center_left p:nth-child(1) {
    margin-top: 0.1rem;
    width: 100%;
    height: 0.4rem;
    font-size: 0.3rem;
    overflow: hidden;
    font-weight: 900;
}
.goods2 .goods2_center .goods2_center_left div {
    width: 40%;
    height: 60%;
    margin-left: 30%;
}
.goods2 .goods2_center .goods2_center_left div img {
    width: 100%;
    height: 100%;
}
.goods2 .goods2_center .goods2_center_right {
    width: 50%;
    height: 100%;
    text-align: center;
}
.goods2 .goods2_center .goods2_center_right p:nth-child(1) {
    margin-top: 0.1rem;
    width: 100%;
    height: 0.4rem;
    font-size: 0.3rem;
    overflow: hidden;
    font-weight: 900;
}
.goods2 .goods2_center .goods2_center_right div {
    width: 40%;
    height: 60%;
    margin-left: 30%;
}
.goods2 .goods2_center .goods2_center_right div img {
    width: 100%;
    height: 100%;
}
.goods2 .goods2_bottom {
    width: 100%;
    height: 3.2rem;
}
.goods2 .goods2_bottom ul {
    width: 100%;
    height: 100%;
    display: flex;
}
.goods2 .goods2_bottom ul li {
    flex: 1;
    height: 100%;
    border-right: 1px solid #ccc;
    text-align: center;
}
.goods2 .goods2_bottom ul li p:nth-child(1) {
    width: 100%;
    height: 0.3rem;
    font-weight: 900;
    overflow: hidden;
}

.goods2 .goods2_bottom ul li div {
    width: 80%;
    height: 1.4rem;
    margin-left: 10%;
    margin-top: 0.2rem;
}
.goods2 .goods2_bottom ul li div img {
    width: 100%;
    height: 100%;
}
.goods2 .goods2_bottom ul li p:nth-child(3) {
    margin-top: 0.2rem;
}

/* 为您推荐 */
.foryou {
    width: 100%;
    margin-top: 0.2rem;
}
.foryou p:nth-child(1) {
    width: 100%;
    height: 0.6rem;
    text-align: center;
    font-weight: 900;
}
.foryou ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-left: 2.2%;
}
.foryou ul li {
    margin-right: 5%;
    margin-top: 0.2rem;
    background: white;
    width: 45%;
    height: 3.5rem;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}
.foryou ul li div {
    width: 80%;
    height: 2.3rem;
    margin-left: 10%;
}
.foryou ul li div img {
    width: 100%;
    height: 100%;
}
.foryou ul li p:nth-child(2) {
    margin: 0.1rem 0;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.foryou ul li p:nth-child(3) {
    color: red;
}
.kong {
    width: 100%;
    height: 1rem;
}
</style>