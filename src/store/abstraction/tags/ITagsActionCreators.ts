import { DefaultActionCreators } from "reduxsauce"
import { ResponseError } from "../../../model/types/ResponseError"
import { IGetTagsAction, IGetTagssSuccessAction, ITagsErrorAction } from "./ITagsActions"

export interface ITagsActionCreator extends DefaultActionCreators {
    getTags: (page: number, limit: number) => IGetTagsAction
    getTagsSuccess: (tags: Array<string>) => IGetTagssSuccessAction,
    getTagsErrorAction: (error: ResponseError) => ITagsErrorAction
}