import { ImmutableObject } from "seamless-immutable";
import { IUsersState } from "./IUsersState";

export interface IGetUsers {
    (
        state: ImmutableObject<IUsersState>,
        action: { 
            type: string, 
            page: number,
            limit: number
         },
    ): ImmutableObject<IUsersState>;
}