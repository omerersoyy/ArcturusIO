import { combineReducers } from 'redux'
import rootSaga from '../sagas/'
import configureStore from './InitializeStore'

export const reducers = combineReducers({
  //user: require('./UserRedux').reducer
})

export default () => {
  
  let { store, persistor } = configureStore(reducers, rootSaga)


  return {
    store,
    persistor
  }
}