/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Text
} from 'react-native';

import createStore from './src/store/implementation';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { PersistGate } from 'redux-persist/integration/react'
import LoginNavigation from './src/view/navigation/LoginNavigation';
import FeedNavigation from './src/view/navigation/FeedNavigation';





const { store, persistor } = createStore()



const Root = () => (
  <NavigationContainer>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FeedNavigation />
      </PersistGate>
    </Provider>
  </NavigationContainer>
)

export default Root