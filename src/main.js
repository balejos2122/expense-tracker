import { createApp } from 'vue'
import Toast from 'vue-toastification'
import 'view-toastification/dist/index.css'

import './assets/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(Toast)
app.mount('#app')
