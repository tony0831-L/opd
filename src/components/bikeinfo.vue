<template>
    <div class="cards">
        <div class="card" v-for="(i,index) in data" :key="index" v-show="index<inde*6&&index>=(inde-1)*6">
            <iframe v-if="index<inde*6&&index>=(inde-1)*6" width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" :src="'https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q='+i.lat+','+i.lng+'&z=16&output=embed'"></iframe>
            <div class="name">
                {{i.sna}}({{i.sbi}}/{{i.tot}})
            </div>
            <div class="info">
                <p><i class="bi bi-tag"></i>&nbsp;{{i.ar}}</p>
            </div>
        </div>
    </div>
    <div class="page" v-if="data.length>1">
        <span @click="prev">&lt; prev</span> &nbsp;&nbsp;&nbsp;{{inde}}/{{num}}&nbsp;&nbsp;&nbsp; <span @click="next">next &gt;</span>
    </div>
</template>

<script>
export default {
    props:['data'],
    data(){
        return{
            inde:1,
            num:0,
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
        }
    },
    mounted(){
        this.resize();
    }
};
</script>

<style scoped>
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
        height: 300px;
        overflow: hidden;
        background-color: rgba(51, 51, 51, 0.623);
        position: relative;
        cursor: pointer;
        margin: 1.2%;
        margin-top: -1%;
    }
    .card:hover{
        transition: all 1s;
        font-size: 1.15rem;
        font-weight: 600;
        background-color: rgba(51, 51, 51, 0.423);
        text-shadow: 0.1em 0.1em 0.5em black
    }
    iframe{
        position:absolute;
        opacity: .5;
    }
    iframe:hover{
        transition: all .75s;
        opacity: .7;
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
        text-align: center;
        font-size: 2rem;
    }
    .page span{
        cursor: pointer;
    }
</style>