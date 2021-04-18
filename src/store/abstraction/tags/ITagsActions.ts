import { AnyAction } from "redux";
import { ResponseError } from "../../../model/types/ResponseError";

export interface IGetTagsAction extends AnyAction {
    type: string,
    page: number
    limit: number
}

export interface IGetTagssSuccessAction extends AnyAction {
    type: string,
    tagList: Array<string>
}

export interface ITagsErrorAction extends AnyAction {
    type: string,
    error: ResponseError
}