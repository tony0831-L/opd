import { createApp } from 'vue'
import App from './App.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'

createApp(App).use(VueGoogleMaps, {load: {key: 'AIzaSyB09PkQtBa7eVsTjZjCuhjx3PiwfodC5N0',}}).mount('#app')
