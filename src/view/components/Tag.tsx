import React from 'react'
import { Text, TouchableOpacity } from "react-native"
import { TagPropTypes } from "../types/ComponentsPropTypes"
import { Styles } from "./styles/TagStyles"

export const Tag = ({ tagTitle }: TagPropTypes) => {

    return (
        <TouchableOpacity style={Styles.container}>
            <Text style={Styles.title}>
                {`#${tagTitle}`}
            </Text>
        </TouchableOpacity>
    )
}