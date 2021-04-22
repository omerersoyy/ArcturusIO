import React from 'react';
import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../utils/Colors';
import { Styles } from './styles/BottomTabNavigationStyles'
import { IGlobalState } from '../abstraction/IGlobalState'
import PostsScreen from '../screens/PostsScreen'
import UsersNavigation from './UsersNavigation';
import UsersScreen from '../screens/UsersScreen';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused }) => {
          return (
            <Text style={focused ? Styles.activeTabBarLabel : Styles.inactiveTabBarLabel}>
              {route.name}
            </Text>
          )
        },
        tabBarIcon: ({ focused }) => {
          let iconName: string;

          if (route.name === "Posts") {
            iconName = "dynamic-feed";
          } else {
            iconName = 'people';
          }

          return (
            <Icon
              name={iconName}
              size={25}
              color={focused ? Colors.primary : Colors.white}
            />
          )
        }
      })}
      tabBarOptions={{
        activeBackgroundColor: Styles.activeBackground.color,
        style: Styles.inactiveBackground
      }} 
    >

      <Tab.Screen name={"Posts"} component={PostsScreen} />
      <Tab.Screen name={"Users"} component={UsersScreen} />
    </Tab.Navigator>
  )
}

const mapStateToProps = (state: IGlobalState) => {
  return state
}

export default connect(mapStateToProps, null)(TabNavigation);