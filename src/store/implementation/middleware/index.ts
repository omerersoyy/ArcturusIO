import { all, takeLatest } from 'redux-saga/effects'
import { DummyApiService } from '../../../model/rest/implementation/DummyApiService'
import { UsersActionTypes } from '../states/UsersState'
import { getUsers } from './UserSagas'


const service = new DummyApiService({
  baseUrl: "https://dummyapi.io/data/api",
  headers: [{
    key: "app-id",
    value: "6075e4d997cc7f19aabce60c"
  }]
}, "dummy")

export default function* root() {
  yield all([
    takeLatest(UsersActionTypes.GET_USERS, getUsers, service)
  ])
}