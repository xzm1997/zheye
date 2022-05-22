import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import LogIn from './views/LoginPage.vue'
import ColumnDetail from './views/ColumnDetail.vue'
import CreatePost from './views/CreatePost.vue'
import store from './store'

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
    },
    {
      path: '/column/:id',
      name: 'column',
      component: ColumnDetail
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePost
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && )
})

export default router
