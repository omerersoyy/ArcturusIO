import React from 'react'
import { Text, View } from "react-native"
import { TitleSubTitlePropTypes } from "../types/ComponentsPropTypes"
import { Styles } from "./styles/TitleSubTitleStyles"

export const TitleSubTitle = ({ title, subTitle, style, titleStyle, subTitleStyle }: TitleSubTitlePropTypes) => {

    return (
        <View style={[Styles.container, style]}>
            <Text style={[Styles.title, titleStyle]}>
                {title}
            </Text>
            <Text style={[Styles.subTitle, subTitleStyle]}>
                {subTitle}
            </Text>
        </View>
    )
}