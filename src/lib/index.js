<<<<<<< HEAD
import Bscroll from "./better-scroll"
const components = [
    Bscroll
]

const install = (Vue)=>{
    if(Vue){
        components.map(item=>{
            Vue.component(item.name,item)
        })
    }
}
export default install;
=======
const state={},
const mutations={},
const actions={}
export default({
    state,
    mutations,
    actions
})
>>>>>>> liu
