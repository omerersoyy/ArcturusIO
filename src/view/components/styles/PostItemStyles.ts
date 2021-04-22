import { StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";

export const Styles = StyleSheet.create({
    container: {
        height: 500,
        backgroundColor: 'rgba(89, 124, 199, 0.5)',
        margin: 7,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    body: {
        flex: 9,
        flexDirection: "column",
        alignContent: "flex-start",
    },
    header: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
        backgroundColor: Colors.blueIndigo,
        borderTopRightRadius: 10, borderTopLeftRadius: 10,
        paddingHorizontal: 9,
        paddingVertical: 7
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 20
    },
    image: {
        flex: 5
    },
    tagList: {
        flex: 1
    },
    footer: {
        marginHorizontal: 7,
        marginVertical: 7
    },
    text: {
        color: Colors.white,
        alignContent: "flex-start"
    },
    link: {
        textDecorationLine: "underline",
        color: Colors.primary,
        fontSize: 15,
        fontWeight: "400",
        marginVertical: 3
    },
    actionButtonsContainer: {
        flexDirection: "row"
    }
});