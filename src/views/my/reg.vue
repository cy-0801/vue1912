<template>
  <div>
    <My title="注册"></My>
    <div class="center">
      <!-- <div class="test">
                <input type="text" placeholder="验证码">
                <div class="testImg"><img src="" alt=""></div>
      </div>-->
      <div class="call">
        <div class="callInput">
          <input type="text" placeholder="请输入手机号" v-model="cellphone" />
        </div>
        <div :class="{'code-btn':true, success:isSendCode}" @click="getMsgCode()">{{msgcodeText}}</div>
      </div>
      <div class="msgCode">
        <input type="text" placeholder="请输入短信验证码" v-model="msgCode" />
      </div>
      <div class="password">
        <div class="passwordInput">
          <input :type="isOpenPwd?'text':'password'" placeholder="请输入密码" v-model="password" />
        </div>
        <div class="btn">
          <mt-switch v-model="isOpenPwd"></mt-switch>
        </div>
      </div>
      <div class="reg" @click="submitData()">注册</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Switch, Toast } from "mint-ui";
Vue.component("mt-switch", Switch);
let oToast = Toast;
import My from "@components/my/index.vue";
import { setInterval } from "timers";
import { zhuceApi ,btnApi} from "@api";

export default {
  name: "reg",
  data() {
    return {
      isOpenPwd: false,
      cellphone: "",
      msgCode: "",
      password: "",
      msgcodeText: "获取短信验证码",
      isSendCode: true,
      isSubmit:true,
    };
  },
 methods: {
     async   submitData() {
      if (this.cellphone.match(/^\s*$/)) {
        oToast("请输入手机号");
        return;
      }
      let data = await zhuceApi(this.cellphone);
      if(data.data.isreg==="1"){
        oToast('该手机号注册过')
        return; 
      }
      if (this.msgCode.match(/^\s*$/)) {
        oToast("请输入短信验证码");
        return;
      }
      if (this.password.match(/^\s*$/)) {
        oToast("请输入密码");
        return;
      }
      //防止网慢多次提交
      if(this.isSubmit){
          this.isSubmit=false
          let data=await btnApi(this.msgCode,this.cellphone,this.password)
        if(data.code===200){
          this.$router.replace("/login?pageFrom=reg")
        }else{
          this.isSubmit=true;
          oToast(data.data)
        }
      }
    },
    //获取短信验证码
    async getMsgCode() {
      if (!/^1[34578]\d{9}$/.test(this.cellphone)) {
        oToast("请输入正确的手机号");
        return;
      } else {   
       let data = await zhuceApi(this.cellphone);
            // console.log(data);
        if(data.data.isreg==="1"){
          oToast('该手机号注册过')
          return;
        }if(this.isSendCode){
                    let time=10;
                    this.msgcodeText=`重新获取${time}s`;
                    this.isSendCode=false;
                    this.timer=setInterval(()=>{
                        if(time>0){
                            time--;
                            this.msgcodeText=`重新获取${time}s`;
                        }else{
                            clearInterval(this.timer);
                            this.isSendCode=true;
                            this.msgcodeText="获取短信验证码"
                        }

                    },1000)
                }
     
      }
    },
    //检测是否注册过
   
  },
  components: {
    My
  }
};
</script>

<style scoped>
.center {
  width: 100%;
  height: auto;
  padding-top: 1.2rem;
}
.test {
  width: 90%;
  height: 0.84rem;
  border: 1px solid #efefef;
  border-radius: 2px;
  background: #ffffff;
  margin: 0 auto;
  line-height: 0.84rem;
  padding-left: 0.2rem;
  font-size: 0.28rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.test input {
  width: 70%;
  height: 88%;
  font-size: 0.28rem;
  padding-left: 0.2rem;
  border: none;
}
.testImg {
  width: 20%;
  height: 60%;
  border-left: 1px solid #efefef;
  text-align: center;
  background: chartreuse;
}
.testImg img {
  width: 100%;
  height: 100%;
}
.call {
  width: 90%;
  height: 0.84rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 0.4rem;
}
.callInput {
  width: 62%;
  height: 100%;
  border: #efefef solid 1px;
  border-radius: 2px;
}
.callInput input {
  width: 92%;
  height: 95%;
  font-size: 0.28rem;
  padding-left: 0.2rem;
  border: none;
}
.code-btn {
  width: 35%;
  height: 0.82rem;
  background: #eaeaea;
  color: #717376;
  border: #eaeaea solid 1px;
  border-radius: 2px;
  font-size: 0.28rem;
  text-align: center;
  line-height: 0.82rem;
}
.code-btn.success {
  background: #ffffff;
  border: 1px solid #eb1625;
  color: #eb1625;
}
.getCode.success {
  background: #ffffff;
  border: 1px solid #eb1625;
  color: #eb1625;
}
.msgCode {
  width: 90%;
  height: 0.84rem;
  margin: 0 auto;
  border-radius: 2px;
  border: #efefef solid 1px;
  margin-top: 0.4rem;
}

.msgCode input {
  width: 92%;
  height: 95%;
  font-size: 0.28rem;
  padding-left: 0.2rem;
  border: none;
}
.password {
  width: 90%;
  height: 0.84rem;
  margin: 0 auto;
  border-radius: 2px;
  border: #efefef solid 1px;
  margin-top: 0.4rem;
  display: flex;
}
.passwordInput {
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.passwordInput input {
  width: 92%;
  height: 95%;
  font-size: 0.28rem;
  padding-left: 0.2rem;
  border: none;
}

.reg {
  width: 80%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  background: #eb1625;
  color: #ffffff;
  margin: 0 auto;
  margin-top: 0.4rem;
  font-size: 0.36rem;
  border-radius: 4px;
}
</style>
<style >
.btn .mint-switch-input:checked + .mint-switch-core {
  border-color: #eb1625;
  background-color: #eb1625;
}
</style>