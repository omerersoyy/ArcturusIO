import { AnyAction } from "redux";
import { ResponseError } from "../../../model/types/ResponseError";
import { User } from "../../../model/types/User";

export interface IGetUsersAction extends AnyAction {
    type: string,
    page: number
    limit: number
}

export interface IGetUsersSuccessAction extends AnyAction {
    type: string,
    users: Array<User>
}

export interface IGetSingleUserAction extends AnyAction {
    type: string,
    userId: string
}

export interface IGetSingleUserSuccessAction extends AnyAction {
    type: string,
    currentUser: User
}

export interface IUsersErrorAction extends AnyAction {
    type: string,
    error: ResponseError
}