import { DefaultActionCreators } from "reduxsauce"
import { ResponseError } from "../../../model/types/ResponseError"
import { ILoginAction, ILoginErrorAction, ILoginSuccessAction, ISaveCredentialsAction } from "./IAuthActions"

export interface IAuthActionCreator extends DefaultActionCreators {
    login: (userName: string, password: string) => ILoginAction
    loginSuccess: (token?: string) => ILoginSuccessAction
    loginError: (error: ResponseError) => ILoginErrorAction
    saveCredentials: (userName: string, password: string) => ISaveCredentialsAction
}