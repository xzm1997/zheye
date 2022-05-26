import { createApp } from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'

import App from './App.vue'
axios.defaults.baseURL = 'http://localhost:3001/api'
axios.interceptors.request.use(config => {
  // console.log('request')
  store.commit('setLoading', true)
  return config
})

axios.interceptors.response.use(config => {
  store.commit('setLoading', false)
  // console.log('response')
  return config
}, e => {
  // console.log(e.response)
  const { error } = e.response.data
  store.commit(s)
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
