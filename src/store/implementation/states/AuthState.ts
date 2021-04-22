import { createActions, createReducer } from 'reduxsauce'
import Immutable, { ImmutableObject } from 'seamless-immutable'
import { IAuthActionTypes } from '../../abstraction/auth/IAuthActionTypes'
import { IAuthActionCreator } from '../../abstraction/auth/IAuthActionCreators'
import { IAuthState } from '../../abstraction/auth/IAuthState'
import { ILogin, ILoginError, ILoginSuccess, ISaveCredentials } from '../../abstraction/auth/IReducerProps'


const { Types, Creators } = createActions<IAuthActionTypes, IAuthActionCreator>({
    login: ['userName, password'],
    loginSuccess: ['token'],
    loginError: ['error'],
    saveCredentials: ['userName', 'password']
})

export const AuthActionTypes = Types
export default Creators

const initialState: ImmutableObject<IAuthState> = Immutable({
    userName: "",
    password: "",
    token: "",
    error: null,
    loggedIn: false,
    fetching: false
})

export const login: ILogin = (state, { userName, password }): ImmutableObject<IAuthState> => {
    return state.merge({ fetching: true, userName, password, error: initialState.error })
}

export const loginSuccess: ILoginSuccess = (state, { token }): ImmutableObject<IAuthState> => {
    return state.merge({ token, loggedIn: true, fetching: initialState.fetching, error: initialState.error })
}

export const loginError: ILoginError = (state, { error }): ImmutableObject<IAuthState> => {
    return state.merge({ error, fetching: initialState.fetching })
}

export const saveCredentials: ISaveCredentials = (state): ImmutableObject<IAuthState> => {
    return state
}


export const authReducer = createReducer(initialState, {
    [Types.LOGIN]: login,
    [Types.LOGIN_SUCCESS]: loginSuccess,
    [Types.LOGIN_ERROR]: loginError,
    [Types.SAVE_CREDENTIALS]: saveCredentials
})