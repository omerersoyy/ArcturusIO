import { StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";

export const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(89, 124, 199, 0.5)',
        margin: 7,
        borderRadius: 25,
        borderWidth: 0.5,
        borderColor: Colors.blueIndigo
    },
    body: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 9
    },
    message: {
        color: Colors.white,
        justifyContent: "center",
        marginHorizontal: 7,
        textAlign: "left"
    },
    picture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: -10
    }
});