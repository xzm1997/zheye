import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import LogIn from './views/LoginPage.vue'
import ColumnDetail from './views/ColumnDetail.vue'
import CreatePost from './views/CreatePost.vue'
import SignupPage from './views/SignupPage.vue'
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
      component: LogIn,
      meta: { redirectAlreadyLogin: true }
    },
    {
      path: '/column/:id',
      name: 'column',
      component: ColumnDetail
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePost,
      meta: { requiredLogin: true }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage
    }
  ]
})
router.beforeEach((to, from, next) => {
  const { user, token } = store
  const { requiredLogin, redirectAlreadyLogin } = to.meta
  if (!user.isLogin) {

  } else {
    if (redirectAlreadyLogin) {
      
    }
  }
})

export default router
