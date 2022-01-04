<template>
    <div class="sinfo">
        <h1>
            ubike資訊
        </h1>
    </div>
    <div class="contaner">
        <h1>ubike資訊(共{{sta.length}}筆)</h1>
        <GMapMap
            :center="center"
            :zoom="18"
            style="width: 500px; height: 300px"
        >
    <GMapCluster>
      <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :icon="m.icon"
          :title="m.title"
          @click="choose(m,index)"
      />
    </GMapCluster>
  </GMapMap>
        <div class="tag">
            <i class="bi bi-google"></i>
        </div>
    </div>
    <div class="linfo" v-if="info.length>0">
        <bike :data="info"></bike>
        <div class="text">
            <h2>{{info[0].name_tw}}</h2>
            <h3>地區:&nbsp;&nbsp;{{info[0].scity}}&nbsp;{{info[0].district_tw}}</h3>
            <h3>區域:&nbsp;&nbsp;{{info[0].address_tw}}</h3>
            <h3 v-show="info[0].empty_spaces">共有{{info[0].parking_spaces}}個位置,{{info[0].available_spaces}}個可借+{{info[0].empty_spaces}}個可還</h3>
        </div>
    </div>
</template>
<script>
import bike from "./bikeinfo.vue"
export default {
  name: 'umap',
  props:['sta','cen'],
 components:{
    bike:bike
  },
  data() {
    return {
      center: this.cen,
      markers: [
        {
            title:"test",
            icon:{
                url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                scaledSize: {width: 0, height: 0},
                labelOrigin: {x: 16, y: -10}
            },
            position: {
                lat: 0, lng: 0
            },
        }
      ],
      info: []
    }
  },
  methods:{
      ping(){
        this.sta.forEach(element => {
            if (element.available_spaces==0) {
                this.markers.push({
                    icon:{
                        url:"https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                        scaledSize: {width: 50, height: 50},
                        labelOrigin: {x: 16, y: -10}
                    },
                    title:element.name_tw+" ("+element.available_spaces+"/"+element.parking_spaces+")",
                    position:{
                        lat:parseFloat(element.lat),lng:parseFloat(element.lng)
                    }
                })
            }else if(element.available_spaces<=5){
                this.markers.push({
                    icon:{
                        url:"https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                        scaledSize: {width: 50, height: 50},
                        labelOrigin: {x: 16, y: -10}
                    },
                    title:element.name_tw+" ("+element.available_spaces+"/"+element.parking_spaces+")",
                    position:{
                        lat:parseFloat(element.lat),lng:parseFloat(element.lng)
                    }
                })
            }
            else if(element.available_spaces=="land"){
                console.log("in")
                this.markers.push({
                    icon:{
                        url:"https://static.thenounproject.com/png/331581-200.png",
                        scaledSize: {width: 70, height: 70},
                        labelOrigin: {x: 16, y: -10}
                    },
                    title:element.name_tw,
                    position:{
                        lat:parseFloat(element.lat),lng:parseFloat(element.lng)
                    }
                })
            }else{
                this.markers.push({
                    icon:{
                        url:"https://maps.google.com/mapfiles/ms/icons/green-dot.png",
                        scaledSize: {width: 50, height: 50},
                        labelOrigin: {x: 16, y: -10}
                    },
                    title:element.name_tw+" ("+element.available_spaces+"/"+element.parking_spaces+")",
                    position:{
                        lat:parseFloat(element.lat),lng:parseFloat(element.lng)
                    }
                })
            }
        });

      },
      choose(Info,index){
          this.center=Info.position
          this.info=[]
          this.info.push(this.sta[index-1])
          console.log(index)
      }
  },
  mounted(){
      this.ping()
  }
}
</script>

<style scoped>
    .sinfo{
        margin: auto;
        width: 70%;
        padding-top: 1.5%;
        border-bottom: solid .06em #878787;
        color: #878787;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .sinfo h1{
        color: #2c3e50;
        font-weight: 600;
        font-size: 1.5em;
    }
    .contaner{
        margin: auto;
        position: relative;
        background-color: rgba(51, 51, 51, 0.623);
        width: 77%;
        height: 40vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2%;
        margin-bottom: 2.5%;
    }
    .contaner h1{
        position: absolute;
        color: #fff;
    }
    .vue-map-container{
        position: absolute;
        box-shadow: -.5em .5em .3em 0 rgba(51, 51, 51, 1);
        width: 100%;
        height: 100%;
        opacity: .5;
    }
    .vue-map-container:hover{
        transition: all 1.75s;
        box-shadow: -.5em .5em .3em 0 rgba(51, 51, 51, .7);
        opacity: 1;
    }
    .tag{
        pointer-events: none;
        background: #fff;
        position: absolute;
        padding: .5% 2%;
        font-weight: 400;
        bottom: 6px;
        left: 6px;
        box-shadow: .2em .2em .3em 0 rgba(51, 51, 51, .7);
    }
    .linfo{
        display: flex;
        width: 70%;
        margin:auto
    }
    .text{
        width:100%;
        margin-left: 3%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        line-height:2.5rem;
    }
    .text h2{
        font-size: 1.75rem;
    }
</style>