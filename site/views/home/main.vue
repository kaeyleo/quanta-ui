<template>
  <div class="container">
    <img src="@/assets/logo.png">
    <p>{{ desc }}</p>
  </div>
</template>

<style scoped>
  .container {
    margin-top: 32vh;
  }
  img {
    width: 20vw;
  }
  p {
    margin-top: 3vh;
    font-size: 1.6vw;
    color: #4E5667;
    letter-spacing: .1vw;
  }
</style>

<script>
export default {
  name: 'Home',
  data () {
    return {
      desc: 'A Desktop UI Library For Vue.js'
    }
  }
}
</script>
