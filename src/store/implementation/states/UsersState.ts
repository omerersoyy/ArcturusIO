import { createActions, createReducer } from 'reduxsauce'
import Immutable, { ImmutableObject } from 'seamless-immutable'
import { IUsersState } from '../../abstraction/users/IUsersState'
import { IUsersActionCreateor } from '../../abstraction/users/IUsersActionCreators'
import { IGetUsers, IGetUsersSuccess, IGetUsersError, IGetSingleUser, IGetSingleUserSuccess, IGetSingleUserError } from '../../abstraction/users/IReducerProps'
import { IUsersActionTypes } from '../../abstraction/users/IUsersActionTypes'

  

const { Types, Creators } = createActions<IUsersActionTypes, IUsersActionCreateor>({
    getUsers: ['page, limit'],
    getUsersSuccess: ['users'],
    getUsersError: ['error'],
    getSingleUser: ['userId'],
    getSingleUserSuccess: ['currentUser'],
    getSingleUserError: ['error']
})

export const UsersActionTypes = Types
export default Creators

const initialState: ImmutableObject<IUsersState> = Immutable({
    users: [],
    currentUser: null,
    userId: "",
    fetching: false,
    error: null,
    page: 0,
    limit: 0
})



export const getUsers: IGetUsers = (state, {page, limit}): ImmutableObject<IUsersState> => {
    return state.merge({ fetching: true, page, limit, error: initialState.error })
}

export const getUsersSuccess: IGetUsersSuccess = (state, { users }): ImmutableObject<IUsersState> => {
    return state.merge({ users, fetching: initialState.fetching, error: initialState.error })
}

export const getUsersError: IGetUsersError = (state, { error }): ImmutableObject<IUsersState> => {
    return state.merge({ error, fetching: initialState.fetching })
}

export const getSingleUser: IGetSingleUser = (state, {userId}): ImmutableObject<IUsersState> => {
    return state.merge({ fetching: true, userId, error: initialState.error })
}

export const getSingleUserSuccess: IGetSingleUserSuccess = (state, { currentUser }): ImmutableObject<IUsersState> => {
    return state.merge({ currentUser, fetching: initialState.fetching, error: initialState.error })
}

export const getSingleUserError: IGetSingleUserError = (state, { error }): ImmutableObject<IUsersState> => {
    return state.merge({ error, fetching: initialState.fetching })
}


export const reducer = createReducer<ImmutableObject<IUsersState>>(initialState, {
    [Types.GET_USERS]: getUsers,
    [Types.GET_USERS_SUCCESS]: getUsersSuccess,
    [Types.GET_USERS_ERROR]: getUsersError,
    [Types.GET_SINGLE_USER]: getSingleUser,
    [Types.GET_SINGLE_USER_SUCCESS]: getSingleUserSuccess,
    [Types.GET_SINGLE_USER_ERROR]: getSingleUserError
})