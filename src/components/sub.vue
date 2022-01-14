<template>
    <div class="sinfo">
        <h1>
            <span>景點一覽</span>
        </h1>
    </div>
    <div class="cards" v-show="!isbig">
        <div class="page">
            <span @click="prev">&lt;</span><span @click="next">&gt;</span>
        </div>
        <div class="card" v-for="(i,index) in data" :key="index" v-show="index<inde*6&&index>=(inde-1)*6" @click="choose(i,index)">
            <img :src="i.Picture1" alt="">
            <div class="name">
                {{i.Name}}
            </div>
            <div class="info">
                <p><i class="bi bi-clock"></i>&nbsp;&nbsp;{{i.Opentime}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import storage from '../utils/storage.js'
export default {
    data(){
        return{
            inde:1,
            num:0,
            data:{},
            sta:[],
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
        choose(i,index){
            this.$router.push({ path: '/sub',query:{index:index}})
            storage.setChoise(i)
        },
        back(){
            this.isbig=false;
            this.$emit('isbig',false)
        }
    },
    mounted(){
        this.resize();
        this.data = storage.getSta();
        this.sta = storage.getBike();
    }
};
</script>

<style scoped lang="scss">
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
        .card{
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;
            width: 29rem;
            height: 11.25rem;
            overflow: hidden;
            background-color: rgba(51, 51, 51, 0.623);
            position: relative;
            cursor: pointer;
            &:hover{
                transition: all 1s;
                font-size: 1.15rem;
                font-weight: 600;
                background:none;
                text-shadow: 0.1em 0.1em 0.5em black
            }
            img{
                position:absolute;
                height: 21.6rem;
                opacity: .7;
                &:hover{
                    height: 22.5rem;
                    transition: all .75s;
                    opacity: .9;
                }
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
            .name{
                pointer-events: none;
                position:absolute;
                flex-direction: column;
                color: #fcfcfc;
            }
        }
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
    @media only screen and (min-width: 0px) and (max-width: 425px) {
        .cards{
            padding: 2% 6%;
            grid-template-columns: 1fr;
            gap: 2rem 2rem;
            .card{
                width: 20rem;
                height: 9.5rem;
                cursor: pointer;
                &:hover{
                    transition: all 1s;
                    font-size: 1.15rem;
                    font-weight: 600;
                    background:none;
                    text-shadow: 0.1em 0.1em 0.5em black
                }
            }
            .page{
                width: 96%;
                font-size: 2.5rem;
            }
        }
  }
</style>