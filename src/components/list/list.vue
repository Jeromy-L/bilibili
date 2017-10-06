<template>
  <div class="M-list">
    <div v-for="item in content">
        <card :items="item">i</card>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import card from '../card/card.vue'
  export default {
    name: 'list',
    props: ['config'],
    components:{
      'card':card
    },
    data () {
      return {
        content:{}
      }
    },
    
    created () {
      var me = this
      axios.get(me.config.url).then(function(res){
          var arr = res.data.data
          var obj = {}
          for(var ele in arr){
            arr[ele].forEach(function(x){
              if(obj[x.tid]){
                obj[x.tid].push(x)
              }else{
                obj[x.tid] = []
                obj[x.tid].push(x)
              }
            })
          }
          for(var ele in obj){
            if(obj[ele].length>4){
              me.content[ele] = obj[ele].splice(0,4);
            }
          }
          console.log(me.content)

      },function(res){
        console.log(res)
      })
    }
  }
</script>

<style lang="less" scoped>
    @import './list.less';
</style>