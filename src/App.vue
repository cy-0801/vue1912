<template>
  <div id="app">
     <router-view></router-view>
     <TabBar v-show="$route.meta.flag"/>
  </div>
</template>

<script>
import TabBar from "./common/tabBar"
export default {
    name:"App",
    components:{
        TabBar
    },
}
</script>

<style>
#app{
    overflow: auto;
}

</style>
