import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/index'
import FontAwesomeIcon from './utilities/icons'
import './index.css'

createApp(App).component('font-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
