import { ApiResponse } from 'apisauce'
import { call, put } from 'redux-saga/effects'
import { DummyApiService } from '../../../model/rest/implementation/DummyApiService'
import { Comment } from '../../../model/types/Comment'
import { Post } from '../../../model/types/Post'
import { User } from '../../../model/types/User'
import PostsActions from '../states/PostsState'


export function* getPosts(service: DummyApiService, { page, limit, userId, tagTitle }: ReturnType<typeof PostsActions.getPosts>) {

    const response: ApiResponse<Array<Post>> = yield service.getPosts(page, limit, userId, tagTitle)

    if (response.ok) {
        yield put(PostsActions.getPostsSuccess(response.data as Array<Post>))
    } else {
        yield put(PostsActions.getPostsError({
            definition: response.originalError?.response?.data || "Unknown Error!",
            code: response.originalError?.code
        }))
    }
}

export function* getSinglePost(service: DummyApiService, { postId }: ReturnType<typeof PostsActions.getSinglePost>) {

    const response: ApiResponse<Post> = yield service.getSinglePost(postId)

    if (response.ok) {
        yield put(PostsActions.getSinglePostSuccess(response.data as Post))
    } else {
        yield put(PostsActions.getSinglePostEror({
            definition: response.originalError?.response?.data || "Unknown Error!",
            code: response.originalError?.code
        }))
    }
}

export function* getCommentsForPost(service: DummyApiService, { postId }: ReturnType<typeof PostsActions.getCommentsForPost>) {

    const response: ApiResponse<Array<Comment>> = yield service.getComments(postId)

    if (response.ok) {
        yield put(PostsActions.getCommentsForPostSuccess(response.data as Array<Comment>))
    } else {
        yield put(PostsActions.getCommentsForPostError({
            definition: response.originalError?.response?.data || "Unknown Error!",
            code: response.originalError?.code
        }))
    }
}