import { FlatList, ScrollView, StyleProp, StyleSheet, Text, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { ReactNode, useEffect, useState } from 'react'
import { gstyles } from '@/lib/styles'
import Spacer from './Spacer'
import Ionicons from "@expo/vector-icons/MaterialIcons";
import TruncatedText from './TruncatedText';


type Props = {
    style?: StyleProp<ViewStyle>,
    label?: string,
    isFocus? : boolean,
    displayValue? : string,
    onPress: () => void,
    children?: React.ReactNode,
}

const FilterDropdown = (props: Props) => {
    return (
        <View style={props.style}>
            {
                props.label &&
                (
                    <>
                        <Text style={{...gstyles.t_semibold, fontSize : 14}}>{props.label}</Text>
                        <Spacer size={5} />
                    </>
                )
            }
            <View style={{ minWidth: 120, alignSelf: "flex-start" }}>
                <TouchableOpacity
                    onPress={props.onPress}
                >
                    <View style={{
                        alignItems: "center",
                        minWidth: 180,
                        height: 50,
                        backgroundColor: "transparent",
                        borderColor: "#D9D9D9",
                        borderWidth : 2,
                        borderRadius: 16,
                        paddingVertical: 14,
                        paddingLeft: 18,
                        paddingRight: 10,
                        flexDirection: "row",
                        gap: 5,
                    }}>
                        <Ionicons name='filter-list' size={25} />
                        <TruncatedText style={{ textAlign: "left", marginLeft : 5 }} size={200} content={props.displayValue || "Filters"} />
                    </View>
                </TouchableOpacity>
                {
                    props.isFocus &&
                    <View style={{
                        width: "100%",
                        position: 'absolute',
                        top: 55,
                        left: 0,
                        right: 0,
                        zIndex: 9999,
                        minHeight: 50,
                        maxHeight: 200,
                        backgroundColor: "#D9D9D9",
                        borderRadius: 5,
                        paddingVertical: 14,
                        paddingLeft: 12,
                        paddingRight: 5,
                        gap: 20,...gstyles.dropshadow_md
                    }}>
                        <ScrollView
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={true}
                            contentContainerStyle={{ paddingBottom: 8 }}
                        >
                            {props.children}
                        </ScrollView>
                    </View>
                }
            </View>
        </View>
    )
}


export default FilterDropdown

const styles = StyleSheet.create({})