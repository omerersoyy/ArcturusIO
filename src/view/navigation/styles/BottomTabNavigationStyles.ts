import { StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";

export const Styles = StyleSheet.create({
   
    activeTabBarLabel: {
        color: Colors.primary,
        fontWeight: "600",
        fontSize: 15
    },
    inactiveTabBarLabel: {
        color: Colors.white,
        fontWeight: "600",
        fontSize: 15
    },
    activeBackground: {
        color: Colors.secondary,
    },
    inactiveBackground: {
        backgroundColor: Colors.secondary
    }
});