import { StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";

export const Styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        width: "100%",
        marginVertical: 3,
        marginRight: 7,
        borderWidth: 0.3,
        borderColor: Colors.white,
        borderStyle: "solid",
        borderRadius: 3,
        padding: 5
    },
    body: {
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        color: Colors.white,
        fontSize: 15,
        paddingHorizontal: 11
    },
    iconContainer: { 
        borderRightWidth: 0.5, 
        borderRightColor: Colors.white, 
        borderStyle: "solid",
        paddingHorizontal: 7
    }
});