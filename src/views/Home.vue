<template>
  <div class="landing">
    <img src="../assets/the-urban-landscape-1698285.png" alt="" srcset="">
    <h1>遇見高雄</h1>
  </div>
  <div class="sinfo">
      <h1>
          <span>景點一覽</span>
      </h1>
  </div>
    <div class="cards">
      <block v-for="(i,index) in sta" :key="index" :info="i" :index="index" v-show="index<6||showall"/> 
  </div>
  <button class="showall" @click="showall=!showall">
    <span v-show="!showall">展示全部...</span>
    <span v-show="showall">展示部分...</span>
  </button>
  <umap :cen='center'/>
</template>

<script>
import storage from '../utils/storage.js'
import map from '../components/map.vue'
import block from '../components/block.vue'
export default {
  name: 'App',
  components:{
    block:block,
    umap:map,
  },
  data(){
    return {
      showall:false,
      ubike:[],
      sta:[],
      center: {lat: 22.6351239, lng: 120.3389189},
    }
  },
  methods:{
    showinfo(input){
      this.isbig=input;
    },
    init(){
      this.ubike=storage.getBike();
      this.sta = storage.getSta();
      try {
        if(!this.sta.length||!this.ubike.length){
          setTimeout(()=>{this.init()},1000)
        }
      } catch (error) {
        console.log(error)
        setTimeout(()=>{this.init()},1000)
      }
    }
  },
  mounted(){
    this.init()
  }
}
</script>

<style lang="scss">
  #app {
    width: 100%;
    overflow: hidden;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
    .landing{
      margin-top: 2.3rem;
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
        font-size: 2.5rem;
      }
      img{
        position: absolute;
        width:100vw;
        opacity: .6;
      }
    }
    .sinfo{
      margin: auto;
      width: 70%;
      padding-top: 1.5%;
      border-bottom: solid .06em #878787;
      color: #878787;
      display: flex;
      align-items: center;
      justify-content: center;
      h1{
          color: #2c3e50;
          font-weight: 600;
          font-size: 1.5em;
          .back{
              cursor: pointer;
              &:hover{
                  transition: all .5s;
                  font-size: 1.6rem;
              }
          }
      }
    }
    .cards{
      padding: 2% 6%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
      align-items: center;
      gap: 2rem 2rem;
      .page{
          width: 94%;
          display: flex;
          justify-content: space-between;
          position:absolute;
          text-align: center;
          font-size: 5rem;
          span{
              cursor: pointer;
          }
      }
    }
    .showall{
      color: #313131;
      border-radius: .3rem;
      border: none;
      background-color: #fcfcfc;
      padding: .3rem;
      box-shadow: 0em 0em .1em .1rem rgba(51, 51, 51, 0.707);
      font-size: 1.5rem;
      font-weight: 600;
      margin: 2%;
      cursor: pointer;
      &:hover{
        transition: all .25s;
        font-size: 1.53rem;
      }
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 425px) {
    #app {
      .landing{
        margin-top: 2.3rem;
        height:18vh;
        h1{
          font-size: 2rem;
        }
      }
      .cards{
        padding: 2% 0%;
        grid-template-columns: 1fr;
      }
    }
  }
  @media only screen and (min-width: 425px) and (max-width: 1400px){
    #app {
      .landing{
        margin-top: 2.3rem;
        height:25vh;
        h1{
          font-size: 2rem;
        }
      }
      .cards{
        padding: 2% 0%;
        grid-template-columns: 1fr;
      }
    }
  }
</style>
