import http from "@utils/http.js"
//判断该手机号有没有注册过
export const zhuceApi = (username)=>{
    let formData= new FormData();
    formData.append("username",username)
    return http({
        method:"post",
        url:"/api/home/user/isreg?token=1ec949a15fb709370f",
        data:formData
    })
    
}
//会员注册按钮
export const btnApi = (msgCode,username,password)=>{
    let formData= new FormData();
    formData.append('vcode',msgCode)
    formData.append("cellphone",username)
    formData.append('password',password)
    return http({
        method:"post",
        url:"api/home/user/reg?token=1ec949a15fb709370f",
        data:formData
    })
    
}
//登录按钮
export const loginApi = (username,password)=>{
    let formData= new FormData();
    formData.append("cellphone",username)
    formData.append('password',password)
    return http({
        method:"post",
        url:"api/home/user/pwdlogin?token=1ec949a15fb709370f",
        data:formData
    })
    
}
//头像上传
export const headApi = (headfile)=>{
    let formData= new FormData();
    formData.append("headfile",headfile)
    return http({
        method:"post",
        url:"/api/user/myinfo/formdatahead?token=1ec949a15fb709370f",
        data:formData
    })
    
}

//保存
export const saveApi=(uid,nickname,gender,head)=>{
    let formData= new FormData();
    formData.append("uid",uid)
    formData.append("nickname",nickname)
    formData.append("gender",gender)
    formData.append("head",head)
    return http({
        method:"post",
        url:"/api/user/myinfo/updateuser?token=1ec949a15fb709370f",
        data:formData
    })
}
//收货地址管理
export const addressApi=()=>http({
    method:"get",
    url:'/api/v1/address',
    data:{
        
    }

})


