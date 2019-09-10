const state = {
    list:[]
}
const actions = {

}
const mutations = {
    addList(state,obj){
        if(state.list.length == 0 ){
            state.list.push(obj)
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
        }
    }
}


export default {
    state,
    actions,
    mutations,
    namespaced:true
}