import { DefaultActionCreators } from "reduxsauce"
import { ResponseError } from "../../../model/types/ResponseError"
import { User } from "../../../model/types/User"
import { IGetSingleUserAction, IGetSingleUserSuccessAction, IGetUsersAction, IGetUsersSuccessAction, IUsersErrorAction } from "./IUsersActions"

export interface IGetUsersActionCreateor extends DefaultActionCreators {
    getUsers: (page: number, limit: number) => IGetUsersAction
    getUsersSuccess: (user: Array<User>) => IGetUsersSuccessAction,
    getUsersError: (error: ResponseError) => IUsersErrorAction,
    getSingleUser: (userId: string) => IGetSingleUserAction,
    getSingleUserSuccess: (user: User) => IGetSingleUserSuccessAction,
    getSingleUserEror: (error: ResponseError) => IUsersErrorAction
}