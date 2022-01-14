<template>
  <footer>
    <h2>本網站之資訊來自高雄市政府</h2>
    <p>全部資訊皆為學習之用途使用</p>
    <p>如有侵犯隱私及著作權之疑慮請告知</p>
  </footer>
</template>

<script>
export default {
  name: 'footerinfo',
  data(){
    return {
    }
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
    footer{
      padding: .5% 1.2%;
      font-size: .8rem;
      background-color: #333;
      color: #fff;
      line-height: 1.8em;
      h2{
        font-size: 1.2rem;
      }
    }
</style>
