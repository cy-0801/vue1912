<template>
    <div>
        <div class="header">
            <div class="back" @click=handler()>
                <img src="../../assets/images/home/goods/back.png" alt />
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name:"detail",
    methods:{
        handler(){
            this.$router.back(-1)
        }
    }
}
</script>


<style scoped>
    .header{
        width:100%;height:1rem;background:red;
        position: absolute;left:0;top:0;
    }
    .back{
        width:1rem;height:1rem;
    }
    .back img{
        width:100%;height:100%;
    }
</style>