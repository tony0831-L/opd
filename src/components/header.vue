<template>
  <nav>
      <router-link to="/"><img src="https://khh.travel/Content/images/global/main-logo.png" alt=""></router-link>
    <div class="section">
      <a href="https://khh.travel/zh-tw/event/newslist">活動</a>
      <a href="https://khh.travel/zh-tw/travel/theme-tour">遊程</a>
      <a href="#">景點</a>
      <a href="https://khh.travel/zh-tw/board-and-lodging/business-district">食宿</a>
      <a href="https://khh.travel/zh-tw/traffic/get-to-kaohsiung">交通</a>
      <a href="https://khh.travel/zh-tw/publication">指南</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'headertop',
  data(){
    return {
    }
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
    nav{
      background: #fff;
      width: 90%;
      height: 2.3rem;
      position: fixed;
      padding: .8% 8%;
      display: flex;
      justify-content: space-between;
      box-shadow: 0em .3em .1em 0 rgba(51, 51, 51, 0.707);
      z-index: 10;
      img{
        width: 6.25rem;
        cursor: pointer;
      }
      .section{
        width: 36rem;
        font-weight: 600;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        a{
          font-size: 1.2rem;
          color: #2c3e50;
          text-decoration: none;
          &:hover{
            border-bottom: solid .1em #2c3e50;
          }
        }
      }
    }
    @media only screen and (min-width: 0px) and (max-width: 425px) {
      nav{
        display: grid;
        grid-template-columns: .3fr 1fr;
        width: 100%;
        padding: .4%;
        .section{
            width: auto;
          a{
            font-size: 1rem;
          }
        }
      }
    }
</style>
