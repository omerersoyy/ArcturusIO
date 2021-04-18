import React from 'react';
import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from '../screens/Main';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../utils/Colors';
import { BottomNavigationTypes } from '../types/NavigationPropTypes';
import { Styles } from './styles/BottomTabNavigationStyles';
import { IGlobalState } from '../abstraction/IGlobalState'


const Tab = createBottomTabNavigator();

const TabNavigation = ({ initialParams }: BottomNavigationTypes) => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: () => {
          return (
            <Text style={Styles.tabBarLabel}>
              {route.name}
            </Text>
          )
        },
        tabBarIcon: () => {
          let iconName: string;

          if (route.name === "Posts") {
            iconName = "dynamic-feed";
          } else if (route.name === "Users") {
            iconName = 'people';
          } else {
            iconName = 'face'
          }

          return (
            <Icon
              name={iconName}
              size={25}
              color={Colors.white}
            />
          )
        }
      })}
      tabBarOptions={{
        activeBackgroundColor: Styles.activeBackground.color,
        style: Styles.inactiveBackground

      }}
    >

      <Tab.Screen name={"Posts"} component={Main} />
      <Tab.Screen name={"Users"} component={Main} />
      <Tab.Screen name={"Profile"} component={Main} />
    </Tab.Navigator>
  )
}

const mapStateToProps = (state: IGlobalState) => {
  return state
}

export default connect(mapStateToProps, null)(TabNavigation);