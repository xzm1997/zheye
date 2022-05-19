import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views'
import App from './App.vue'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: 
    }
  ]
})

createApp(App).mount('#app')
