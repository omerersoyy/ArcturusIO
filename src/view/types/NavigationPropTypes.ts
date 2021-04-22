import { RouteProp } from "@react-navigation/native";


export type Route = {
    key: string,
    name: "Posts" | "Profile" | "Users" | "Comments" | "Login" | "WebSource"
    initialParams?: any
}

export type BottomNavigationPropTypes = {
    initialParams?: {
        login: React.Dispatch<React.SetStateAction<boolean>>
    }
}

export type FeedNavigationPropTypes = {
    route?: Route,
    loggedIn?: boolean
}

export type StackNavigationPropTypes = {
    Posts: Route
    Users: Route
    Profile: Route
    Comments: Route
    Login: Route
    WebSource: Route
    route: Route
}

export type LoginNavigationPropTypes = {
    route?: Route
}