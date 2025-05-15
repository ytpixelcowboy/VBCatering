import { StyleSheet } from "react-native"

export const gstyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    container_center : {
        alignItems: "center",
        justifyContent: "center",
    },

    container_forms: {
        width: "100%",
        maxWidth: 520,
        marginTop: 20,
        alignContent: "center"
    },
    input: {
        flex : 1,
        backgroundColor: "#D9D9D9",
        borderRadius: 5,
        paddingVertical : 12,
        paddingHorizontal : 18
    },
    sm_input: {
        minWidth : 50,
        backgroundColor: "#D9D9D9",
        borderRadius: 5,
        paddingVertical : 12,
        paddingHorizontal : 18
    },
    btn_primary: {
        minWidth : 200,
        alignSelf: "center",
        height: 50,
        backgroundColor: "#C5D0A4",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    t_header: {
        fontSize: 20,
        color: "#565353",
        fontFamily: "poppins-bold"
    },
    t_base: {
        fontSize: 12,
        color: "#565353",
         fontFamily: "poppins"
    },
    t_subtitle: {
        fontSize: 12,
        color: "#565353",
         fontFamily: "poppins"
    },
    t_base_dark: {
        fontSize: 12,
        color: "#000000",
        fontFamily: "poppins"
    },
    t_semibold: {
        fontSize: 12,
        color: "#565353",
        fontFamily: "poppins-semibold"
    },
    t_semibold_dark: {
        fontSize: 12,
        color: "#000000",
        fontFamily: "poppins-semibold"
    },
    t_bold: {
        fontSize: 12,
        color: "#565353",
        fontFamily: "poppins-bold"
    },
    t_bold_dark: {
        fontSize: 12,
        color: "#000000",
        fontFamily: "poppins-bold"
    }
})