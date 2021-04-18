import { DefaultActionTypes } from "reduxsauce";

export interface ITagsActionTypes extends DefaultActionTypes {
    GET_TAGS: "getTags",
    GET_TAGS_SUCCESS: "getTagsSuccess",
    GET_TAGS_ERROR: "getTagsError"
}