import React from 'react'
import { Text, TouchableOpacity } from "react-native"
import Colors from '../../utils/Colors'
import { ButtonPropTypes } from "../types/ComponentsPropTypes"
import { Styles } from './styles/ButtonStyles'

export const Button = ({ text, onPress, disabled, buttonStyle, textStyle }: ButtonPropTypes) => {

    return (
        <TouchableOpacity
            onPress={!disabled ? onPress : () => { }}
            style={[Styles.container, buttonStyle, disabled ? { backgroundColor: Colors.charcoal } : {}]}>
            <Text style={[Styles.text, textStyle]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}