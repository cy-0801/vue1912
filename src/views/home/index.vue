<template>
    <div class="big">
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
            <img src="//vueshop.glbuys.com/uploadfiles/1484285334.jpg" alt="">
        </div>
        <!-- 分类图标 -->
        <div class="feilei">
            <ul>
                <li>
                    <img src="//vueshop.glbuys.com/uploadfiles/1484287695.png" alt="">
                    <span>分类</span>
                </li>
                <li>
                    <img src="//vueshop.glbuys.com/uploadfiles/1484287695.png" alt="">
                    <span>分类</span>
                </li>
                <li>
                    <img src="//vueshop.glbuys.com/uploadfiles/1484287695.png" alt="">
                    <span>分类</span>
                </li>
                <li>
                    <img src="//vueshop.glbuys.com/uploadfiles/1484287695.png" alt="">
                    <span>分类</span>
                </li>
                <li>
                    <img src="//vueshop.glbuys.com/uploadfiles/1484287695.png" alt="">
                    <span>分类</span>
                </li>
            </ul>
        </div>
        <div class="goods">
            <div class="goodsTitle">------潮流女装------</div>
            <div class="goodsCenter">
                <div class="goods_left" @click="handlerdetail()">
                    <div class="jieshao">高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
                    <span class="dazhe">精品打折</span>
                    <span class="price">12.8</span>
                    <div class="photo"><img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt=""></div>
                </div>
                <div class="goods_right">
                    <div class="goods_r_top">
                        <p>欧美尖头蝴蝶结拖鞋女夏外穿2018新款绸缎面细跟凉拖半拖鞋穆勒鞋</p>
                        <p>品质精挑</p>
                        <div>
                            <img src="//vueshop.glbuys.com/uploadfiles/1524556315.jpg" alt="">
                        </div>
                    </div>
                    <div class="goods_r_bottom">
                        <p>欧美尖头蝴蝶结拖鞋女夏外穿2018新款绸缎面细跟凉拖半拖鞋穆勒鞋</p>
                        <p>品质精挑</p>
                        <div>
                            <img src="//vueshop.glbuys.com/uploadfiles/1524556315.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="goodsFooter">
                <ul>
                    <li class="goodsList">
                        <p>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</p>
                        <div>
                            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="">
                        </div>
                        <p>¥280</p>
                        <del>¥360.00</del>
                    </li>
                    <li class="goodsList">
                        <p>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</p>
                        <div>
                            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="">
                        </div>
                        <p>¥280</p>
                        <del>¥360.00</del>
                    </li>
                    <li class="goodsList">
                        <p>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</p>
                        <div>
                            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="">
                        </div>
                        <p>¥280</p>
                        <del>¥360.00</del>
                    </li>
                    <li class="goodsList">
                        <p>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</p>
                        <div>
                            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="">
                        </div>
                        <p>¥280</p>
                        <del>¥360.00</del>
                    </li>
                </ul>
            </div>
        </div>
        <div class="goods2">
            <div class="goodsTitle">------品牌男装------</div>
            <div class="goods2_center">
                <div class="goods2_center_left">
                    <p>新款短袖男士夏季3d立体图案体恤猴子搞怪大猩猩个性t恤大码衣服</p>
                    <p>火爆开售</p>
                    <div>
                        <img src="//vueshop.glbuys.com/uploadfiles/1524568819.jpg" alt="">
                    </div>
                </div>
                <div class="goods2_center_right">
                    <p>新款短袖男士夏季3d立体图案体恤猴子搞怪大猩猩个性t恤大码衣服</p>
                    <p>火爆开售</p>
                    <div>
                        <img src="//vueshop.glbuys.com/uploadfiles/1524568819.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="goods2_bottom">
                <ul>
                    <li class="goods2_list">
                        <p>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</p>
                        <div>
                            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="">
                        </div>
                        <p>¥280</p>
                        <del>¥360.00</del>
                    </li>
                    <li class="goods2_list">
                        <p>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</p>
                        <div>
                            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="">
                        </div>
                        <p>¥280</p>
                        <del>¥360.00</del>
                    </li>
                    <li class="goods2_list">
                        <p>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</p>
                        <div>
                            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="">
                        </div>
                        <p>¥280</p>
                        <del>¥360.00</del>
                    </li>
                    <li class="goods2_list">
                        <p>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</p>
                        <div>
                            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="">
                        </div>
                        <p>¥280</p>
                        <del>¥360.00</del>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 第三个 -->
        <div class="goods">
            <div class="goodsTitle">------潮流女装------</div>
            <div class="goodsCenter">
                <div class="goods_left">
                    <div class="jieshao">高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
                    <span class="dazhe">精品打折</span>
                    <span class="price">12.8</span>
                    <div class="photo"><img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt=""></div>
                </div>
                <div class="goods_right">
                    <div class="goods_r_top">
                        <p>欧美尖头蝴蝶结拖鞋女夏外穿2018新款绸缎面细跟凉拖半拖鞋穆勒鞋</p>
                        <p>品质精挑</p>
                        <div>
                            <img src="//vueshop.glbuys.com/uploadfiles/1524556315.jpg" alt="">
                        </div>
                    </div>
                    <div class="goods_r_bottom">
                        <p>欧美尖头蝴蝶结拖鞋女夏外穿2018新款绸缎面细跟凉拖半拖鞋穆勒鞋</p>
                        <p>品质精挑</p>
                        <div>
                            <img src="//vueshop.glbuys.com/uploadfiles/1524556315.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="goodsFooter">
                <ul>
                    <li class="goodsList">
                        <p>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</p>
                        <div>
                            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="">
                        </div>
                        <p>¥280</p>
                        <del>¥360.00</del>
                    </li>
                    <li class="goodsList">
                        <p>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</p>
                        <div>
                            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="">
                        </div>
                        <p>¥280</p>
                        <del>¥360.00</del>
                    </li>
                    <li class="goodsList">
                        <p>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</p>
                        <div>
                            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="">
                        </div>
                        <p>¥280</p>
                        <del>¥360.00</del>
                    </li>
                    <li class="goodsList">
                        <p>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</p>
                        <div>
                            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="">
                        </div>
                        <p>¥280</p>
                        <del>¥360.00</del>
                    </li>
                </ul>
            </div>
        </div>
        <div class="foryou">
            <p>-----为您推荐-----</p>
            <ul>
                <li>
                    <div>
                        <img src="//vueshop.glbuys.com/uploadfiles/1484283665.jpg" alt="">
                    </div>
                    <p>ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女</p>
                    <p>$<span>399.00</span></p>
                </li>
                <li>
                    <div>
                        <img src="//vueshop.glbuys.com/uploadfiles/1484284030.jpg" alt="">
                    </div>
                    <p>ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女</p>
                    <p>$<span>399.00</span></p>
                </li>
                <li>
                    <div>
                        <img src="//vueshop.glbuys.com/uploadfiles/1484283665.jpg" alt="">
                    </div>
                    <p>ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女</p>
                    <p>$<span>399.00</span></p>
                </li>
                <li>
                    <div>
                        <img src="//vueshop.glbuys.com/uploadfiles/1484283665.jpg" alt="">
                    </div>
                    <p>ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女</p>
                    <p>$<span>399.00</span></p>
                </li>
                <li>
                    <div>
                        <img src="//vueshop.glbuys.com/uploadfiles/1484283665.jpg" alt="">
                    </div>
                    <p>ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女</p>
                    <p>$<span>399.00</span></p>
                </li>
                <li>
                    <div>
                        <img src="//vueshop.glbuys.com/uploadfiles/1484283665.jpg" alt="">
                    </div>
                    <p>ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女</p>
                    <p>$<span>399.00</span></p>
                </li>
            </ul>
        </div>
        <div class="kong"></div>
    </div>
</template>

<script>
export default {
    name: "home",
    methods:{
        handler(){
            this.$router.push("/search")
        },
        handlerdetail(){
            this.$router.push("/detail")
        }
    }
};
</script>

<style scoped>
    .big{
        background:#eee;
    }
    .header{
        width:100%;height:1rem;
        background: linear-gradient(rgba(1, 1, 1, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
        position:absolute;top:0;left:0;
        display: flex;justify-content: space-between;
        align-items: flex-start;padding:0 .3rem;
    }
    .header .header_left{
        width:.6rem;height:50%;
        margin-top:.2rem;
        background-image:url("../../assets/images/common/class.png");
        background-repeat: no-repeat;
        background-size:100% 100%;
    }
    .header .header_center{
        width:70%;height:50%;margin-top:.2rem;
        background: rgba(255,255,255,0.6);
        border-radius: 0.1rem;font-size:.3rem;position: relative;color:#FFFFFF;
    }
    .header .header_center .header_center_left{
        width:0.5rem;height:100%;position: absolute;
        background:white;background:url("../../assets/images/common/search.png") no-repeat 100%;
    }
    .header .header_center .header_center_right{
        padding-left:.6rem;
    }
    .header .header_right{
        margin-top:.22rem;font-size:.3rem;color:white;
    
    }

    .banner{
        width:100%;height:3.6rem;
    }
    .banner img{width:100%;height:100%;}


    /* ------------分类-------------- */
    .feilei{
        width:100%;height:1.5rem;background:#fff;
    }
    .feilei ul{
        width:100%;height:100%;
        display:flex;
        justify-content: space-around;
        align-items: center;
    }
    .feilei ul li {
        flex:1;height:100%;
        display:flex;flex-direction: column;
        justify-content: space-around;align-items: center;
        color:#7b7f82;
    }

    /* ------潮流女装-------------- */
    .goods {
        margin-top:.3rem;width:100%;height:6rem;background:white;
    }
    .goods .goodsTitle{
        width:100%;height:.6rem;
        line-height:.6rem;text-align: center;
        color:red;border-bottom:1px solid #ccc;
    }
    .goods .goodsCenter{
        width:100%;height:2.4rem;
        display:flex;
    }
    .goods .goodsCenter .goods_left{
        width:50%;height:100%;padding-left:.2rem;border-right:2px solid #ccc;
    }
    .goods .goodsCenter .goods_left .jieshao{
        width:100%;height:.3rem;margin-top:.2rem;font-weight:900;
        overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
    }
    .goods .goodsCenter .goods_left .dazhe{
        color:red;
    }
    .goods .goodsCenter .goods_left .price{
        float: right;margin-right:.3rem;color:white;
        width:.6rem;height:.4rem;
        line-height:.4rem;text-align: center;border-radius: 45%;
        background: red;  
    }
    .goods .goodsCenter .goods_left .photo{
        width:3rem;height:1.4rem;margin-top:.1rem;margin-left:.2rem;
    }
    .goods .goodsCenter .goods_left .photo img{
        width:100%;height:100%;
    }

    .goods .goodsCenter .goods_right{
        width:50%;height:100%;
        display:flex;flex-direction: column;
    }
    /* -----top--------- */
    .goods .goodsCenter .goods_right .goods_r_top{
        width:100%;height:50%;position: relative;border-bottom:1px solid #ccc;
    }
    .goods .goodsCenter .goods_right .goods_r_top p:nth-child(1){
        width:50%;height:.3rem;white-space: nowrap;
        overflow: hidden;text-overflow: ellipsis;
    }
    .goods .goodsCenter .goods_right .goods_r_top p:nth-child(2){
        width:50%;height:.3rem;
        font-size: .2rem;margin-top:.1rem;
        color: #7b7f82;
    }
     .goods .goodsCenter .goods_right .goods_r_top div{
         width:40%;height:80%;position:absolute;
         top:.1rem;right:.2rem;
     }
     .goods .goodsCenter .goods_right .goods_r_top div img{
         width:100%;height:100%;
     }
    /* -----bottom---- */
    .goods .goodsCenter .goods_right .goods_r_bottom{
        width:100%;height:50%;position: relative;
    }
    .goods .goodsCenter .goods_right .goods_r_bottom p:nth-child(1){
        width:50%;height:.3rem;white-space: nowrap;
        overflow: hidden;text-overflow: ellipsis;
    }
    .goods .goodsCenter .goods_right .goods_r_bottom p:nth-child(2){
        width:50%;height:.3rem;
        font-size: .2rem;margin-top:.1rem;
        color: #7b7f82;
    }
     .goods .goodsCenter .goods_right .goods_r_bottom div{
         width:40%;height:80%;position:absolute;
         top:.1rem;right:.2rem;
     }
     .goods .goodsCenter .goods_right .goods_r_bottom div img{
         width:100%;height:100%;
     }

    /* ------footer---------- */
    .goods .goodsFooter{
        width:100%;height:3rem;
    }
    .goods .goodsFooter ul{
        width:100%;height:100%;display: flex;
    }


    .goods .goodsFooter ul li{
        flex:1;
        height:100%;border-bottom:1px solid #ccc;
        border-right:1px solid #ccc;
        text-align: center;
    }
    .goods .goodsFooter ul li p:nth-child(1){
        width:100%;height:.3rem;font-weight:900;overflow: hidden;
    }
    .goods .goodsFooter ul li div{
        width:80%;height:1.4rem;
        margin-left:10%;margin-top:.2rem;
    }
    .goods .goodsFooter ul li div img{
        width:100%;height:100%;
    }
    .goods .goodsFooter ul li p:nth-child(3){
        margin-top:.2rem;
    }
    /*  */
    .goods2{
        margin-top:.3rem;width:100%;height:6rem;background:white;
    }
    .goods2 .goodsTitle{
        width:100%;height:.6rem;
        line-height:.6rem;text-align: center;
        color:red;border-bottom:1px solid #ccc;
    }
    .goods2 .goods2_center{
        width:100%;height:2.2rem;display:flex;border-bottom:1px solid #ccc;
    }
    .goods2 .goods2_center .goods2_center_left{
        width:50%;height:100%;border-right:1px solid #ccc;
        text-align: center;
    }
    .goods2 .goods2_center .goods2_center_left p:nth-child(1){
        margin-top:.1rem;width:100%;height:.4rem;font-size:.3rem;
        overflow: hidden;
        font-weight: 900;
    }
    .goods2 .goods2_center .goods2_center_left div{
        width:40%;height:60%;margin-left:30%;
    }
    .goods2 .goods2_center .goods2_center_left div img{
        width:100%;height:100%;
    }
    .goods2 .goods2_center .goods2_center_right{
        width:50%;height:100%;text-align: center;
    }
    .goods2 .goods2_center .goods2_center_right p:nth-child(1){
        margin-top:.1rem;width:100%;height:.4rem;font-size:.3rem;
        overflow: hidden;
        font-weight: 900;
    }
    .goods2 .goods2_center .goods2_center_right div{
        width:40%;height:60%;margin-left:30%;
    }
    .goods2 .goods2_center .goods2_center_right div img{
        width:100%;height:100%;
    }
    .goods2 .goods2_bottom {
        width:100%;height:3.2rem;
    }
    .goods2 .goods2_bottom ul{
        width:100%;height:100%;display:flex;
    }
    .goods2 .goods2_bottom ul li{
        flex:1;height:100%;
        border-right:1px solid #ccc;
        text-align: center;
    }
    .goods2 .goods2_bottom ul li p:nth-child(1){
        width:100%;height:.3rem;font-weight:900;overflow: hidden;
    }

    .goods2 .goods2_bottom ul li div{
        width:80%;height:1.4rem;
        margin-left:10%;margin-top:.2rem;
    }
    .goods2 .goods2_bottom ul li div img{
        width:100%;height:100%;
    }
    .goods2 .goods2_bottom ul li p:nth-child(3){
        margin-top:.2rem;
    }


    /* 为您推荐 */
    .foryou{
        width:100%;margin-top:.2rem;
    }
    .foryou p:nth-child(1){
        width:100%;height:.6rem;text-align: center;font-weight: 900;
    }
    .foryou ul{
        width:100%;display:flex;flex-wrap: wrap;
        justify-content: flex-start;margin-left:2.2%;
    }
    .foryou ul li{
        margin-right:5%;margin-top:.2rem;background:white;
        width:45%;height:3.5rem;border-right:1px solid #ccc;border-bottom:1px solid #ccc;
    }
    .foryou ul li div{
        width:80%;height:2.3rem;margin-left:10%;
    }
    .foryou ul li div img{
        width:100%;height:100%;
    }
    .foryou ul li p:nth-child(2){
        margin:.1rem 0;
    }
    .foryou ul li p:nth-child(3){
        color:red;
    }
    .kong{
        width:100%;height:1rem;
    }
</style>