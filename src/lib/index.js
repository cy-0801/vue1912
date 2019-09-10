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