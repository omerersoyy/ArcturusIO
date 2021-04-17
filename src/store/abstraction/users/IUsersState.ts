import { ResponseError } from "../../../model/types/ResponseError";
import { User } from "../../../model/types/User";

export interface IUsersState {
    users: Array<User>,
    currentUser: User | null,
    userId: string,
    fetching: boolean,
    error: ResponseError | null,
    page: number,
    limit: number
}