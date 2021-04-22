import { StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";

export const Styles = StyleSheet.create({
    container: {
        height: 190,
        backgroundColor: 'rgba(139, 164, 209, 0.7)',
        margin: 7,
        borderRadius: 10,
        padding: 9
    },
    body: {
        flex: 1,
    },
    avatar: {
        flexDirection: "row",
        borderRadius: 10
    },
    summary: {
        flex: 2,
        marginLeft: 7
    },
    picture: {
        flex: 1,
        height: 120,
        borderRadius: 7
    }
});