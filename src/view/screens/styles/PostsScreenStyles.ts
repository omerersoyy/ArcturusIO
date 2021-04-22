import { StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bluePolo
    },
    filterBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 50,
        paddingHorizontal: 14,
        backgroundColor: Colors.secondary
    },
    filterBarText: { 
        color: Colors.primary, 
        fontSize: 15, 
        fontWeight: "600" 
    }
});