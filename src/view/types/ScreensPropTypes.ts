import { NavigationProp, RouteProp } from "@react-navigation/native";
import { Dispatch } from "react";
import { Comment } from "../../model/types/Comment";
import { Post } from "../../model/types/Post";
import { User } from "../../model/types/User";
import { ILoginAction } from "../../store/abstraction/auth/IAuthActions";
import { IGetCommentsForPostAction, IGetPostsAction } from "../../store/abstraction/posts/IPostsActions";
import { IGetUsersAction } from "../../store/abstraction/users/IUsersActions";
import { Route } from "./NavigationPropTypes";

export interface ProfileScreenPropTypes {
    dispatch: Dispatch<unknown>,
    currentUser: User,
    fetching: boolean,
    navigation: NavigationProp<any>,
    route: RouteProp<any, any>
}

export interface PostsScreenPropTypes {
    dispatch: Dispatch<IGetPostsAction>
    getPosts: (limit: number, page: number, userId?: string, tagTitle?: string) => void
    postList: Array<Post>,
    fetching?: boolean,
    navigation: NavigationProp<any>
    route: RouteProp<any, any>
}

export interface UsersScreenPropTypes {
    dispatch: Dispatch<IGetUsersAction>,
    getUsers: (limit: number, page: number) => void,
    userList: Array<User>,
    navigation: NavigationProp<any>,
    fetching: boolean
}

export interface CommentsScreenPropTypes {
    dispatch: Dispatch<IGetCommentsForPostAction>,
    getComments: (id: number, page: number) => void,
    commentList: Array<Comment>,
    fetching: boolean,
    navigation: NavigationProp<any>,
    route: RouteProp<any, any>
}

export interface LoginScreenPropTypes {
    dispatch: Dispatch<ILoginAction>
    userName: string
    password: string
    fetching: boolean
}

export interface WebViewScreenPropTypes {
    navigation: NavigationProp<any>,
    route: RouteProp<any, any>
}