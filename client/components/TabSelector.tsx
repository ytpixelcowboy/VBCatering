import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IFilterData } from '@/lib/types'
import { gstyles } from '@/lib/styles'


type Props = {
    selected: IFilterData,
    items: IFilterData[],
    onSelect : (value : IFilterData)=> void
}

const TabSelector = (props: Props) => {
    return (
        <View style={{
            alignSelf: "flex-start",
            height: 50,
            backgroundColor: "#D9D9D9",
            flexDirection: "row",
            borderRadius: 8
        }}>
            {
                props.items.map((e, idx) => (
                    <TouchableOpacity
                        key={idx}
                        style={{ ...props.selected.id === e.id ? styles.btn_active : styles.btn_unactive }}
                        onPress={()=>props.onSelect(e)}
                    >
                        <Text style={{ ...props.selected.id === e.id ? 
                            { ...gstyles.t_semibold_dark, color: "#FFFFFF" } : 
                            { ...gstyles.t_semibold_dark, }}}
                            >{e.title}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

export default TabSelector

const styles = StyleSheet.create({
    btn_active: {
        minWidth: 150,
        height: 50,
        backgroundColor: "#A9B091",
        borderRadius: 8,
        alignItems: "center",
        justifyContent : "center",
        gap: 12
    },
    btn_unactive: {
        minWidth: 150,
        height: 50,
        backgroundColor: "#C5D0A400",
        borderRadius: 8,
        alignItems: "center",
        justifyContent : "center",
        gap: 12
    },
})