<template>
<headerTop/>
  <router-view/>
<foot/>
</template>

<script>
import headerTop from './components/header.vue'
import foot from './components/footer.vue'
import storage from './utils/storage.js'
export default {
  name:"app",
  components: {
    headerTop,foot
  },
  setup(){
    storage.init().then(res=>{
      console.log(res)
    })
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
  font-size: 100%;
}
</style>

