<template>
  <nav>
    <img src="https://khh.travel/Content/images/global/main-logo.png" alt="">
    <div class="section">
      <a href="https://khh.travel/zh-tw/event/newslist">活動</a>
      <a href="https://khh.travel/zh-tw/travel/theme-tour">遊程</a>
      <a href="#">景點</a>
      <a href="https://khh.travel/zh-tw/board-and-lodging/business-district">食宿</a>
      <a href="https://khh.travel/zh-tw/traffic/get-to-kaohsiung">交通</a>
      <a href="https://khh.travel/zh-tw/publication">指南</a>
    </div>
  </nav>
  <div class="landing">
    <img src="./assets/the-urban-landscape-1698285.png" alt="" srcset="">
    <h1>遇見高雄</h1>
  </div>
  <subs :data='data' :sta='ubike' @isbig='showinfo'/> 
  <umap :sta='ubike' :cen='center' v-if="ubike.length>10&&!isbig"/>
  <footer>
    <h2>本網站之資訊來自高雄市政府</h2>
    <p>全部資訊皆為學習之用途使用</p>
    <p>如有侵犯隱私及著作權之疑慮請告知</p>
  </footer>
</template>

<script>
import subs from './components/sub.vue'
import map from './components/map.vue'
export default {
  name: 'App',
  components:{
    subs:subs,
    umap:map,
  },
  data(){
    return {
      data:[],
      ubike:[],
      isbig:false,
      center: {lat: 22.6351239, lng: 120.3389189},
    }
  },
  methods:{
    showinfo(input){
      this.isbig=input;
    }
  },
  mounted(){
    fetch('https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json')
    .then(res=>{
      return res.json();
    })
    .then(res=>{
      this.data = res.result.records
    })

    fetch('https://apis.youbike.com.tw/api/front/station/all?lang=tw&type=2')
    .then(res=>{
      return res.json();
    })
    .then(res=>{
      this.ubike=res.retVal
    })
      // fetch('https://api.kcg.gov.tw/api/service/get/9c8e1450-e833-499c-8320-29b36b7ace5c')
      // .then(res=>{
      //   return res.json();
      // })
      // .then(res=>{
      //   this.data = res.data.XML_Head.Infos.Info
      // })

      // fetch('https://api.kcg.gov.tw/api/service/Get/b4dd9c40-9027-4125-8666-06bef1756092')
      // .then(res=>{
      //   return res.json();
      // })
      // .then(res=>{
      //   this.ubike=res.data.retVal
      // })
  }
}
</script>

<style lang="scss">
*{
  margin: 0%;
  padding: 0%;
}
body{
  background-color: #fcfcfc;
  #app {
    width: 100%;
    overflow: hidden;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
    nav{
      background: #fff;
      width: 90%;
      position: fixed;
      padding: .8% 8%;
      display: flex;
      justify-content: space-between;
      box-shadow: 0em .3em .1em 0 rgba(51, 51, 51, 0.707);
      z-index: 1;
      img{
        width: 100px;
        cursor: pointer;
      }
      a{
        font-size: 1.2rem;
        color: #2c3e50;
        text-decoration: none;
        &:hover{
          border-bottom: solid .1em #2c3e50;
        }
      }
      .section{
        width: 30%;
        font-weight: 600;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }
    }
    .landing{
      margin-top: 3.5%;
      height:32.5vh;
      overflow: hidden;
      position: relative;
      background-color: rgba(0, 0, 0, 0.623);
      color: #fcfcfc;
      display: flex;
      justify-content: center;
      align-items: center;
      h1{
        margin: 0px;
        padding: 0px;
        text-shadow: 0.1em 0.1em 0.5em black;
        position: absolute;
        font-size: 2.5em;
      }
      img{
        position: absolute;
        width:100vw;
        opacity: .6;
      }
    }
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
  }
}
</style>
