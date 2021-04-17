import { createStore, applyMiddleware, Reducer, AnyAction, CombinedState } from 'redux'
import createSagaMiddleware, { Saga } from 'redux-saga'
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist'

export default (rootReducer: Reducer<CombinedState<{ user: unknown; }>, AnyAction>, rootSaga: Saga) => {

    const middleware = []
    const sagaMiddleware = createSagaMiddleware()
    middleware.push(sagaMiddleware)


    const persistConfig = {
        key: 'root',
        storage: AsyncStorage,
        whitelist: []
    }

    const persistedReducer = persistReducer(persistConfig, rootReducer)

    const store = createStore(persistedReducer, applyMiddleware(...middleware))
    const persistor = persistStore(store)

    sagaMiddleware.run(rootSaga)

    return {
        store,
        persistor
    }
}