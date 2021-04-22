import React from 'react'
import { Text, View } from "react-native";
import { IconWithTextPropTypes } from "../types/ComponentsPropTypes";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../utils/Colors';
import { Styles } from './styles/IconWithTextStyles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export const IconWithText = ({ iconName, text, style, iconColor, textStyle, onPress }: IconWithTextPropTypes) => {

    return (
        <TouchableWithoutFeedback onPress={onPress} style={[Styles.container, style]}>
            <View style={Styles.body}>
                <View style={Styles.iconContainer}>
                    <Icon 
                        name={iconName} 
                        size={37} 
                        color={iconColor || Colors.secondary} />
                </View>
                <Text style={[Styles.text, textStyle]}>
                    {text}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}