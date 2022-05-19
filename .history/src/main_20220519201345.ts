import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/HomePage.vue'
import LogIn from './views/LoginPage.vue'
import App from './App.vue'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn
    }
  ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
