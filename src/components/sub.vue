<template>
    <div class="sinfo">
        <h1>
            <span v-show="!isbig">景點一覽</span><span v-show="isbig">景點資訊<i class="bi bi-arrow-return-left back" @click="back()"></i></span>
        </h1>
    </div>
    <div class="cards" v-show="!isbig">
        <div class="page">
            <span @click="prev">&lt;</span><span @click="next">&gt;</span>
        </div>
        <div class="card" v-for="(i,index) in data" :key="index" v-show="index<inde*6&&index>=(inde-1)*6" @click="choose(i)">
            <img :src="i.Picture1" alt="">
            <div class="name">
                {{i.Name}}
            </div>
            <div class="info">
                <p><i class="bi bi-clock"></i>&nbsp;&nbsp;{{i.Opentime}}</p>
            </div>
        </div>
    </div>
    <biginfo v-if="isbig" :info="info" :sta="sta"></biginfo>
</template>

<script>
import biginfo from './biginfo.vue'
export default {
    props:['data','sta'],
    components:{
        biginfo:biginfo,
    },
    data(){
        return{
            inde:1,
            num:0,
            info:{},
            isbig:false,
        }
    },
    methods:{
        resize(){
            this.num=Math.round(this.data.length/6)
        },
        next(){
            this.resize();
            if (this.inde!=this.num) {
                this.inde++;
            } else {
                this.inde=1;
            }
        },
        prev(){
            this.resize();
            if (this.inde!=1) {
                this.inde--;
            } else {
                this.inde=this.num;
            }
        },
        choose(i){
            this.isbig=true;
            this.info=i;
            this.$emit('isbig',true)
            console.log(i)
        },
        back(){
            this.isbig=false;
            this.$emit('isbig',false)
        }
    },
    mounted(){
        this.resize();
    }
};
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
    .cards{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .card{
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        width: 464px;
        height: 180px;
        overflow: hidden;
        background-color: rgba(51, 51, 51, 0.623);
        position: relative;
        cursor: pointer;
        margin: 1.2%;
    }
    .card:hover{
        transition: all 1s;
        font-size: 1.15rem;
        font-weight: 600;
        background:none;
        text-shadow: 0.1em 0.1em 0.5em black
    }
    img{
        position:absolute;
        height: 346px;
        opacity: .7;
    }
    img:hover{
        height: 360px;
        transition: all .75s;
        opacity: .9;
    }
    .name{
        pointer-events: none;
        position:absolute;
        flex-direction: column;
        color: #fcfcfc;
    }
    .info{
        pointer-events: none;
        position: absolute;
        bottom: 5px;
        left: 10px;
        color: #fcfcfc;
        font-size: .6rem;
        text-align: left;
        background-color: rgba(51, 51, 51, 0.623);
        padding: 1% 2%;
        font-weight: 400;
    }
    .page{
        width: 94%;
        display: flex;
        justify-content: space-between;
        position:absolute;
        text-align: center;
        font-size: 5rem;
    }
    .page span{
        cursor: pointer;
    }
    .back{
        cursor: pointer;
    }
    .back:hover{
        transition: all .5s;
        font-size: 1.6rem;
    }
</style>