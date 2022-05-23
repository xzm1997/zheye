import { createApp } from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'

import App from './App.vue'

axios.get('http://api.imooc.com/api/columns?icode={}').then(resp => {
  console.log(resp.data)
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
