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
    formData.append("username",username)
    formData.append('password',password)
    formData.append('vode',msgCode)
    return http({
        method:"post",
        url:"api/home/user/reg?token=1ec949a15fb709370f",
        data:formData
    })
    
}
//登录按钮
export const loginApi = (obj) =>http({
    method:"post",
    url:"api/home/user/pwdlogin?token=1ec949a15fb709370f",
    data:obj
})
//头像上传
export const headApi = (obj) =>http({
    method:"post",
    url:"api/user/myinfo/formdatahead?token=1ec949a15fb709370f",
    data:obj
})
//昵名上传

