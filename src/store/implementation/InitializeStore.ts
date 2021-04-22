import { createStore, applyMiddleware, Reducer, AnyAction, CombinedState } from 'redux'
import createSagaMiddleware, { Saga } from 'redux-saga'
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import { ImmutableObject } from 'seamless-immutable'
import { IUsersState } from '../abstraction/users/IUsersState'
import { IPostsState } from '../abstraction/posts/IPostsState'
import { ITagsState } from '../abstraction/tags/ITagsState'
import { IAuthState } from '../abstraction/auth/IAuthState'

export default (rootReducer: Reducer<CombinedState<{ 
    users: ImmutableObject<IUsersState>,
    posts: ImmutableObject<IPostsState>,
    tags: ImmutableObject<ITagsState>,
    auth: ImmutableObject<IAuthState>
 }>, AnyAction>, rootSaga: Saga) => {

    const middleware = []
    const sagaMiddleware = createSagaMiddleware()
    middleware.push(sagaMiddleware)


    const persistConfig = {
        key: 'root',
        storage: AsyncStorage,
        whitelist: ['user']
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