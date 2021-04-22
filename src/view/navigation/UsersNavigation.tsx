import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'
import PostsScreen from '../screens/PostsScreen'
import Colors from '../../utils/Colors';
import { FeedNavigationPropTypes, StackNavigationPropTypes } from '../types/NavigationPropTypes'
import { IGlobalState } from '../abstraction/IGlobalState'
import ProfileScreen from '../screens/ProfileScreen'
import UsersScreen from '../screens/UsersScreen'
import BottomTabNavigation from './BottomTabNavigation';

const UsersStack = createStackNavigator<StackNavigationPropTypes>();


const UsersNavigation = ({ route }: FeedNavigationPropTypes) => {
console.log(route)
    return (

        <UsersStack.Navigator headerMode={"none"}>
            <UsersStack.Screen
                name={"Users"}
                component={UsersScreen}
                options={{
                    title: "Users",
                    headerStyle: {
                        backgroundColor: Colors.blueIndigo,
                    },
                    headerTintColor: Colors.white,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 19
                    },
                }} />
            <UsersStack.Screen
                name={"Posts"}
                component={PostsScreen}
                options={{
                    title: "Posts",
                    headerStyle: {
                        backgroundColor: Colors.blueIndigo,
                    },
                    headerTintColor: Colors.white,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 19
                    },
                }} />
        </UsersStack.Navigator>
    )
}

const mapStateToProps = (state: IGlobalState) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(UsersNavigation);