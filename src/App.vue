<template>
  <div id="app">
     <router-view></router-view>
     <TabBar v-show="$route.meta.flag"/>
  </div>
</template>

<script>
import TabBar from "./common/tabBar"
export default {
    components:{
        TabBar
    }
}
</script>

<style lang="scss">
#app{
    overflow: auto;
}
</style>
