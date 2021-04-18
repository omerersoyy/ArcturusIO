import { StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";

export const Styles = StyleSheet.create({
    tabBarLabel: {
        color: Colors.white
    },
    activeBackground: {
        color: Colors.primary,
    },
    inactiveBackground: {
        backgroundColor: Colors.secondary
    }
});