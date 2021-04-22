import { ApiOkResponse, ApiResponse } from 'apisauce'
import { act } from 'react-test-renderer'
import { call, put, take } from 'redux-saga/effects'
import { DummyApiService } from '../../../model/rest/implementation/DummyApiService'
import { User } from '../../../model/types/User'
import { UsersResponse } from '../../../model/types/UsersResponse'
import UsersActions from '../states/UsersState'


export function* getUsers(service: DummyApiService, action: any) {

    const response = yield service.getUsers(action.page, action.limit)

    if (response.ok) {
        yield put(UsersActions.getUsersSuccess(response.data?.data || []))
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