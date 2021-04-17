import { DefaultActionTypes } from "reduxsauce";

export interface IPostsActionTypes extends DefaultActionTypes {
    GET_POSTS: "getPosts",
    GET_POSTS_SUCCESS: "getPostsSuccess",
    GET_POSTS_ERROR: "getPostsError",
    GET_SINGLE_POST: "getSinglePost",
    GET_SINGLE_POST_SUCCESS: "getSinglePostSuccess",
    GET_SINGLE_POST_ERROR: "getSinglePostError",
    GET_COMMENTS_FOR_POST: "getCommentsForPost",
    GET_COMMENTS_FOR_POST_SUCCESS: "getCommentsForPostSuccess",
    GET_COMMENTS_FOR_POST_ERROR: "getCommentsForPostError"
}