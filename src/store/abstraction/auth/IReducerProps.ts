import { ImmutableObject } from "seamless-immutable";
import { ILoginAction, ILoginErrorAction, ILoginSuccessAction, ISaveCredentialsAction } from "./IAuthActions";
import { IAuthState } from "./IAuthState";

export interface ILogin {
    (
        state: ImmutableObject<IAuthState>,
        action: ILoginAction
    ): ImmutableObject<IAuthState>;
}

export interface ILoginSuccess {
    (
        state: ImmutableObject<IAuthState>,
        action: ILoginSuccessAction
    ): ImmutableObject<IAuthState>;
}

export interface ILoginError {
    (
        state: ImmutableObject<IAuthState>,
        action: ILoginErrorAction
    ): ImmutableObject<IAuthState>;
}

export interface ISaveCredentials {
    (
        state: ImmutableObject<IAuthState>,
        action: ISaveCredentialsAction
    ): ImmutableObject<IAuthState>
}