import React, { useEffect } from "react"
import { Image, View } from "react-native"
import { connect } from "react-redux"
import Colors from "../../utils/Colors"
import { IGlobalState } from "../abstraction/IGlobalState"
import { IconWithText } from "../components/IconWithText"
import Loading from "../components/Loading"
import { TitleSubTitle } from "../components/TitleSubTitle"
import { ProfileScreenPropTypes } from "../types/ScreensPropTypes"
import { Styles } from "./styles/ProfileScreenStyles"
import moment from 'moment'

const ProfileScreen = ({ dispatch, currentUser, fetching, route }: ProfileScreenPropTypes) => {

    const { phone, picture, firstName, lastName, email, location, dateOfBirth } = currentUser

    useEffect(() => {
        const userId: number = route.params?.userId
        if (userId) {
            dispatch({ type: "GET_SINGLE_USER", userId })
        }
    }, [])


    return (
        <View style={Styles.container}>
            {
                fetching && <Loading type={"whole"} />
            }
            <View style={Styles.avatarContainer}>
                <Image
                    style={Styles.avatar}
                    source={{
                        uri: picture
                    }} />
                <TitleSubTitle
                    title={`${firstName} ${lastName}`}
                    subTitle={`${location?.country} ${location?.city}`}
                    titleStyle={Styles.titleStyle}
                    subTitleStyle={Styles.subTitleStyle}
                />
            </View>
            <View style={Styles.summaryContainer}>
                {
                    phone
                    &&
                    <IconWithText
                        iconName={"smartphone"}
                        text={phone}
                        style={Styles.iconContainerStyle}
                        textStyle={Styles.iconTextStyle}
                        iconColor={Colors.bluePolo}
                    />
                }

                {
                    email
                    &&
                    <IconWithText
                        iconName={"email"}
                        text={email}
                        style={Styles.iconContainerStyle}
                        textStyle={Styles.iconTextStyle}
                        iconColor={Colors.bluePolo}
                    />
                }

                {
                    dateOfBirth
                    && <IconWithText
                        iconName={"cake"}
                        text={moment(dateOfBirth).format("DD.MM.YYYY")}
                        style={Styles.iconContainerStyle}
                        textStyle={Styles.iconTextStyle}
                        iconColor={Colors.bluePolo}
                    />
                }

            </View>
        </View>
    )
}

const mapStateToProps = (state: IGlobalState) => {
    return {
        currentUser: state.users.currentUser,
        fetching: state.users.fetching
    }
}


export default connect(mapStateToProps, null)(ProfileScreen)