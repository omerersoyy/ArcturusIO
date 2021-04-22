import React, { memo } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { TitleSubTitle } from './TitleSubTitle'
import { Styles } from './styles/UserItemStyles'
import { UserItemPropTypes } from '../types/ComponentsPropTypes'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Colors from '../../utils/Colors'
import { Button } from './Button'

const areEqual = (prevProps: UserItemPropTypes, nextProps: UserItemPropTypes) => {
    return prevProps.user.id === nextProps.user.id
}

const UserItem = ({ user, goToUsersPosts, goToProfile }: UserItemPropTypes) => {

    const { picture, email, firstName, lastName } = user

    return (
        <View style={Styles.container}>
            <View style={Styles.body}>
                <TouchableWithoutFeedback
                    style={Styles.avatar}>
                    <Image
                        style={Styles.picture}
                        source={
                            { uri: picture }
                        }
                    />
                    <View style={Styles.summary}>
                        <TitleSubTitle
                            title={`${firstName} ${lastName}`}
                            subTitle={`${email}`}
                            style={{ justifyContent: "flex-end" }} />
                    </View>
                </TouchableWithoutFeedback>
                <View style={{ flexDirection: "row", flex: 2, alignItems: "flex-end" }}>
                    <Button
                        text={"See Posts"}
                        onPress={goToUsersPosts} />
                    <Button
                        text={"See Profile"}
                        onPress={goToProfile}
                        buttonStyle={{ backgroundColor: Colors.primary }}
                        textStyle={{ color: Colors.white }} />
                </View>
            </View>
        </View >
    )
}

export default memo(UserItem, areEqual)