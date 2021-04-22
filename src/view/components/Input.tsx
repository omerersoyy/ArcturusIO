import React from 'react'
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Colors from '../../utils/Colors';
import { InputPropTypes } from "../types/ComponentsPropTypes";

const Input = ({placeHolder, onChange, secure, containerStyle, textStyle}: InputPropTypes) => {

    

    return (
        <View style={[styles.container, containerStyle]}>
            <TextInput
                placeholderTextColor={Colors.white}
                placeholder={placeHolder}
                onChangeText={onChange}
                style={[styles.text, textStyle]}
                secureTextEntry={secure || false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: 11,
        marginHorizontal: 17,
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        flex: 1,
        marginTop: 3,
        fontSize: 12,
        letterSpacing: 1,
        fontWeight: "600"
    },

    icon: {
        marginRight: 15
    }
});

export default Input