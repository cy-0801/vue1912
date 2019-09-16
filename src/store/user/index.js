const state={
    uid:localStorage['uid']?localStorage['uid']:'',
    nickname:localStorage['nickname']?localStorage['nickname']:'',
    isLogin:localStorage['islogin']?Boolean(localStorage['islogin']):false,
    authToken:localStorage['autToken']?localStorage['autToken']:'',
};
const mutations={
    login(state,palyload){
        state.uid=palyload.uid
        state.nickname=palyload.nickname;
        state.authToken=palyloed.authToken
        state.islogin=Boolean(palyload.isLogin)
        localStorage['nickname']=payload.nickname
        localStorage['isLogin']=palyload.isLogin
        localStorage['uid']=palyload.uid
        localStorage['authToken']=palyload.authToken
    },
    outLogin(state){
        state.nickname="";
        state.authToken="";
        state.uid="";
        state.isLogin=false;
        localStorage.removeItem("nickname");
        localStorage.removeItem("isLogin");
        localStorage.removeItem("authToken")
        localStorage.removeItem("uid")
    }
};
const actions={};
export default{
    state,
    mutations,
    actions,
    namespaced:true
}
