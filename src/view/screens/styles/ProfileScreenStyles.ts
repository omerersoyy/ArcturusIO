import { StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";

export const Styles = StyleSheet.create({
   container: { 
       flex: 2, 
       backgroundColor: Colors.blueIndigo 
    },
    avatarContainer: { 
        flex: 1, 
        backgroundColor: Colors.white, 
        alignItems: "center", 
        justifyContent: "center" 
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 35,
        marginBottom: 7
    },
    titleStyle: {
        color: Colors.primary,
        fontSize: 21,
        textAlign: "center",
        fontWeight: "bold"
    },
    subTitleStyle: {
        color: Colors.primary,
        textAlign: "center",
        fontSize: 17
    },
    summaryContainer: { 
        flex: 1, 
        justifyContent: "flex-start", 
        paddingHorizontal: 7, 
        paddingVertical: 21, 
        backgroundColor: Colors.blueIndigo 
    },
    iconContainerStyle: {
        height: 75,
        borderColor: Colors.white
    },
    iconTextStyle: {
        color: Colors.white
    }
});