<template>
    <div>
        <div class="photo">
            <img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt />
        </div>
        <div class="content">
            <div class="title">高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
            <div class="price">¥12.8</div>
            <div class="num">
                <div>快递:20元</div>
                <div>月销量0件</div>
            </div>
        </div>
        <div class="pingjia">
            <div class="pingjia_font">商品评价(22)</div>
            <ul>
                <li class="liList">
                    <div>
                        <img src="//vueshop.glbuys.com/userfiles/head/924828077.png" alt />
                        <div>abcd大公司</div>
                    </div>
                    <div class="aaa">
                        liupilliupiiliuplliupiiliupiliupiliupiliupi
                    </div>
                    <div class="time">2018-10-15 14:29:29</div>
                </li>
                <li class="liList">
                    <div>
                        <img src="//vueshop.glbuys.com/userfiles/head/924828077.png" alt />
                        <div>abcd大公司</div>
                    </div>
                    <div class="aaa">
                        liupilliupiiliuplliupiiliupiliupiliupiliupi
                    </div>
                    <div class="time">2018-10-15 14:29:29</div>
                </li>
                <li class="liList">
                    <div>
                        <img src="//vueshop.glbuys.com/userfiles/head/924828077.png" alt />
                        <div>abcd大公司</div>
                    </div>
                    <div class="aaa">
                        liupilliupiiliuplliupiiliupiliupiliupiliupi
                    </div>
                    <div class="time">2018-10-15 14:29:29</div>
                </li>
                <li class="liList">
                    <div>
                        <img src="//vueshop.glbuys.com/userfiles/head/924828077.png" alt />
                        <div>abcd大公司</div>
                    </div>
                    <div class="aaa">
                        liupilliupiiliuplliupiiliupiliupiliupiliupi
                    </div>
                    <div class="time">2018-10-15 14:29:29</div>
                </li>
                <li class="liList">
                    <div>
                        <img src="//vueshop.glbuys.com/userfiles/head/924828077.png" alt />
                        <div>abcd大公司</div>
                    </div>
                    <div class="aaa">
                        liupilliupiiliuplliupiiliupiliupiliupiliupi
                    </div>
                    <div class="time">2018-10-15 14:29:29</div>
                </li>
                <li class="liList">
                    <div>
                        <img src="//vueshop.glbuys.com/userfiles/head/924828077.png" alt />
                        <div>abcd大公司</div>
                    </div>
                    <div class="aaa">
                        liupilliupiiliuplliupiiliupiliupiliupiliupi
                    </div>
                    <div class="time">2018-10-15 14:29:29</div>
                </li>
            </ul>
        </div>
        <div class="jump_assess_dad">
            <router-link class="jump_assess"
                to="/detail/assess"
            >
                查看更多评价
            </router-link>
        </div>
        <div class="kong"></div>
        <div>
            <div class="btns">
                <div class="btns_left">收藏</div>
                <div class="btns_right" @click="addCart()">加入购物车</div>
            </div>
            <div :class="['mask',movePanel]">
                <div class="goods-info">
                    <div class="imgsize">
                        <img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt="">
                    </div>
                    <div class="goods-detail">
                        <div class="goods-title">高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
                        <div class="goods-right">
                            <div class="goods-price">￥12.8</div>
                            <div class="goods-num">商品编号:143208071</div>
                        </div>
                    </div>
                    <div class="del">
                        <div class="spot"></div>
                        <div class="line"></div>
                        <div class="close" @click="close()"></div>
                    </div>
                </div>
                <div class="goods-style">
                    <div class="name">
                        <div class="one">颜色</div>
                        <div class="four">
                            <div class="aaa">灰色</div>
                            <div class="aaa">肉色</div>
                            <div class="aaa">白色</div>
                            <div class="aaa">紫色</div>
                        </div>
                    </div>
                    <div class="name">
                        <div class="one">尺码</div>
                        <div class="four">
                            <div class="aaa">36</div>
                            <div class="aaa">37</div>
                            <div class="aaa">38</div>
                            <div class="aaa">39</div>
                        </div>
                    </div>
                </div>
                <div class="goods-buyNum">
                    <div>购买数量</div>
                    <div>
                        <div class="type">-</div>
                        <div class="shuru">
                            <input type="text" value="1">
                        </div>
                        <div class="type">+</div>
                    </div>
                </div>
                <div class="yes">
                    确认
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Goods",
    data(){
        return {
            flag:false,
            movePanel:"down"
        }
    },
    methods:{
        addCart(){
            this.movePanel = "up"
        },
        close(){
            this.movePanel = "down"
        }
    }
}
</script>

<style scoped>
.photo {
    width: 100%;
    height: 7.6rem;
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
    width:100%;
    margin-top:1rem;
    background:#fff;
}
.pingjia .pingjia_font{
    width:100%;height:.8rem;color:#969696;
    font-size:.38rem;display: flex;align-items: center;
    padding-left:.2rem;
}
.pingjia ul{
    width:100%;
}
.pingjia ul .liList{
    padding:0 .2rem;
    width:100%;
    margin-top:.1rem;
}
.pingjia ul .liList div:nth-child(1){
    width:100%;height:.5rem;
    display: flex;
    justify-content: flex-start;align-items: center;
}
.pingjia ul .liList div:nth-child(1) img{
    width:.5rem;height:.5rem;margin-right:.3rem;
}
.pingjia ul .liList .aaa{
    width:100%;
    font-size:.3rem;
}
.pingjia ul .liList .time{
    width:100%;margin-top:.2rem;
    font-size:.2rem;
    color:#7b7f82;
}
.jump_assess_dad{
    width:100%;height:1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
}
.jump_assess{
    width:2.6rem;height:.6rem;border:2px solid #c33;border-radius: .1rem;
    font-size:.3rem;display:flex;justify-content: center;align-items: center;

}
.kong{
    width:100%;height:1.3rem;
}
.btns{
    width:100%;height:1.3rem;
    position: fixed;left:0;bottom:0;
    display: flex;
}
.btns .btns_left{
    width:50%;height:100%;display:flex;
    justify-content: center;align-items: center;
    font-size:.4rem;color:#fff;background:#FCB40A;
}
.btns .btns_right{
    width:50%;height:100%;display:flex;
    justify-content: center;align-items: center;
    font-size:.4rem;color:#fff;background:red;
}
.mask{width:100%;height:60%;position: fixed;z-index:12;left:0px;bottom:0px;background-color:#f5f5f9;transition: transform 0.5s;-webkit-transition: transform 0.5s}
.mask.down{transform: translateY(120%);-webkit-transform: translateY(120%);}
.mask.up{transform: translateY(0%);-webkit-transform: translateY(0%);}


.goods-info{
    width:100%;height:1.5rem;
    border-bottom:1px solid #ccc;display: flex;
    align-items: center;position: relative;
    background: #fff;
}
.goods-info .imgsize{
    width:1rem;height:1rem;margin-left:.2rem;
}
.goods-info .imgsize img{
    width:100%;height:100%;
}
.goods-info .goods-detail{
    margin-left:.2rem;
}
.goods-info .goods-detail .goods-right{
    margin-top:.2rem;
    display:flex;justify-content: space-between;
}
.goods-info .goods-detail .goods-right .goods-price{
    color:red;
}
.goods-info .goods-detail .goods-right .goods-num{
    color:#888888;
}
.goods-info .del{
    width:.5rem;height:1rem;position:absolute;
    right:0;top:-.8rem;
}
.goods-info .del .spot{
    width:.1rem;height:.1rem;
    position:absolute;z-index:1;
    bottom:0px;left:.2rem;
    background-color:#000000;border-radius: 100%;
}
.goods-info .del .line{
    width:.05rem;height:.7rem;
    position:absolute;z-index: 1;
    bottom:.11rem;left:.23rem;
    background-color:#fff;   
}
.goods-info .del .close{
    width:0.4rem;height:0.4rem;
    background-image:url('../../assets/images/home/goods/x.png');background-size:100%;
    background-repeat: no-repeat;background-position: center;
    position:absolute;
    left:0.07rem;top:0rem;z-index:1;
}
.goods-style{
    width:100%;height:auto;background:#fff;
}
.goods-style .name{
    width:100%;height:1.5rem;
    padding:.2rem;
}
.goods-style .name .one{
    width:100%;height:.5rem;
    font-size:.3rem;margin-left:.22rem;
    margin-bottom:.1rem;
}
.goods-style .name .four{
    width:100%;height:.6rem;
    display: flex;
    justify-content: flex-start;align-items: center;
}
.goods-style .name .four .aaa{
    width:.8rem;height:100%;border-radius: .16rem;
    display: flex;align-items: center;justify-content: center;
    margin-left:.2rem;background: #EFEFEF;
}
.goods-buyNum{
    width:100%;height:1rem;display:flex;justify-content: space-between;
    background:#fff;padding:.4rem;align-items: center;
}
.goods-buyNum div:nth-child(1){
    font-size:.3rem;
}
.goods-buyNum div:nth-child(2){
    display: flex;
    width:3rem;
}
.goods-buyNum div:nth-child(2) .shuru{
    width:1.8rem;height:.6rem;
}
.goods-buyNum div:nth-child(2) .shuru input{
    width:100%;height: 100%;font-size:.3rem;
    text-align: center;
}
.goods-buyNum div:nth-child(2) .type{
    width:.6rem;height:.6rem;border:1px solid #000;font-size:.5rem;
    display: flex;justify-content: center;align-items: center;
}
.yes{
    width:100%;height:1rem;background:red;
    position:absolute;bottom:0;left:0;
    display:flex;justify-content: center;align-items: center;
    font-size:.38rem;color:#fff;
}
</style>