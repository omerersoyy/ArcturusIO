import React, { Dispatch, useEffect, useMemo, useState } from "react"
import { Text, View } from "react-native"
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import { connect } from "react-redux"
import { Post } from "../../model/types/Post"
import { IGlobalState } from "../abstraction/IGlobalState"
import PostItem from "../components/PostItem"
import { Styles } from "./styles/PostsScreenStyles"
import { IGetPostsAction } from "../../store/abstraction/posts/IPostsActions"
import { PostsScreenPropTypes } from "../types/ScreensPropTypes"
import Loading from "../components/Loading"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { User } from "../../model/types/User"
import Colors from "../../utils/Colors"


const PostsScreen = ({ dispatch, postList, navigation, route, fetching }: PostsScreenPropTypes) => {

  const [page, setPage] = useState(0)
  const [posts, setPosts] = useState([] as Array<Post>)
  const [currentUser, setCurrentUser] = useState(" ")

  useEffect(() => {
    const user: User = route.params?.user
    const { id, firstName, lastName } = user || {}
    if (id) {
      setCurrentUser(`${user.firstName} ${user.lastName}`)
    }
    dispatch({ type: "GET_POSTS", page, limit: 20, userId: id })
  }, [page, route])

  useEffect(() => {
    setPage(0)
  }, [route])

  useEffect(() => {
    if (!currentUser) {
      dispatch({ type: "GET_POSTS", page, limit: 20 })
    }
  }, [currentUser])

  useEffect(() => {
    if (posts.length > 0 && page < 1) {
      setPosts([])
    }
    else if (postList.length > 0) {
      const concatenatedPosts = [...posts, ...postList]
      setPosts(concatenatedPosts)
    }
  }, [postList])

  const onEndReached = () => {
    setPage(page + 1)
  }

  const goToProfile = (item: Post) => {
    navigation.navigate("Profile", { userId: item.owner.id })
  }

  const goToComments = (item: Post) => {
    navigation.navigate("Comments", { postId: item.id })
  }

  const goToWebSource = (link: string) => {
    navigation.navigate("WebSource", { link })
  }

  const renderItem = (item: Post) => {
    return (
      <PostItem
        key={item.id}
        post={item}
        onPressUserImage={() => goToProfile(item)}
        onPressComments={() => goToComments(item)}
        onPressWebLink={() => goToWebSource(item.link)}
      />
    )
  }

  return (
    <View style={Styles.container}>
      {
        fetching && <Loading type={"bottom"} />
      }

      {
        currentUser && currentUser !== " " ?
          <View style={Styles.filterBarContainer}>
            <Text style={Styles.filterBarText}>{`Posts by ${currentUser}`}</Text>
            <TouchableOpacity onPress={() => setCurrentUser("")}>
              <Icon
                name={"clear"}
                size={25}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View> : null
      }
      {posts.length > 0 &&
        <FlatList
          data={posts}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={item => item.id}
          onEndReached={() => onEndReached()}
          onEndReachedThreshold={0.3}
          initialNumToRender={5}
        />
      }

    </View>
  )
}

const mapStateToProps = (state: IGlobalState) => {
  return {
    postList: state.posts.postList,
    fetching: state.posts.fetching
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IGetPostsAction>) => {
  return {
    dispatch
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostsScreen)