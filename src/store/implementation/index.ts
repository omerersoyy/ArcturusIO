import { combineReducers } from 'redux'
import rootSaga from './middleware'
import initializeStore from './InitializeStore'

export const reducers = combineReducers({
  user: require('./states/UsersState').reducer
})

export default () => {
  
  let { store, persistor } = initializeStore(reducers, rootSaga)


  return {
    store,
    persistor
  }
}