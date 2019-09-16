<template>
    <div>
        <My title="地址管理"></My>
        <div class="center"></div>
        <ul>
            <li class="add">
                <div v-for="(item,index) in list" :key="index">
                    <div>{{item.title}} {{item.cell}}</div>
                    <div>{{item.address}}</div>
                </div>
                <div></div>
            </li>
            
        </ul>
    </div>
</template>

<script>
import axios from "axios"
import My from "@components/my/index.vue"
import Mock from 'mockjs'
    export default {
        name:"place",
        components:{
            My
        },
        data(){
            return{
                list:[
                   {
                       title:"123456",
                       cell:"15131660968",
                       address:"河北省石家庄市"
                   },
                     {
                       title:"123456",
                       cell:"1543543968",
                       address:"河北省石家庄市"
                   },
                    {
                       title:"123456",
                       cell:"15323660938",
                       address:"河北省石家庄市"
                   },
                    {
                       title:"123456",
                       cell:"15231664654",
                       address:"河北省石家庄市"
                   },

                ]
            }
        },
        created(){
            
          var Random=Mock.Random;
          var data=Mock.mock({
              "list|1-10":[{
                  "id|+1":1,
                  "title|1":Random.paragraph()
              }]
          })
        }
    }
</script>

<style  scoped>
.center{width:100%;height:auto;padding-top:1.2rem;}
ul{width:90%;height:auto;margin:0 auto}
.add{width:100%;height:1.5rem;}
.add div{width:100%;display:flex;justify-content:space-between;font-size:0.3rem;flex-wrap:wrap;}
</style>