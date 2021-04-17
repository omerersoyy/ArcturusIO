import { ImmutableObject } from "seamless-immutable";
import { User } from "../../../model/types/User";
import { IUsersState } from "./IUsersState";


export interface IGetUsersSuccess {
    (
        state: ImmutableObject<IUsersState>,
        action: {
            type: string,
            users: Array<User>
        },
    ): ImmutableObject<IUsersState>;
}