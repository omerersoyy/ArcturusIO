import React, { Dispatch, useEffect, useState } from "react"
import { View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { connect } from "react-redux"
import { IGlobalState } from "../abstraction/IGlobalState"
import { Styles } from "./styles/PostsScreenStyles"
import { IGetCommentsForPostAction } from "../../store/abstraction/posts/IPostsActions"
import { CommentsScreenPropTypes } from "../types/ScreensPropTypes"
import { Comment } from "../../model/types/Comment"
import CommentItem from "../components/CommentItem"
import Loading from "../components/Loading"



const CommentsScreen = ({ dispatch, commentList, navigation, fetching, route }: CommentsScreenPropTypes) => {

    const [page, setPage] = useState(0)
    const [comments, setComments] = useState([] as Array<Comment>)

    useEffect(() => {
        const postId: string = route.params?.postId
        dispatch({ type: "GET_COMMENTS_FOR_POST", postId, page, limit: 20 })
    }, [page])

    useEffect(() => {
        if (commentList.length > 0) {
            const concatenatedComments = [...comments, ...commentList]
            setComments(concatenatedComments)
        }
    }, [commentList])

    const onEndReached = () => {
        setPage(page + 1)
    }

    return (
        <View style={Styles.container}>
            {
                fetching && <Loading type={"bottom"} />
            }
            {comments.length > 0 &&
                <FlatList
                    data={comments}
                    renderItem={({ item }) => <CommentItem comment={item} />}
                    keyExtractor={item => item.id}
                    onEndReached={() => onEndReached()}
                    onEndReachedThreshold={0.9}
                    initialNumToRender={15}
                />
            }

        </View>
    )
}

const mapStateToProps = (state: IGlobalState) => {
    return {
        commentList: state.posts.comments,
        fetching: state.posts.fetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch<IGetCommentsForPostAction>) => {
    return {
        dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentsScreen)