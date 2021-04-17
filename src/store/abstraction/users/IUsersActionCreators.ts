import { DefaultActionCreators } from "reduxsauce"
import { User } from "../../../model/types/User"
import { IGetUsersAction, IGetUsersSuccessAction } from "./IUsersActions"

export interface IGetUsersActionCreateor extends DefaultActionCreators {
    getUsers: (page: number, limit: number) => IGetUsersAction
    getUsersSuccess: (user: Array<User>) => IGetUsersSuccessAction
}