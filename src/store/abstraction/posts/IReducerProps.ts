import { ImmutableObject } from "seamless-immutable";
import { IGetPostsAction, IGetPostsSuccessAction, IPostsErrorAction, IGetSinglePostAction, IGetSinglePostSuccessAction, IGetCommentsForPostAction, IGetCommentsForPostActionSuccess } from "./IPostsActions";
import { IPostsState } from "./IPostsState";

export interface IGetPosts {
    (
        state: ImmutableObject<IPostsState>,
        action: IGetPostsAction
    ): ImmutableObject<IPostsState>;
}

export interface IGetPostsSuccess {
    (
        state: ImmutableObject<IPostsState>,
        action: IGetPostsSuccessAction
    ): ImmutableObject<IPostsState>; 
}

export interface IGetPostsError {
    (
        state: ImmutableObject<IPostsState>,
        action: IPostsErrorAction
    ): ImmutableObject<IPostsState>;
}

export interface IGetSinglePost {
    (
        state: ImmutableObject<IPostsState>,
        action: IGetSinglePostAction
    ): ImmutableObject<IPostsState>;
}

export interface IGetSinglePostSuccess {
    (
        state: ImmutableObject<IPostsState>,
        action: IGetSinglePostSuccessAction
    ): ImmutableObject<IPostsState>;
}

export interface IGetSinglePostError {
    (
        state: ImmutableObject<IPostsState>,
        action: IPostsErrorAction
    ): ImmutableObject<IPostsState>;
}

export interface IGetCommentsForPost {
    (
        state: ImmutableObject<IPostsState>,
        action: IGetCommentsForPostAction
    ): ImmutableObject<IPostsState>;
}

export interface IGetCommentsForPostSuccess {
    (
        state: ImmutableObject<IPostsState>,
        action: IGetCommentsForPostActionSuccess
    ): ImmutableObject<IPostsState>;
}

export interface IGetCommentsForPostError {
    (
        state: ImmutableObject<IPostsState>,
        action: IGetCommentsForPostActionSuccess
    ): ImmutableObject<IPostsState>;
}