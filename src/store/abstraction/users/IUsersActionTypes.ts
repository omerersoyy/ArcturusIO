import { DefaultActionTypes } from "reduxsauce";

export interface IGetUsersActionType extends DefaultActionTypes {
    GET_USERS: "getUsers",
    GET_USERS_SUCCESS: "getUsersSuccess",
    GET_USERS_ERROR: "getUsersError",
    GET_SINGLE_USER: "getSingleUser",
    GET_SINGLE_USER_SUCCESS: "getSingleUserSuccess",
    GET_SINGLE_USER_ERROR: "getSingleUserError"
}