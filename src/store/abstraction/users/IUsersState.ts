import { User } from "../../../model/types/User";

export interface IUsersState {
    users: Array<User>,
    currentUser: User | null,
    userId: string,
    fetching: boolean,
    error: string,
    page: number,
    limit: number
}