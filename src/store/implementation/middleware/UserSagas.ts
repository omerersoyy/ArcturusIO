import { ApiResponse } from 'apisauce'
import { call, put } from 'redux-saga/effects'
import { DummyApiService } from '../../../model/rest/implementation/DummyApiService'
import { User } from '../../../model/types/User'
import UsersActions from '../states/UsersState'


export function* getUsers(service: DummyApiService, { page, limit }: ReturnType<typeof UsersActions.getUsers>) {

    const response: ApiResponse<Array<User>> = yield service.getUsers(page, limit)

    if (response.ok) {
        yield put(UsersActions.getUsersSuccess(response.data as Array<User>))
    } else {
        yield put(UsersActions.getUsersError({
            definition: response.originalError?.response?.data || "Unknown Error!",
            code: response.originalError?.code
        }))
    }
}

export function* getSingleUser(service: DummyApiService, { userId }: ReturnType<typeof UsersActions.getSingleUser>) {

    const response: ApiResponse<User> = yield service.getSingleUser(userId)

    if (response.ok) {
        yield put(UsersActions.getSingleUserSuccess(response.data as User))
    } else {
        yield put(UsersActions.getSingleUserError({
            definition: response.originalError?.response?.data || "Unknown Error!",
            code: response.originalError?.code
        }))
    }
}