import { StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        backgroundColor: Colors.blueIndigo
    },
    body: {
        height: 500,
        justifyContent: "center"
    },
    buttonContainer: {
        shadowColor: Colors.white,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        flex: 0,
        height: 50,
        marginVertical: 35,
        marginHorizontal: 14,
        backgroundColor: Colors.secondary
    },
    buttonText: {
        fontSize: 17,
        fontWeight: "600",
        color: Colors.white,
        borderColor: Colors.primary
    }
});