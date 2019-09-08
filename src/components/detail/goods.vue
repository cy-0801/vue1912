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
        <div class="btns">
            <div class="btns_left">收藏</div>
            <div class="btns_right">加入购物车</div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "Goods"
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
</style>