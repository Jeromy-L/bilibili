<template>
  <section>
    <navbar></navbar>
    <banner></banner>
    <card></card>
  </section>
</template>

<script>
import navbar from '../components/navbar/navbar.vue'
import banner from '../components/banner/banner.vue'
import card from '../components/card/card.vue'
export default {
  name: 'Home',
  components: {
    navbar,
    banner,
    card
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
