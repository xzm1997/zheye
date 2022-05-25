import { createApp } from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'

import App from './App.vue'
axios.defaults.baseURL = 'http://localhost:3001/api'

axios.get('/columns', { params: { key: 'hello' } }).then(resp => {
  console.log(resp.data)
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')