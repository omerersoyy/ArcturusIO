import React, { memo } from 'react'
import { Image, Text, View } from 'react-native'
import { CommentItemPropTypes } from '../types/ComponentsPropTypes'
import { Styles } from './styles/CommentItemStyles'

const areEqual = (prevProps: CommentItemPropTypes, nextProps: CommentItemPropTypes) => {
    return prevProps.comment.id === nextProps.comment.id
}

const CommentItem = ({ comment }: CommentItemPropTypes) => {

    const { owner, message } = comment

    return (
        <View style={Styles.container}>
            <View style={Styles.body}>
                <Image
                    style={Styles.picture}
                    source={
                        { uri: owner.picture }
                    }
                />
                <Text style={Styles.message}>
                    {message}
                </Text>
            </View>
        </View >
    )
}

export default memo(CommentItem, areEqual)