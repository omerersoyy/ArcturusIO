import { Post } from "./Post";

export type PostsResponse = {
    data: Post[],
    total: number,
    page: number,
    limit: number,
    offset: number
}