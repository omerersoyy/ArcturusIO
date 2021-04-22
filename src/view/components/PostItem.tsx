import React, { memo } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { Tag } from './Tag'
import { IconWithText } from './IconWithText'
import { WebView } from 'react-native-webview'
import { TitleSubTitle } from './TitleSubTitle'
import { Styles } from './styles/PostItemStyles'
import { PostItemPropTypes } from '../types/ComponentsPropTypes'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'


const PostItem = ({ post, onPressUserImage, onPressComments, onPressWebLink }: PostItemPropTypes) => {

    return (
        <View style={Styles.container}>
            <View style={Styles.body}>
                <View style={Styles.header}>
                    <TouchableWithoutFeedback onPress={onPressUserImage}>
                        <Image
                            style={Styles.avatar}
                            source={
                                { uri: post.owner.picture }
                            }
                        />
                    </TouchableWithoutFeedback>
                    <TitleSubTitle
                        title={`${post.owner.firstName} ${post.owner.lastName}`}
                        subTitle={`${post.owner.email}`} />
                </View>
                <Image
                    style={Styles.image}
                    source={
                        { uri: post.image }
                    }
                />

                <ScrollView
                    horizontal={true}
                    style={Styles.tagList}>
                    {
                        post.tags.map((tagTitle, idx) => {
                            return (
                                <Tag
                                    key={idx}
                                    tagTitle={tagTitle} />
                            )
                        })
                    }
                </ScrollView>
                <View style={Styles.footer}>
                    <Text style={Styles.text}>{post.text}</Text>
                    <Text style={Styles.link} onPress={() => onPressWebLink ? onPressWebLink(post.link) : {}}>{post.link}</Text>
                    <View style={Styles.actionButtonsContainer}>
                        <IconWithText
                            iconName={"favorite"}
                            text={post.likes.toString()} />
                        <IconWithText
                            onPress={onPressComments}
                            iconName={"mode-comment"}
                            text={"Comments"} />
                    </View>
                </View>
            </View>
        </View >
    )
}

function areEqual(prevProps: PostItemPropTypes, nextProps: PostItemPropTypes) {
   return prevProps.post.id === nextProps.post.id
  }

export default memo(PostItem, areEqual)