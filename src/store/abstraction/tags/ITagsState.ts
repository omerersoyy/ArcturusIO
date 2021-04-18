import { ResponseError } from "../../../model/types/ResponseError";

export interface ITagsState {
    tagList: Array<string>,
    fetching: boolean,
    error: ResponseError | null,
    page: number,
    limit: number
}