<template>
    <div class="wrapper" ref="wrapper0">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"Cy-scroll",
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper0,{
            click:true,
        })
    },
    methods:{
        scrollTo(){
            this.scroll.scrollTo();
        }
    }
}
</script>

<style scoped>
    .wrapper{
        height:100%;width:100%;
    }
</style>