import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import Colors from '../../utils/Colors';
import { FeedNavigationPropTypes, StackNavigationPropTypes } from '../types/NavigationPropTypes';
import { IGlobalState } from '../abstraction/IGlobalState';
import ProfileScreen from '../screens/ProfileScreen';
import CommentsScreen from '../screens/CommentsScreen';
import BottomTabNavigation from './BottomTabNavigation';
import LoginNavigation from './LoginNavigation';
import WebViewScreen from '../screens/WebViewScreen';
import UsersScreen from '../screens/UsersScreen';
import PostsScreen from '../screens/PostsScreen';
import UsersNavigation from './UsersNavigation';


const FeedStack = createStackNavigator<StackNavigationPropTypes>();

const FeedNavigation = ({ route, loggedIn }: FeedNavigationPropTypes) => {

    if (!loggedIn) {
        return <LoginNavigation />
    }
    console.log(route)
    return (

        <FeedStack.Navigator
            headerMode={"screen"} >
            <FeedStack.Screen
                name={"Posts"}
                component={BottomTabNavigation}
                options={{
                    headerTitle: "Home",
                    headerStyle: {
                        backgroundColor: Colors.blueIndigo,
                    },
                    headerTintColor: Colors.white,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 19
                    },
                }} />
            <FeedStack.Screen
                name={"Profile"}
                component={ProfileScreen}
                initialParams={route?.initialParams}
                options={{
                    headerTitle: "Profile",
                    headerStyle: {
                        backgroundColor: Colors.blueIndigo,
                    },
                    headerTintColor: Colors.white,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 19
                    },
                }} />
            <FeedStack.Screen
                name={"Comments"}
                component={CommentsScreen}
                initialParams={route?.initialParams}
                options={{
                    headerTitle: "Comments",
                    headerStyle: {
                        backgroundColor: Colors.blueIndigo,
                    },
                    headerTintColor: Colors.white,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 19
                    },
                }} />
            <FeedStack.Screen
                name={"WebSource"}
                component={WebViewScreen}
                initialParams={route?.initialParams}
                options={{
                    headerTitle: "Source",
                    headerStyle: {
                        backgroundColor: Colors.blueIndigo,
                    },
                    headerTintColor: Colors.white,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 19
                    },
                }} />
        </FeedStack.Navigator>
    )
}

const mapStateToProps = (state: IGlobalState) => {
    return {
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps, null)(FeedNavigation);