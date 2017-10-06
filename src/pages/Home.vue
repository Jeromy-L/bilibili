<template>
  <section>
    <navbar></navbar>
    <banner :items="items"></banner>
    <card :items="hot"></card>
    <list :config="listconfig"></list>
  </section>
</template>

<script>
import navbar from '../components/navbar/navbar.vue'
import banner from '../components/banner/banner.vue'
import card from '../components/card/card.vue'
import list from '../components/list/list.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    navbar,
    banner,
    card,
    list
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [{pic:''}],
      hot:[],
      content:{},
      listconfig:{
        url:"https://api.bilibili.com/x/web-interface/dynamic/index"
      }
    }
  },
  created () {
    var me = this;
    axios.get("https://api.bilibili.com/x/web-show/res/loc?pf=7&id=1695").then(function(res){
          me.items = res.data.data
          
      },function(res){
        console.log(res)
      })
      axios.get("https://api.bilibili.com/x/web-interface/ranking/index?day=3").then(function(res){
          me.hot = res.data.data.splice(0,4)
          //console.log(me.hot)
      },function(res){
        console.log(res)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
