<template>
  <div class="M-card">
    <div class="M-cardHeader">
      <img src="./1.svg"></img>
      <p>热门推荐</p>
    </div>
  </div>
</template>

<script>
  import pic1 from './1.jpg'
  
  export default {
    name: 'card',
    
    data () {
      return {
        items: [{imgpic: pic1}, {imgpic: pic1}]
      }
    },
    
    created () {
      
    }
  }
</script>

<style lang="less" scoped>
    @import './card.less';
</style>