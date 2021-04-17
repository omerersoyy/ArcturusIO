import { AnyAction, combineReducers } from 'redux'
import rootSaga from './middleware'
import initializeStore from './InitializeStore'
import { IUsersState } from '../abstraction/users/IUsersState'
import { Reducer } from 'react'
import { reducer } from './states/UsersState'
import { postsReducer } from './states/PostsState'

export const reducers = combineReducers({
  users: reducer,
  posts: postsReducer
})

export default () => {
  
  let { store, persistor } = initializeStore(reducers, rootSaga)


  return {
    store,
    persistor
  }
}