import { ImmutableObject } from "seamless-immutable";
import { IGetUsersAction, IGetUsersSuccessAction, IUsersErrorAction, IGetSingleUserAction, IGetSingleUserSuccessAction } from "./IUsersActions";
import { IUsersState } from "./IUsersState";

export interface IGetUsers {
    (
        state: ImmutableObject<IUsersState>,
        action: IGetUsersAction
    ): ImmutableObject<IUsersState>;
}

export interface IGetUsersSuccess {
    (
        state: ImmutableObject<IUsersState>,
        action: IGetUsersSuccessAction
    ): ImmutableObject<IUsersState>;
}

export interface IGetUsersError {
    (
        state: ImmutableObject<IUsersState>,
        action: IUsersErrorAction
    ): ImmutableObject<IUsersState>;
}

export interface IGetSingleUser {
    (
        state: ImmutableObject<IUsersState>,
        action: IGetSingleUserAction
    ): ImmutableObject<IUsersState>;
}

export interface IGetSingleUserSuccess {
    (
        state: ImmutableObject<IUsersState>,
        action: IGetSingleUserSuccessAction
    ): ImmutableObject<IUsersState>;
}

export interface IGetSingleUserError {
    (
        state: ImmutableObject<IUsersState>,
        action: IUsersErrorAction
    ): ImmutableObject<IUsersState>;
}