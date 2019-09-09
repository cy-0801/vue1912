<template>
    <div class="aaa">
        <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            @search="onSearch"
            @cancel="onCancel"
            @clear="onClear"
        />
    </div>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";

Vue.use(Search);
export default {
    name: "SearchOne",
    data() {
        return {
            value: ""
        };
    },
    methods: {
        onSearch() {},
        onCancel() {},
        onClear() {}
    }
};
</script>

<style scoped>
</style>