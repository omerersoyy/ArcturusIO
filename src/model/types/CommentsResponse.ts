import { Comment } from "./Comment";
import { Post } from "./Post";

export type CommentsResponse = {
    data: Comment[],
    total: number,
    page: number,
    limit: number,
    offset: number
}