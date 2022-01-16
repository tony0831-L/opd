<template>
    <div class="card" @click="choose(info,index)">
        <img :src="info.Picture1" alt="">
        <div class="name">
            {{info.Name}}
        </div>
        <div class="info">
            <p><i class="bi bi-clock"></i>&nbsp;&nbsp;{{info.Opentime}}</p>
        </div>
    </div>
</template>

<script>
import storage from '../utils/storage.js'
export default {
    name:"block",
    props:["info","index"],
    methods:{
        choose(i,index){
            this.$router.push({ path: '/sub',query:{index:index}})
            storage.setChoise(i)
        }
    }
}
</script>

<style scoped lang="scss">
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
    @media only screen and (min-width: 0px) and (max-width: 425px) {
        .card{
            width: 20rem;
            height: 9.5rem;
        }
    }
    @media only screen and (min-width: 425px) and (max-width: 768px){
        .card{
            width: 24rem;
            height: 10rem;
        }
  }
</style>