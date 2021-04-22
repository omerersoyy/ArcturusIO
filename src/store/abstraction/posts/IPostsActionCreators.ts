import { DefaultActionCreators } from "reduxsauce"
import { Comment } from "../../../model/types/Comment"
import { Post } from "../../../model/types/Post"
import { ResponseError } from "../../../model/types/ResponseError"
import { IGetCommentsForPostAction, IGetCommentsForPostActionSuccess, IGetPostsAction, IGetPostsSuccessAction, IGetSinglePostAction, IPostsErrorAction } from "./IPostsActions"

export interface IPostsActionCreateor extends DefaultActionCreators {
    getPosts: (page: number, limit: number, userId?: string, tagTitle?: string) => IGetPostsAction
    getPostsSuccess: (postList: Array<Post>) => IGetPostsSuccessAction,
    getPostsError: (error: ResponseError) => IPostsErrorAction,
    getSinglePost: (id: string) => IGetSinglePostAction,
    getSinglePostSuccess: (currentPost: Post) => IGetPostsSuccessAction,
    getSinglePostEror: (error: ResponseError) => IPostsErrorAction,
    getCommentsForPost: (postId: string, page: number, limit: number) => IGetCommentsForPostAction,
    getCommentsForPostSuccess: (comments: Array<Comment>) => IGetCommentsForPostActionSuccess,
    getCommentsForPostError: (error: ResponseError) => IPostsErrorAction
}