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
    storage.init()
  }
}
</script>

