import { AnyAction } from "redux";
import { Comment } from "../../../model/types/Comment";
import { Post } from "../../../model/types/Post";
import { ResponseError } from "../../../model/types/ResponseError";

export interface IGetPostsAction extends AnyAction {
    type: string,
    page: number,
    limit: number,
    userId?: string
    tagTitle?: string
}

export interface IGetPostsSuccessAction extends AnyAction {
    type: string,
    postList: Array<Post>
}

export interface IGetSinglePostAction extends AnyAction {
    type: string,
    id: number
}

export interface IGetSinglePostSuccessAction extends AnyAction {
    type: string,
    currentPost: Post 
}

export interface IGetCommentsForPostAction extends AnyAction {
    type: string,
    postId: string
}

export interface IGetCommentsForPostActionSuccess extends AnyAction {
    type: string,
    comments: Array<Comment>
}

export interface IPostsErrorAction extends AnyAction {
    type: string,
    error: ResponseError
}