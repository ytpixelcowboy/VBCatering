import { StyleSheet } from "react-native"

export const gstyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    container_center: {
        alignItems: "center",
        justifyContent: "center",
    },
    container_forms: {
        width: "100%",
        maxWidth: 520,
        marginTop: 20,
        alignContent: "center"
    },
    container_type: {
        minWidth: 250,
        flexDirection: "row",
        alignItems: "center"
    },
    table_cell: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    input: {
        flex: 1,
        backgroundColor: "#D9D9D9",
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 18
    },
    sm_input: {
        minWidth: 50,
        backgroundColor: "#D9D9D9",
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 18
    },
    btn_primary: {
        minWidth: 60,
        alignSelf: "center",
        height: 50,
        backgroundColor: "#A9B091",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    btn_negative: {
        minWidth: 60,
        alignSelf: "center",
        height: 50,
        backgroundColor: "#F3274C",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    btn_nuetral: {
        minWidth: 60,
        alignSelf: "center",
        height: 50,
        backgroundColor: "#6E69F0",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        color: "#FFFFFF"
    },
    btn_primary_transparent: {
        minWidth: 60,
        alignSelf: "center",
        height: 50,
        backgroundColor: "#C5D0A400",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    dropshadow_sm: {
        shadowColor: "#00000045",
        shadowRadius: 2,
        shadowOffset: { width: 2, height: 2 }
    },
    dropshadow_md: {
        shadowColor: "#00000045",
        shadowRadius: 4,
        shadowOffset: { width: 2, height: 2 }
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