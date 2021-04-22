import React, { Dispatch, useEffect, useState } from "react"
import { UsersScreenPropTypes } from "../types/ScreensPropTypes"
import { IGlobalState } from "../abstraction/IGlobalState"
import { connect } from "react-redux"
import { User } from "../../model/types/User"
import { FlatList } from "react-native-gesture-handler"
import { View } from "react-native"
import UserItem from "../components/UserItem"
import { IGetUsersAction } from "../../store/abstraction/users/IUsersActions"
import { Styles } from "./styles/UsersScreenStyles"
import Loading from "../components/Loading"


const UsersScreen = ({ dispatch, userList, navigation, fetching }: UsersScreenPropTypes) => {

    const [page, setPage] = useState(0)
    const [users, setUsers] = useState([] as Array<User>)

    useEffect(() => {
        dispatch({ type: "GET_USERS", page, limit: 20 })
    }, [page])

    useEffect(() => {
        if (userList.length > 0) {
            const concatenatedUsers = [...users, ...userList]
            setUsers(concatenatedUsers)
        }
    }, [userList])

    const onEndReached = () => {
        setPage(page + 1)
    }

    const goToUsersPosts = (item: User) => {
        navigation.navigate("Posts", { user: item })
    }

    const goToProfile = (item: User) => {
        navigation.navigate("Profile", { userId: item.id })
    }

    return (
        <View style={Styles.container}>
            {
                fetching && <Loading type={"bottom"} />
            }
            {users.length > 0 &&
                <FlatList
                    data={users}
                    renderItem={({ item }) => <UserItem key={item.id} user={item} goToUsersPosts={() => goToUsersPosts(item)} goToProfile={() => goToProfile(item)} />}
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
        userList: state.users.userList,
        fetching: state.users.fetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch<IGetUsersAction>) => {
    return {
        dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersScreen)