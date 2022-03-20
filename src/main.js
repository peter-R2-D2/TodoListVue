import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import FontAwesomeIcon from './utilities/icons'

createApp(App).component('font-icon', FontAwesomeIcon).use(store).mount('#app')
