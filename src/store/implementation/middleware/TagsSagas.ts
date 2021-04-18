import { ApiResponse } from 'apisauce'
import { put } from 'redux-saga/effects'
import { DummyApiService } from '../../../model/rest/implementation/DummyApiService'
import TagsActions from '../states/TagsState'


export function* getTags(service: DummyApiService, { page, limit }: ReturnType<typeof TagsActions.getTags>) {

    const response: ApiResponse<Array<string>> = yield service.getTags(page, limit)

    if (response.ok) {
        yield put(TagsActions.getTagsSuccess(response.data as Array<string>))
    } else {
        yield put(TagsActions.getTagsError({
            definition: response.originalError?.response?.data || "Unknown Error!",
            code: response.originalError?.code
        }))
    }
}