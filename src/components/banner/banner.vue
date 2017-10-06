<template>
  <div class="M-banner">
    <swipe class="M-bannerMain">
        <swipe-item v-for="(item,idx) in items" key="item.pic">
            <img :src="item.pic" alt="" />
        </swipe-item>
    </swipe>
  </div>

</template>

<script>
  
  var vueSwipe = require('vue-swipe')
  require('vue-swipe/dist/vue-swipe.css')
  import { Swipe, SwipeItem } from 'vue-swipe'
  import pic1 from './1.jpg'
  import pic2 from './2.jpg'
  export default {
    name: 'banner',
    props:['items'],
    components: {
      'swipe': Swipe,
      'swipe-item': SwipeItem
    },
    data () {
      return {
      }
    },
    
    created () {
      var jsonp = function (data) {
        console.log(data);
      }

      // axios.get("https://api.bilibili.com/x/web-show/res/loc?pf=7&id=1695").then(function(res){
      //     console.log(res.data.data)
      // },function(res){
      //   console.log(res)
      // })

      // axios.get("/api").then(function(res){
      //     console.log(res)
      //     console.log("sd")
      // },function(res){
      //   console.log(res)
      // })
    
    // $.ajax({
    //     url: "https://api.bilibili.com/x/web-show/res/loc?pf=7&id=1695",
    //     dataType: "jsonp",
    //     jsonp: "jsonp",
    //     jsonpCallback: "jsonp",
    //     success: function(data) {
    //         console.log(data);
    //     },
    //     error: function(data){
    //       jsonp("da")
    //     }
    // });
      
    }
  }
</script>

<style lang="less" scoped>
    @import './banner.less';
</style>