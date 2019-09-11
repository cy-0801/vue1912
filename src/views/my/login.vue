<template>
    <div>
          <My title="登录"></My>
          <div class="center">
                <div class="inputOne"><input type="text" placeholder="请输入手机号" v-model="cellphone"></div>
                <div class="inputTwo">
                    <input :type="isOpenPwd?'text':'password'"  placeholder="请输入密码" v-model="password">
                    <div class="btn">
                        <mt-switch v-model="isOpenPwd"></mt-switch>
                    </div>
                </div>
                <div class="login" @click="login()">登录</div>
                <div class="forget">
                    <span>忘记密码</span>
                    <span @click="goPage('/reg')">快速注册</span>
                </div>
          </div>
    </div>
</template>

<script>
import Vue from "vue"
import { Switch, Toast } from "mint-ui";
import {loginApi} from "@api";
Vue.component("mt-switch", Switch);
let oToast = Toast;
import My from "@components/my/index.vue"
    export default {
       name:"login" ,
       components:{
           My
       },
       data(){
           return{
                isOpenPwd: false,
                cellphone: "",
                password: "",
                
           }
       },
       computed:{
          
       },
       methods:{
          
           goPage(url){
               this.$router.push(url)
           },
            async login(){
                if(!/^1[34578]\d{9}$/.test(this.cellphone)){
                    oToast("请输入正确的手机号");
                    return;
                }
                if (this.password.match(/^[a-z0-9_-]{9}$/)) {
                   oToast("请输入9位密码");
                   return;
                }
                let data=await loginApi({cellphone:this.cellphone,password:this.password})
                console.log(data)
                 oToast("登入成功");
                 this.$router.go(-1)
           }
       }
    }
</script>

<style scoped>
.center{width:100%;height:auto;padding-top:1rem;}
.inputOne,.inputTwo{width: 90%;height:0.8rem;border: #EFEFEF solid 1px;border-radius: 0.04rem;
    margin: 0 auto;line-height: 0.8rem;padding-left: 0.2rem;font-size: 0.28rem;margin-bottom: 0.28rem;
    color:#323232}
.inputTwo{display:flex;justify-content:space-between;align-items: center}
.inputOne input,.inputTwo input{width:80%;height:100%;border:0;margin:0;padding:0;font-size:0.28rem;
line-height:0.28rem;background-color:transparent;color:#323232}  
.login{width:90%;height:0.8rem;background: #EB1625;line-height: 0.8rem;text-align: center;color: #FFFFFF;
    margin: 0 auto;border-radius: 0.1rem;font-size:0.4rem} 
.forget{display:flex;justify-content:space-between;width:95%;margin:0 auto;height:0.8rem;padding-top:0.3rem;}
</style>
<style >
  .btn .mint-switch-input:checked + .mint-switch-core {
  border-color: #eb1625;
  background-color: #eb1625;}
</style>