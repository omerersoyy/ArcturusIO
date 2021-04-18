import { ImmutableObject } from "seamless-immutable";
import { ITagsState } from '../tags/ITagsState'
import { IGetTagsAction, IGetTagssSuccessAction, ITagsErrorAction } from "./ITagsActions";
export interface IGetTags {
    (
        state: ImmutableObject<ITagsState>,
        action: IGetTagsAction
    ): ImmutableObject<ITagsState>;
}

export interface IGetTagsSuccess {
    (
        state: ImmutableObject<ITagsState>,
        action: IGetTagssSuccessAction
    ): ImmutableObject<ITagsState>;
}

export interface IGetTagsError {
    (
        state: ImmutableObject<ITagsState>,
        action: ITagsErrorAction
    ): ImmutableObject<ITagsState>;
}