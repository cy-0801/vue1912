<template>
    <div class="shappingcar">
        <div class="header">
            <div class="iconfont">&#xe516;
                <img src="" alt="">
            </div>
            <div class="title">购物车</div>
        </div>

        <!-- 中间的部分 -->
        <Cy-scroll>
        <div class="center">
            <div class="list1" v-for="(item,index) in list" :key="index">
                <div class="left">
                    <input type="checkbox" :checked="item.checked" @change="change(index)"/>
                </div>
                <!-- 右面的部分 -->
                <div class="right">
                    <div class="good-img">
                        <img :src="item.image" />
                    </div>
                    <div class="delete" @click="handler_Deletel(index)">删除</div>
                </div>
                <!-- 字体的部分 -->
                <div class="word">{{item.title}}</div>
                <div class="col">
                    <span>颜色:</span>
                    <p>{{item.info.color}}</p>
                </div>
                <div class="size">
                    <b>尺寸:</b>
                    <i>{{item.info.size}}</i>
                </div>
                <div class="price">
                    <em>￥{{item.price}}</em>
                </div>
                <!-- 边框里的加减乘除 -->
                <div class="frame">
                   <div class="minus" @click="handlerDel(index)">-</div>
                   <div class="type">
                       <input type="text" :value="item.mounts" style="font-size:.3rem;">
                   </div>
                   <div class="add" @click="handleradd(index)">+</div>
                </div>
            </div>
        </div>
        </Cy-scroll>
        <!-- 底部 -->
        <div class="footer">
            <div class="left1">
                <!-- 图标 -->
                <div class="pic">
                    <input type="checkbox" :checked="Allchecked" @change="Allchange()"/>
                </div>
                <!-- 全部 -->
                <div class="whole">全选</div>
                <!-- 合计 -->
                <div class="title2">合计:</div>
                <!-- 价格 -->
                <div class="price2">
                    <span>￥</span>
                    <i style="font-size:.3rem;">{{Allprice}}</i>
                </div>
            </div>

            <!-- 按钮部分 -->
            <div class="button">
                <p>去结算</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
    name: "shoppingCar",
    created(){
        for(var i=0;i<this.list.length;i++){
            this.Allprice = Number(this.Allprice);
            if(this.list[i].checked){
                this.Allprice += this.list[i].price
            }    
        }
    },
    computed: {
        ...mapState({
            list: state => state.goods.list,
            Allprice:state => state.goods.Allprice,
            Allchecked:state => state.goods.Allchecked,
        }),
        ...mapGetters({
            
        })
    },
    methods: {
        ...mapMutations({
            handleradd:"goods/handlerAdd",
            handlerDel:"goods/handlerDel",
            handler_Deletel:"goods/handler_Deletel",
            change:"goods/change",
            Allchange:"goods/Allchange"
        })
    }
};
</script>

<style scoped>
/* 最大的那个 */
.shappingcar {
    width: 100%;
    height:100%;
    padding-top:1rem;
    padding-bottom:2rem;
    
}

/* 导航栏的设置 */
.header {
    width: 100%;
    height: 1rem;
    background-color: #ffffff;
    z-index:1;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #efefef;
    position: fixed;
    left: 0;
    top: 0;
}

.header .iconfont {
    font-size: 0.4rem;
    margin-left: 0.2rem;
}

.header .title {
    width: 79%;
    height: auto;
    font-size: 0.32rem;
    text-align: center;
}

.header .right-btn {
    width: auto;
    height: auto;
    font-size: 0.32rem;
}

/* 中间部分 */
.center {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.list1 {
    width: 100%;
    height: 2.5rem;
    border-bottom: 3px solid #ccc;
}

.list1 .left {
    width: 1rem;
    height: 2.5rem;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid #ccc;
}

.list1 .left input {
    width: 50%;
    height: 50%;
}

.list1 .right {
    width: 100%;
    position: absolute;
    margin-left: 1rem;
    height: 2.5rem;
    border-bottom: 3px solid #ccc;
}

.good-img {
    width: 1.3rem;
    height: 1.3rem;
    margin-top: 0.8rem;
}

/* 图片还没有居中 */
.good-img img {
    width: 0.8rem;
    height: 0.8rem;
    margin-left: 0.21rem;
}

/* 删除 */
.delete {
    width: 10%;
    border:1px solid #666;
    font-size: 0.24rem;
    color: #b5b5b5;
    margin-top: -0.25rem;
    margin-left: 0.2rem;
    display:flex;
    justify-content: center;
    align-items: center;
}

/* 上面的字 */
.word {
    width: 4.5rem;
    font-size: 0.25rem;
    margin-left: 2.8rem;
    margin-top: 0.4rem;
    position: absolute;
}

/* 颜色:黑色 */
.col {
    width: 1.2rem;
    position: absolute;
    margin-left: 2.8rem;
    margin-top: 1rem;
}

.col span {
    display: block;
    margin-top: 0.1rem;
}

.col p {
    margin-top: -0.3rem;
    margin-left: 0.6rem;
}

/* 尺寸的字 */
.size {
    width: 1.2rem;
    position: absolute;
    margin-left: 4.4rem;
    margin-top: 1.1rem;
}

.size b {
    font-weight: normal;
}

.size i {
    font-style: normal;
}

/* 价格 */

.price {
    font-size: 0.25rem;
    margin-left: 2.8rem;
    margin-top: 1.5rem;
    position: absolute;
}

.price em {
    font-style: normal;
    color: red;
}

/* 加减框 */
.frame {
    width: 2.2rem;
    height: 0.6rem;
    border: 3px solid #ccc;
    margin-left: 4.9rem;
    margin-top: 1.6rem;
    position: absolute;
    display: flex;
    font-size:.3rem;
}

/* 框里的加减法 */
.minus {
    width:30%;height:100%;border-right:1px solid #000;
    display:flex;align-items: center;justify-content: center;
}

.type {
   flex:1;
}
.type input{
    width:100%;height:100%;
    line-height:100%;
    text-align:center;
    border:none;
}
.add {
    width:30%;height:100%;border-left:1px solid #000;
    display:flex;align-items: center;justify-content: center;
}

/*底部*/
.footer {
    width: 100%;
    height: 1rem;
    position: fixed;
    bottom:1.3rem;
    left:0rem;
    background: #fff;
}

.left1 {
    width: 70%;
    height: 1rem;
    background: #fff;
}

.pic {
    width: 0.8rem;
    height: 0.8rem;
    /* margin-left:0.21rem; */
    /* background:red; */
    margin-top: 0.3rem;
}

/* 图片还有问题 */
.pic input {
    width: 0.3rem;
    height: 0.3rem;
    margin-left: 0.4rem;
    margin-top: 0.3rem;
}

/* 字体:全部 */
.whole {
    width: 1rem;
    height: 0.5rem;
    font-size: 0.33rem;
    margin-top: -0.6rem;
    margin-left: 0.8rem;
}

/* 合计 */
.title2 {
    width: 0.8rem;
    height: 0.5rem;
    font-size: 0.33rem;
    margin-top: -0.5rem;
    margin-left: 3.3rem;
    /* background:pink; */
}

.price2 {
    width: 1.2rem;
    height: 0.4rem;
    /* background:yellow; */
    margin-top: -0.4rem;
    margin-left: 4.1rem;
}

.price2 span {
    color: red;
}

.price2 i {
    color: red;
    font-style: normal;
}

.button {
    margin-top: -1rem;
    margin-left: 5.25rem;
    width: 30%;
    height: 1rem;
    background: red;
    
}

.button p {
    font-size: 0.4rem;
    text-align: center;
    vertical-align: middle;
    color:#FFF;
    line-height: 1rem;
}



</style>