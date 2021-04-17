import { DefaultActionTypes } from "reduxsauce";

export interface IGetUsersActionType extends DefaultActionTypes {
    GET_USERS: 'getUsers',
    GET_USERS_SUCCESS: 'getUsersSuccess'
}