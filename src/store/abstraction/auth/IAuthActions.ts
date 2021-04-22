import { AnyAction } from "redux";
import { ResponseError } from "../../../model/types/ResponseError";

export interface ILoginAction extends AnyAction {
    type: string
    userName: string
    password: string
}

export interface ILoginSuccessAction extends AnyAction {
    type: string,
    token: string
}

export interface ILoginErrorAction extends AnyAction {
    type: string
    error: ResponseError
}

export interface ISaveCredentialsAction extends AnyAction {
    type: string
    userName: string
    password: string
}