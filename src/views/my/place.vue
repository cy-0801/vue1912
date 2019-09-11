<template>
    <div>
        <My title="收货地址"></My>
        <div class="center"></div>
        <ul>
            <li class="add">
                <div>
                    <div>水电费  139693973</div>
                    <div>[默认]四川省成都市</div>
                </div>
                <div></div>
            </li>
            
        </ul>
    </div>
</template>

<script>
import My from "@components/my/index.vue"
    export default {
        name:"place",
        components:{
            My
        }
    }
</script>

<style  scoped>
.center{width:100%;height:auto;padding-top:1.2rem;}
ul{width:90%;height:auto;margin:0 auto}
.add{width:100%;height:1.5rem;display:flex;justify-content:space-between;align-items: center;font-size:0.3rem}
</style>