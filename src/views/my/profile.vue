<template>
    <div>
        <My title="个人资料" right-text="保存" @clickSave="save()"></My>
        <div class="center">
            <ul class="head">
                <li>头像</li>
                <li>
                    <input ref="headfile" type="file" @change="upload()">
                    <div class="divImg"><img :src="showHead?showHead:require('@assets/images/user/my/default-head.png')" alt=""/></div>
                </li>
            </ul>
             <ul class="list">
                <li>昵称</li>
                <li><input type="text" placeholder="请设置昵称"  v-model="nickname"></li>
                <!-- <mt-actionsheet
                  :actions="actions"
                  v-model="sheetVisible">
                </mt-actionsheet> -->
                <li class='arrow'></li>
            </ul>
              <ul class='list'>
                <li>性别</li>
                <li><input type="text" placeholder="请选择性别"  :value="gender==1?'男':gender==2?'女':''" readonly @click="isGender=!isGender" />
                <mt-actionsheet 
                :actions="genders" 
                v-model="isGender">    
                </mt-actionsheet></li>
                <li class='arrow'></li>
            </ul>
        </div>
    </div>
</template>

<script>
import Vue from "vue"
import { Actionsheet,Toast } from 'mint-ui';
Vue.component("mt-actionsheet", Actionsheet);
import {headApi,saveApi} from "@api"
 let oToast=Toast;
 import {mapState} from "vuex"
 import My from "@components/my/index.vue"
    export default {
        name:"profile",
        data(){
            return{
                 isGender:false,
                 genders:[
                    {
                        name:"男",
                        method:this.selectGender
                    },
                    {
                        name:"女",
                        method:this.selectGender
                    }
                ],
                gender:0,
                nickname:'',
                showHead:'',
                headUp:''
            }
           
        },
        components:{
            My
        },
        computed:{
            ...mapState({
                uid:state=>state.user.uid
            })
        },
        methods:{
            async save(){
                if(this.nickname.match(/^\s*$/)){
                    oToast("请你输入昵称");
                    return;
                }
                 if(this.gender===0){
                    oToast("请选择性别");
                    return;
                }
                // let data= await saveApi(this.uid,this.nickname,this.gender,this.headUp)
                // console.log(data)
                this.$router.push("/my")
                oToast("保存成功")
            },
            //上传头像
           async upload(){
                let head=this.$refs.headfile.files[0];
                let data= await headApi(head)
                console.log(data)
                if(data.code==200){
                    this.showHead="http://vueshop.glbuys.com/userfiles/head/"+data.data.msbox;
                    this.headUp=data.data.msbox
                }
            },
             //选择性别
            selectGender(data){
                if(data.name==='男'){
                    this.gender=1;
                }else if(data.name==='女'){
                    this.gender=2;
                }
            },
        }
    }
</script>

<style  scoped>
.center{width:100%;height:auto;padding-top:1rem}
.head{width:100%;height:1.2rem;border-bottom: 1px solid #EFEFEF;display: flex;
align-items: center;-webkit-align-items: center;justify-content: space-between;}
.head li:nth-child(1){font-size:0.28rem;margin-left:5%;}
.head li:nth-child(2){width:1rem;height:1rem;margin-right:10%;}
.head li:nth-child(2) img{width:100%;height:100%;border-radius: 100%;}
.divImg{position: absolute;width:1rem;height:1rem;top:110px;}
.head li:nth-child(2) input{width:100%;height:100%;opacity: 0;position: relative;z-index:2}
 ul.list{width:100%;height:0.8rem;border-bottom: 1px solid #EFEFEF;display: flex;
 align-items: center;-webkit-align-items: center;justify-content: space-between;font-size:0.28rem;}
.list li:nth-child(1){margin-left:5%;}
.list li:nth-child(2){width:50%;height:100%;margin-left:20%;}
.list li:nth-child(2) input{width:100%;height:100%;text-align: right;font-size:0.28rem;}
.list li.arrow{width:0.4rem;height:0.4rem;background-size:100%;background-repeat: no-repeat;background-position: center;margin-right:3%;}
input{border:none}

</style>
<style >
    .mint-actionsheet-listitem, .mint-actionsheet-button {height:1rem;font-size:0.28rem;line-height:1rem}
    

</style>