import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { gstyles } from '@/lib/styles'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

type Props = {
    selected: "list" | "grid",
    showTitle: boolean,
    onSelect: (value: "list" | "grid") => void
}

const ViewType = (props: Props) => {
    return (
        <View style={{
            alignSelf: "flex-start",
            height: 50,
            backgroundColor: "#D9D9D9",
            flexDirection: "row",
            borderRadius: 16
        }}>
            <TouchableOpacity
                style={{ ...props.selected === "list" ? styles.btn_active : styles.btn_unactive, gap : 5, flexDirection : "row"  }}
                onPress={() => props.onSelect("list")}
            >
                <MaterialIcons name='view-list' color={props.selected === "list" ? "white" : "black"} size={20} />
                {
                    props.showTitle
                    &&
                    <Text style={{
                        ...props.selected === "list" ?
                            { ...gstyles.t_semibold_dark, color: "#FFFFFF" } :
                            { ...gstyles.t_semibold_dark, }
                    }}
                    >{"List"}</Text>
                }

            </TouchableOpacity>
            <TouchableOpacity
                style={{ ...props.selected === "grid" ? styles.btn_active : styles.btn_unactive, gap : 5, flexDirection : "row" }}
                onPress={() => props.onSelect("grid")}
            >
                <MaterialIcons name='grid-on' color={props.selected === "grid" ? "white" : "black"} size={20} />
                {
                    props.showTitle
                    &&
                    <Text style={{
                        ...props.selected === "grid" ?
                            { ...gstyles.t_semibold_dark, color: "#FFFFFF" } :
                            { ...gstyles.t_semibold_dark, }
                    }}
                    >{"Grid"}</Text>
                }

            </TouchableOpacity>
        </View>
    )
}

export default ViewType

const styles = StyleSheet.create({
    btn_active: {
        minWidth: 55,
        height: 50,
        backgroundColor: "#6E69F0",
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        gap: 12
    },
    btn_unactive: {
        minWidth: 55,
        height: 50,
        backgroundColor: "#C5D0A400",
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        gap: 12
    },
})