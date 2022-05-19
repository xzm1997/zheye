import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory
})

createApp(App).mount('#app')
