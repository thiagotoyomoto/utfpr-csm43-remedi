import { StyleSheet } from "react-native";
import { winHeight, winWidth } from "./GlobalStyles";

const styles = StyleSheet.create({
    table: {
        width: winWidth * 0.9,
        marginLeft: "auto",
        marginRight: "auto",
    },
    tableTitle: {
        fontSize: 22,
        margin: 8
    },
    medicine:{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    medicineRightSide: {
        alignItems: "center",
        flexDirection: "row",
    },
    medicineLeftSide: {
        flexDirection: "row",
    },
    medicineTime: {
        fontSize: 18,
        margin:  4,
        marginLeft: 8,
    },
    medicineName: {
        fontSize: 16,
        margin:  4,
    },
    medicineAlert: {
        margin:  4
    },
    medicineNotificationOn: {
        margin:  4
    },
    dayHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export {styles}