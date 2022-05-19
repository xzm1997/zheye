import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import LogIn from './views/LoginPage.vue'
import App from './App.vue'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
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
