import { createActions, createReducer } from 'reduxsauce'
import Immutable, { ImmutableObject } from 'seamless-immutable'
import { ITagsActionTypes } from '../../abstraction/tags/ITagsActionTypes'
import { ITagsActionCreator } from '../../abstraction/tags/ITagsActionCreators'
import { ITagsState } from '../../abstraction/tags/ITagsState'
import { IGetTags, IGetTagsError, IGetTagsSuccess } from '../../abstraction/tags/IReducerProps'


const { Types, Creators } = createActions<ITagsActionTypes, ITagsActionCreator>({
    getTags: ['page, limit'],
    getTagsSuccess: ['tagList'],
    getTagsError: ['error']
})

export const TagsActionTypes = Types
export default Creators

const initialState: ImmutableObject<ITagsState> = Immutable({
    tagList: [],
    fetching: false,
    error: null,
    page: 0,
    limit: 0
})

export const getTags: IGetTags = (state, { page, limit }): ImmutableObject<ITagsState> => {
    return state.merge({ fetching: true, page, limit, error: initialState.error })
}

export const getTagsSuccess: IGetTagsSuccess = (state, { tagList }): ImmutableObject<ITagsState> => {
    return state.merge({ tagList, fetching: initialState.fetching, error: initialState.error })
}

export const getTagsError: IGetTagsError = (state, { error }): ImmutableObject<ITagsState> => {
    return state.merge({ error, fetching: initialState.fetching })
}


export const tagsReducer = createReducer(initialState, {
    [Types.GET_TAGS]: getTags,
    [Types.GET_TAGS_SUCCESS]: getTagsSuccess,
    [Types.GET_TAGS_ERROR]: getTagsError
})