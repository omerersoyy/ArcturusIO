import { ResponseError } from "../../../model/types/ResponseError";

export interface IAuthState {
    userName: string
    password: string
    token: string
    loggedIn: boolean
    error: ResponseError | null
    fetching: boolean
}