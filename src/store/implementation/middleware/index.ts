import { all, takeLatest } from 'redux-saga/effects'
import { DummyApiService } from '../../../model/rest/implementation/DummyApiService'
import { PostsActionTypes } from '../states/PostsState'
import { UsersActionTypes } from '../states/UsersState'
import { getCommentsForPost, getPosts, getSinglePost } from './PostsSagas'
import { getSingleUser, getUsers } from './UserSagas'


const service = new DummyApiService({
  baseUrl: "https://dummyapi.io/data/api",
  headers: [{
    key: "app-id",
    value: "6075e4d997cc7f19aabce60c"
  }]
}, "dummy")

export default function* root() {
  yield all([
    takeLatest(UsersActionTypes.GET_USERS, getUsers, service),
    takeLatest(UsersActionTypes.GET_SINGLE_USER, getSingleUser, service),
    takeLatest(PostsActionTypes.GET_POSTS, getPosts, service),
    takeLatest(PostsActionTypes.GET_SINGLE_POST, getSinglePost, service),
    takeLatest(PostsActionTypes.GET_COMMENTS_FOR_POST, getCommentsForPost, service),
  ])
}