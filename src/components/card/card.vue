<template>
  <div class="M-card">
    <div class="M-cardHeader">
      <img src="./1.svg"></img>
      <p v-if="items[0]&&items[0].tname">{{items[0].tname}}</p>
      <p v-else>热门推荐</p>
    </div>
    <a href="#" class="M-cardMore">
      <div>
        <p>查看更多</p>
      </div>
      <img src="./2.svg"></img>    
    </a>
    <div class="M-cardContent">
      <a href="#" v-for="item in items">
        <div class="M-cardContentImg">
          <img :src="item.pic" alt="">
          <div class="M-cardContentImgInfo">
            <div class="M-cardContentImgInfoLeft">
              <img src="./play.svg" alt="">
            </div>
            <div class="M-cardContentImgInfoText">
                <p v-if="item.play">{{item.play}}</p>
                <p v-if="item.stat">{{item.stat.view}}</p>
            </div>
            <div class="M-cardContentImgInfoRight">
              <img src="./review.svg" alt="">
            </div>
            <div class="M-cardContentImgInfoText">
                <p v-if="item.review">{{item.review}}</p>
                <p v-if="item.stat">{{item.stat.danmaku}}</p>
            </div>
          </div>
        </div>
        <div class="M-cardContentTitle">
          <p>{{item.title}}</p>
        </div>
      </a>
      
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'card',
    props: ['items'],
    data () {
      return {
        title:'',
        content:{}
      }
    },
    
    created () {
      // var me = this
      // axios.get("https://api.bilibili.com/x/web-interface/dynamic/index").then(function(res){
      //     var arr = res.data.data
      //     var obj = {}
      //     for(var ele in arr){
      //       arr[ele].forEach(function(x){
      //         if(obj[x.tid]){
      //           obj[x.tid].push(x)
      //         }else{
      //           obj[x.tid] = []
      //           obj[x.tid].push(x)
      //         }
      //       })
      //     }
      //     console.log(obj)

      // },function(res){
      //   console.log(res)
      // }) 
      //console.log(this.items[0])
    },
    beforeMount(){
      //console.log(this.items[0])
    },
    updated() {
      //console.log(this.items[0])
    }
  }
</script>

<style lang="less" scoped>
    @import './card.less';
</style>