import { Comment } from "../../../model/types/Comment";
import { Post } from "../../../model/types/Post";
import { ResponseError } from "../../../model/types/ResponseError";

export interface IPostsState {
    postList: Array<Post>,
    currentPost: Post | null,
    comments: Array<Comment>,
    postId: string,
    fetching: boolean,
    error: ResponseError | null,
    page: number,
    limit: number,
    userId?: string,
    tagTitle?: string
}