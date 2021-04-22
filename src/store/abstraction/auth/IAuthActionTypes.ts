import { DefaultActionTypes } from "reduxsauce";

export interface IAuthActionTypes extends DefaultActionTypes {
    LOGIN: "login"
    LOGIN_SUCCESS: "loginSucess"
    LOGIN_ERROR: "loginError"
    SAVE_CREDENTIALS: "saveCredentials"
}