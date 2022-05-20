import { createStore } from 'vuex'
import { testData, testPosts, ColumnProps, PostProps } from './testData'

const store = createStore({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false }
  }
})

export default store
