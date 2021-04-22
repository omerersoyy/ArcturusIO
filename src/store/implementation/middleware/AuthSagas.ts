import { delay, put } from 'redux-saga/effects'
import { ILoginAction, ISaveCredentialsAction } from '../../abstraction/auth/IAuthActions'
import AuthActions from '../states/AuthState'
import SInfo from 'react-native-sensitive-info';


export function* login({ userName, password }: ILoginAction) {

    //faking the login request
    delay(2000)

    yield put(AuthActions.loginSuccess())
    yield put(AuthActions.saveCredentials(userName, password))
    //or

    //yield put(AuthActions.loginError(error))
}

export function* saveCredentials({ userName, password }: ISaveCredentialsAction) {
    yield SInfo.setItem("userName", "lölö", {});
    yield SInfo.setItem("password", "şöşö", {});
}

