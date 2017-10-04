<template>
  <div class="M-banner">
    <swipe class="M-bannerMain">
        <swipe-item v-for="(item,idx) in items" key="item.pic">
            <img :src="item.imgpic" alt="" />
        </swipe-item>
    </swipe>
  </div>

</template>

<script>
  
  var vueSwipe = require('vue-swipe')
  require('vue-swipe/dist/vue-swipe.css')
  import $ from 'jquery'
  import { Swipe, SwipeItem } from 'vue-swipe'
  import pic1 from './1.jpg'
  import pic2 from './2.jpg'
  export default {
    name: 'banner',
    components: {
      'swipe': Swipe,
      'swipe-item': SwipeItem
    },
    data () {
      return {
        items: [{imgpic: pic1}, {imgpic: pic2}]
      }
    },
    
    created () {
      var jsonp = function (data) {
        console.log(data);
      }

      this.$http.jsonp("https://api.bilibili.com/x/web-show/res/loc",{params: {pf:7,id:1695}}).then(function(res){
        console.log("sd")
            console.log(JSON.parse(res.bodyText))
      },function(res){
        console.log(res)
      })
    
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