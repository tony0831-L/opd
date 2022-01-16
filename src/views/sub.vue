<template>
  <div class="landing">
    <img src="../assets/the-urban-landscape-1698285.png" alt="" srcset="">
    <h1>遇見高雄</h1>
  </div>
    <div class="biginfo">
        <div class="banner">
            <img :src="info.Picture1" alt="">
            <h1>{{info.Name}}</h1>
        </div>
        <div class="des">
            <h2>景點概述</h2>
            <p>{{info.Toldescribe}}</p>
        </div>
        <div class="mapinfo">
            <h2>位置資訊</h2>
            <div class="row">
                <iframe width="50%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" :src="'https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q='+info.Py+','+info.Px+'&z=16&output=embed'"></iframe>
                <div class="minfo">
                    <h3>地圖資訊</h3>
                    {{info.Add}}
                    <div class="tra">{{info.Travellinginfo}}</div>
                </div>
            </div>
        </div>
        <umap v-if="bike.length>2" :sta='bike' :cen="center"></umap>
    </div>
</template>

<script>
import storage from '../utils/storage.js'
import map from '../components/map.vue'
export default {
    name:"sub",
    components:{
        umap:map,
    },
    data(){
        return{
            bike:[],
            info:{},
            center:{}
        }
    },
    methods:{
        init(){
            this.info=storage.getSta()[this.$route.query.index];
            this.bike=storage.getBike();
            if(!this.bike.length){
                this.init()
                setTimeout(()=>{
                    this.init()
                },1000)
            }
        }
    },
    mounted(){
        if(!this.$route.query.index){
            console.error("query error")
            this.$router.push('/')
        }else{
            try {
                this.init()
                this.center ={
                    lat:parseFloat(this.info.Py),
                    lng:parseFloat(this.info.Px)
                }
                this.bike.push({"address_tw":this.info.Add,"name_tw":this.info.Name,"available_spaces":"land","district_tw":this.info.Zone,"lat":parseFloat(this.info.Py),"lng":parseFloat(this.info.Px)})
            } catch (error) {
                this.$router.push({ path: '/sub',query:{index:this.$route.query.index}})
            }
        }
    },
};
</script>

<style scoped lang="scss">
@import url('../sass/anime.scss');
.biginfo{
    display: flex;
    flex-direction: column;
    padding: 0% 15%;
    background: none;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-top: 2.3rem;
    margin-bottom: 2%;
    .banner{
        animation-name: flyinTop;
        animation-duration: 1.5s;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 16rem;
        overflow: hidden;
        background-color: rgba(51, 51, 51, 0.723);
        margin-bottom: 2%;
        z-index: 9;
        h1{
            font-size: 2.1rem;
            color: #fff;
            position: absolute;
            text-shadow: 0.1em 0.1em 0.5em black
        }
        img{
            animation-name: fadein;
            animation-duration: 1.5s;
            position: absolute;
            width: 100%;
            opacity: .5;
        }
    }
    .mapinfo{
        animation-name: flyinTop;
        animation-duration: 1.5s;
        z-index: 8;
        width: 100%;
        display: flex;
        height: 20rem;
        position: relative;
        flex-direction: column;
        h2{
            text-align: center;
            border-bottom: solid .06em #878787;
            margin-bottom: 2rem;
            font-size: 1.5rem;
        }
        .row{
            display: flex;
            width: 100%;
            height: 100%;
            .minfo{
                display: flex;
                width: 50%;
                padding: 5%;
                font-size: 1.5rem;
                flex-direction: column;
                justify-content: center;
                h3{
                    padding: 0% .2%;
                    font-weight: 600;
                    color: #333;
                    font-size: 1.75rem;
                }
                .tra{
                    margin-top: .8rem;
                    font-size: .8rem;
                }
            }
        }
    }
    .des{
        animation-name: flyinTop;
        animation-duration: 1.5s;
        z-index: 8;
        text-align: left;
        font-size: 1.2rem;
        margin-bottom: 2%;
        h2{
            text-align: center;
            border-bottom: solid .06em #878787;
            margin-bottom: 2rem;
            font-size: 1.5rem;
        }
    }
}

@media only screen and (min-width: 0px) and (max-width: 425px) {
    .biginfo{
        padding: 0% 4%;
        .mapinfo{
            h2{
                text-align: center;
                border-bottom: solid .06em #878787;
                margin-bottom: 2rem;
                font-size: 1.5rem;
            }
            .row{
                padding: 4% 10%;
                .minfo{
                    width: 30%;
                    padding: 5%;
                    font-size: 1rem;
                    h3{
                        font-size: 1.25rem;
                    }
                }
            }
        }
        .des{
            padding: 4% 10%;
            text-align: left;
            font-size: 1.2rem;
            margin-bottom: 2%;
            h2{
                text-align: center;
                border-bottom: solid .06em #878787;
                margin-bottom: 2rem;
                font-size: 1.5rem;
            }
        }
    }
}
</style>