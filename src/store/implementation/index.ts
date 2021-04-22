import { combineReducers } from 'redux'
import rootSaga from './middleware'
import initializeStore from './InitializeStore'
import { reducer } from './states/UsersState'
import { postsReducer } from './states/PostsState'
import { tagsReducer } from './states/TagsState'
import { authReducer } from './states/AuthState'

export const reducers = combineReducers({
  users: reducer,
  posts: postsReducer,
  tags: tagsReducer,
  auth: authReducer
})

export default () => {
  
  let { store, persistor } = initializeStore(reducers, rootSaga)


  return {
    store,
    persistor
  }
}