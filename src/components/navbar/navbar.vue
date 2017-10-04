<template>
  <div class="navbar">
    <a class="navbarLogo">
      <img src="../../assets/imgs/logo.png"></img>
    </a>
    <a class="navbarUser">
    </a>
    <a class="navbarDownload">
      <p>下周客户端</p>
    </a>
    <div class="navbarClassifiy">
      <div class="navbarClassifiyLeft">
        <div class="navbarClassifiyUl">
          <a href="#" class="navbarClassifiyLi" v-for="(item , index) in navbarli">
            <p v-bind:class="{ active: index==0 }">{{item.text}}</p>
          </a>
        </div>
        
      </div>
      <div class="navbarClassifiyRight">
        <img src="../../assets/imgs/down.png"></img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      navbarli: [{'text': '首页'}, {'text': '动画'}, {'text': '番剧'}, {'text': '国创'}, {'text': '音乐'}, {'text': '舞蹈'}, {'text': '科技'}, {'text': '游戏'}, {'text': '娱乐'}, {'text': '鬼畜'}, {'text': '电影'}, {'text': '电视剧'}, {'text': '生活'}, {'text': '时尚'}, {'text': '广告'}, {'text': '直播'}]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import './navbar.less';
</style>
