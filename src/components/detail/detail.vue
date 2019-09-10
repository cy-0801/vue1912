<template>
    <Cy-scroll>
        <div>
            <div class="jianjie" v-html="this.para"></div>
        </div>
    </Cy-scroll>
</template>

<script>
import { goodsdetail } from "@api";
export default {
    name: "Detail",
    data() {
        return {
            para: ""
        };
    },
    async created() {
        let data = await goodsdetail(this.$route.query.gid);
        this.para = data.data.bodys;
    }
};
</script>

<style scoped>
.jianjie {
    width: 100%;
    padding: 0.2rem;
    font-size:.3rem;
}
</style>