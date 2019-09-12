import Vue from "vue"
const state = {
    list: JSON.parse(sessionStorage.getItem("cartData")) || [],
    Allprice:  0,
    Allchecked:true
}
const actions = {

}
const mutations = {
    addList(state,obj){
        if(state.list.length == 0 ){
            state.list.push(obj)
            sessionStorage.setItem("cartData",JSON.stringify(state.list))
        }
        var bStop = false;
        for(var i=0;i<state.list.length;i++){
            if(obj.gid == state.list[i].gid){
                bStop = true;
                if(obj.info.color == state.list[i].info.color && obj.info.size == state.list[i].info.size){
                    state.list[i].mounts += obj.mounts;
                    break;
                }else{
                    bStop = false;
                }
            }
        }
        if(!bStop){
            state.list.push(obj)
            sessionStorage.setItem("cartData",JSON.stringify(state.list))
        }
        this.commit("goods/total")
    },
    handlerAdd(state,index){
        state.list[index].mounts++;
        this.commit("goods/total")
    },
    handlerDel(state,index){
        if(state.list[index].mounts>1){
            state.list[index].mounts--;
        }else{
            state.list[index].mounts = 1;
        }
        this.commit("goods/total")
    },
    handler_Deletel(state,index){
        state.list.splice(index,1)
        this.commit("goods/total")
    },
    change(state,index){
        state.list[index].checked = !state.list[index].checked;
        // Vue.set(state.list,index,!state.list[index].checked)

        state.Allchecked =!state.list.some((item)=>{
            return item.checked == false
        })
        this.commit("goods/total")
    },
    total(state){
        state.Allprice = 0 ;
        state.Allprice = parseInt(state.Allprice)
        for(var i=0;i<state.list.length;i++){
            if(state.list[i].checked){
                state.Allprice += (state.list[i].price * 10000 * state.list[i].mounts)/10000
            }
        }
    },
    Allchange(state){
        state.Allchecked = !state.Allchecked;
        for(var i=0;i<state.list.length;i++){
            state.list[i].checked = state.Allchecked;
        }
        this.commit("goods/total")
    }
}


export default {
    state,
    actions,
    mutations,
    namespaced:true
}