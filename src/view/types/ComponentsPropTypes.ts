import { StyleProp, TextStyle, ViewStyle } from "react-native"
import { Comment } from "../../model/types/Comment";
import { Post } from "../../model/types/Post";
import { User } from "../../model/types/User";

export interface TagPropTypes {
    tagTitle: string
}

export interface LoadingPropTypes {
    type: "bottom" | "whole"
}

export interface IconWithTextPropTypes {
    iconName: string
    text: string
    style?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    iconColor?: string
    onPress?: () => void
}

export interface TitleSubTitlePropTypes {
    title: string
    subTitle: string
    style?: StyleProp<TextStyle>
    titleStyle?: StyleProp<TextStyle>
    subTitleStyle?: StyleProp<TextStyle>
}

export interface PostItemPropTypes {
    post: Post
    onPressUserImage?: () => void
    onPressComments?: () => void
    onPressWebLink?: (link: string | undefined) => void
}

export interface UserItemPropTypes {
    user: User
    goToUsersPosts: () => void
    goToProfile: () => void
}

export interface CommentItemPropTypes {
    comment: Comment
}

export interface ButtonPropTypes {
    text: string
    onPress: () => void
    disabled?: boolean
    buttonStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle> 
}

export interface InputPropTypes {
    placeHolder: string,
    containerStyle?: StyleProp<ViewStyle> 
    textStyle?: StyleProp<TextStyle>
    secure?: boolean
    onChange: (text: string) => void
}