import { createStore } from 'vuex'
import { testData, testPosts, ColumnProps, PostProps } from './testData'

interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}

export interface GlobalDataProps {
  col
}

const store = createStore({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false }
  }
})

export default store
