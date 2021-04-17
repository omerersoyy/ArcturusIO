import { ImmutableObject } from "seamless-immutable";
import { User } from "../../../model/types/User";
import { IUsersState } from "./IUsersState";


export interface IGetUsersError {
    (
        state: ImmutableObject<IUsersState>,
        action: {
            type: string,
            error: string
        },
    ): ImmutableObject<IUsersState>;
}