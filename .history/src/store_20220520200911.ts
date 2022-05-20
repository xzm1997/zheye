import { createStore } from 'vuex'
import { testData, testPosts } from './testData'

const store = createStore({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false }
  }
})

export default store
