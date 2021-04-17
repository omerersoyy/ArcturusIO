import { createActions, createReducer } from 'reduxsauce'
import Immutable, { ImmutableObject } from 'seamless-immutable'
import { IUsersState } from '../../abstraction/users/IUsersState'
import { IGetUsers } from '../../abstraction/users/IGetUsers'
import { IGetUsersSuccess } from '../../abstraction/users/IGetUsersSuccess'
import { IGetUsersError } from '../../abstraction/users/IGetUsersError'


const { Types, Creators } = createActions({
    getUsers: ['page, limit'],
    getUsersSuccess: ['users'],
    getUsersError: ['error'],
    getSingleUser: ['userId'],
})

export const UsersActionTypes = Types
export default Creators

const initialState: ImmutableObject<IUsersState> = Immutable({
    users: [],
    currentUser: null,
    userId: "",
    fetching: false,
    error: "",
    page: 0,
    limit: 0
})



export const getUsers: IGetUsers = (state, {page, limit}): ImmutableObject<IUsersState> => {
    return state.merge({ fetching: true, page, limit, error: initialState.error })
}

export const getUsersSuccess: IGetUsersSuccess = (state, { users }) => {
    return state.merge({ users, fetching: initialState.fetching, error: initialState.error })
}

export const getUsersError: IGetUsersError = (state, { error }) => {
    return state.merge({ error, fetching: initialState.fetching })
}


export const reducer = createReducer(initialState, {
    [Types.GET_USERS]: getUsers,
    [Types.GET_USERS_SUCCESS]: getUsersSuccess,
    [Types.GET_USERS_ERROR]: getUsersError
})