import { IPostsState } from "../../store/abstraction/posts/IPostsState";
import { ITagsState } from "../../store/abstraction/tags/ITagsState";
import { IUsersState } from "../../store/abstraction/users/IUsersState";

export interface IGlobalState {
    users: IUsersState,
    posts: IPostsState,
    tags: ITagsState
}