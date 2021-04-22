import React from 'react'
import WebView from 'react-native-webview'
import { FeedNavigationPropTypes } from '../types/NavigationPropTypes'
import { WebViewScreenPropTypes } from '../types/ScreensPropTypes'

const WebViewScreen = ({route}: WebViewScreenPropTypes) => {

    return (
        <WebView
            source={{
                uri: route.params?.link
            }}
        />
    )
}

export default WebViewScreen