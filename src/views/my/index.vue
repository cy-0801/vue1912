<template>
    <div class="my">
        <router-view></router-view>
        <!-- header -->
        <My title="个人中心"></My>
        <div class="center">
           <!-- banner -->
           <div class="banner">
               <div class="bannerImg">  
                   <img src="@assets/images/user/my/default-head.png" alt="">
               </div>
               <div class="bannerConter">
                   <div>昵称</div>
                   <div>我的积分：10</div>
               </div>
           </div>
           <div class="dingdan">
               <div class="dingdanLeft">全部订单</div>
               <div class="dingdanRight">查看全部订单></div>
           </div>
           <ul class="orderItem">
               <li>
                   <div class="orderImg"><img src="@assets/images/user/my/pay.png" alt=""></div>
                   <span class="orderPay">待付款</span>
               </li>
               <li><div class="orderImg"><img src="@assets/images/user/my/shouhuo.png" alt=""></div>
                   <span class="orderPay">待收货</span></li>
               <li><div class="orderImg"><img src="@assets/images/user/my/comment.png" alt=""></div>
                   <span class="orderPay">待评价</span></li>
           </ul>
           <div class="myspan"></div>
           <ul class="navUl">
               <router-link to="/profile" tag="li"   class="navLi"> 
                   <span>个人资料</span>
                   <span>></span>
               </router-link>
               <router-link  to="/place" tag="li" class="navLi"> 
                   <span>收货地址</span>
                   <span>></span>
               </router-link>
               <li class="navLi"> 
                   <span>绑定手机号</span>
                   <span>></span>
               </li>
               <li class="navLi"> 
                   <span>修改密码</span>
                   <span>></span>
               </li>
               <li class="navLi"> 
                   <span>我的收藏</span>
                   <span>></span>
               </li>
           </ul>
           <div @click="goPage('/login')" class="loginPad"><div class="login">登入/注册</div></div>
        </div>
    </div>
</template>

<script>
import My from "@components/my/index.vue"
    export default {
        name:"my",
        components:{
            My
        },
        methods:{
            goPage(url){
                this.$router.push(url)
            }
        }
    }
</script>

<style  scoped>
/* header */

/* banner */
.center{width:100%;height:auto;padding-top:1rem;}
.banner{width:100%;height: 2.8rem;background-color: #FFFFFF;background-image: url(/static/img/mybg.7627611.png);
background-repeat: no-repeat;background-size: 100%;background-position: center 0px;background:red;
display:flex;justify-content:flex-start;align-items:flex-end ;padding-bottom:0.5rem;}
.bannerImg{width:1.2rem;height:1.2rem;background:#fff;margin-left:0.5rem;border-radius:50%}
.bannerImg img{width:100%;height:100%;}
.bannerConter div{font-size:0.24rem;color:#ffff;margin-left:0.3rem;height:0.26rem;}
.dingdan{width:100%;height:0.82rem;display:flex;justify-content:space-between;
align-items: center;padding:0 0.3rem;border-bottom:#EFEFEF 1px solid}
.dingdan div{font-size:0.32rem;color:#323232}
/* orderItem */
.orderItem{width:100%;height:1.4rem;display:flex;justify-content:space-around;align-items:center}
.orderItem li{display:flex;justify-content:space-around;align-items:center;flex-direction: column}
.orderImg{width:0.62rem;height:0.54rem;}
.orderItem img{width:100%;height:100%}
.myspan{width:100%;height:0.3rem;background: #EFEFEF}
.navul{width:100%;height:auto;}
.navLi{width:100%;height:0.81rem;display:flex;justify-content:space-between;align-items:center;padding:0 0.4rem;
font-size:0.4rem;border-bottom:1px solid #EFEFEF;color:#323232}
.loginPad{width:100%;height:1rem;padding-top:0.32rem}
.login{width:75%;height:0.82rem;margin: 0 auto;background-color: #E51B19;border-radius:0.1rem;text-align:center;
line-height: 0.82rem;color: #FFFFFF;font-size:0.32rem}
</style>


