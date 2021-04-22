import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginNavigationPropTypes, StackNavigationPropTypes } from '../types/NavigationPropTypes';
import LoginScreen from '../screens/LoginScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { IGlobalState } from '../abstraction/IGlobalState'
import FeedNavigation from './FeedNavigation';
import { connect } from 'react-redux';

const LoginStack = createStackNavigator<StackNavigationPropTypes>();

const LoginNavigation = ({ route }: LoginNavigationPropTypes) => {

    return (
        <LoginStack.Navigator headerMode={'none'} initialRouteName={'Login'}>
            <LoginStack.Screen name={"Login"}
                component={LoginScreen} />
        </LoginStack.Navigator>
    );
};

const mapStateToProps = (state: IGlobalState) => {
    return {
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps)(LoginNavigation);