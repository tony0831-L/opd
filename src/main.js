import { createApp } from 'vue'
import App from './App.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import router from './router'

createApp(App).use(router).use(VueGoogleMaps, {load: {key: 'AIzaSyB09PkQtBa7eVsTjZjCuhjx3PiwfodC5N0',}}).mount('#app')
