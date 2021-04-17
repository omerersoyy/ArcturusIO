import { createActions, createReducer } from 'reduxsauce'
import Immutable, { ImmutableObject } from 'seamless-immutable'
import { IPostsActionTypes } from '../../abstraction/posts/IPostsActionTypes'
import { IPostsActionCreateor } from '../../abstraction/posts/IPostsActionCreators'
import { IPostsState } from '../../abstraction/posts/IPostsState'
import { 
    IGetPosts, 
    IGetPostsSuccess, 
    IGetPostsError, 
    IGetSinglePost, 
    IGetSinglePostSuccess, 
    IGetSinglePostError 
} from '../../abstraction/posts/IReducerProps'




const { Types, Creators } = createActions<IPostsActionTypes, IPostsActionCreateor>({
    getPosts: ['page, limit', 'userId', 'tagTitle'],
    getPostsSuccess: ['postList'],
    getPostsError: ['error'],
    getSinglePost: ['postId'],
    getSinglePostSuccess: ['currentPost'],
    getSinglePostError: ['error'],
    getCommentsForPost: ['postId'],
    getCommentsForPostSuccess: ['comments'],
    getCommentsForPostError: ['error']
})

export const PostsActionTypes = Types
export default Creators

const initialState: ImmutableObject<IPostsState> = Immutable({
    postList: [],
    comments: [],
    currentPost: null,
    postId: "",
    fetching: false,
    error: null,
    page: 0,
    limit: 0,
    userId: "",
    tagTitle: ""
})



export const getPosts: IGetPosts = (state, { page, limit, userId, tagTitle }): ImmutableObject<IPostsState> => {
    return state.merge({ fetching: true, page, limit, userId, tagTitle, error: initialState.error })
}

export const getPostsSuccess: IGetPostsSuccess = (state, { postList }): ImmutableObject<IPostsState> => {
    return state.merge({ postList, fetching: initialState.fetching, error: initialState.error })
}

export const getPostsError: IGetPostsError = (state, { error }): ImmutableObject<IPostsState> => {
    return state.merge({ error, fetching: initialState.fetching })
}

export const getSinglePost: IGetSinglePost = (state, { postId }): ImmutableObject<IPostsState> => {
    return state.merge({ fetching: true, postId, error: initialState.error })
}

export const getSinglePostSuccess: IGetSinglePostSuccess = (state, { currentPost }): ImmutableObject<IPostsState> => {
    return state.merge({ currentPost, fetching: initialState.fetching, error: initialState.error })
}

export const getSinglePostError: IGetSinglePostError = (state, { error }): ImmutableObject<IPostsState> => {
    return state.merge({ error, fetching: initialState.fetching })
}


export const postsReducer = createReducer(initialState, {
    [Types.GET_POSTS]: getPosts,
    [Types.GET_POSTS_SUCCESS]: getPostsSuccess,
    [Types.GET_POSTS_ERROR]: getPostsError,
    [Types.GET_SINGLE_POST]: getSinglePost,
    [Types.GET_SINGLE_POST_SUCCESS]: getSinglePostSuccess,
    [Types.GET_SINGLE_POST_ERROR]: getSinglePostError
})