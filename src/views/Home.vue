<template>
  <div class="landing">
    <img src="../assets/the-urban-landscape-1698285.png" alt="" srcset="">
    <h1>遇見高雄</h1>
  </div>
  <subs @isbig='showinfo'/> 
  <umap :sta='ubike' :cen='center' v-if="ubike.length>10"/>
</template>

<script>
import storage from '../utils/storage.js'
import subs from '../components/sub.vue'
import map from '../components/map.vue'
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
      center: {lat: 22.6351239, lng: 120.3389189},
    }
  },
  methods:{
    showinfo(input){
      this.isbig=input;
    }
  },
  mounted(){
    this.ubike=storage.getBike();
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
        font-size: 2.5em;
      }
      img{
        position: absolute;
        width:100vw;
        opacity: .6;
      }
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 425px) {
    #app {
      .landing{
        margin-top: 2.3rem;
        height:18vh;
        h1{
          font-size: 2.5em;
        }
      }
    }
  }
</style>
