import React from 'react'
import {View, ActivityIndicator, Dimensions} from 'react-native'
import Colors from '../../utils/Colors'
import { LoadingPropTypes } from '../types/ComponentsPropTypes'

const Loading = ({type} : LoadingPropTypes) => {
    return (
        <View style={{
            position: 'absolute',
            top: type === "whole" ? 0 : Dimensions.get("screen").height - 250,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.5,
            backgroundColor: Colors.charcoal
        }}>
            <ActivityIndicator
                size={"large"}
                color={Colors.white}
                animating={true} />
        </View>
    )
}

export default Loading