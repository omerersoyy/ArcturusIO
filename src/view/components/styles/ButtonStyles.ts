import { StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";

export const Styles = StyleSheet.create({
    container: {
        flex: 1, 
        height: 40, 
        backgroundColor: Colors.white, 
        justifyContent: "center",
        borderRadius: 3, 
        marginRight: 7 
    },
    text:  {
        textAlign: "center", 
        color: Colors.primary 
    }
});