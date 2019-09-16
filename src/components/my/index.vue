<template>
    <div>
       <!-- header -->
        <header>
           <div class="headerImg" @click="$router.go(-1)">
               <img src="@assets/images/home/goods/back.png" alt="">
           </div>
           <template>
               <div class="headerCenter">{{title}}</div>
               <div class="headerRight" @click="rightBtn()">{{rightText}}</div>
           </template>
           
        </header>
    </div>
</template>

<script>
    export default {
        props:{
            title:{
                type:String,
                required:true
            },
            rightText:{
                 type:String,
                required:false
            }
        },
        methods:{
            rightBtn(){
                this.$emit("clickSave");
            }
        }
    }
</script>

<style  scoped>
header{width:100%;height:1rem;display:flex;justify-content:flex-start;align-items:center;
background:#fff;position:fixed;top:0;border-bottom:1px solid #efefef}
.center{padding-top:1rem;}
.headerImg{width:0.8rem;height:0.8rem;}
.headerImg img{width:100%;height:100%}
.headerCenter{width:70%;height:1rem;line-height:1rem;text-align: center;color:#323232;
font-size:0.42rem}
.headerRight{
    height:1rem;line-height:1rem;text-align: center;color:#323232;font-size:0.42rem
}
</style>