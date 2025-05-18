import { FlatList, ScrollView, StyleProp, StyleSheet, Text, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { useEffect, useState } from 'react'
import { gstyles } from '@/app/styles'
import Spacer from './Spacer'
import Ionicons from "@expo/vector-icons/MaterialIcons";
import { IFilterData } from '@/lib/types';


type Props = {
    style?: StyleProp<ViewStyle>,
    label?: string,
    isFocus?: boolean,
    selected?: IFilterData,
    allowType?: boolean,
    onPress: () => void,
    onSelect: (item: IFilterData) => void,
    onValueChange?: (value: string | undefined) => void,
    items?: IFilterData[]
}

const Dropdown = (props: Props) => {
    const [value, setValue] = useState(props.selected?.title || "");

    return (
        <View style={props.style}>
            {
                props.label &&
                (
                    <>
                        <Text style={gstyles.t_semibold}>{props.label}</Text>
                        <Spacer size={5} />
                    </>
                )
            }
            <View style={{ minWidth: 50, }}>
                <TouchableOpacity
                    onPress={props.onPress}
                >
                    <View style={{
                        height: 50,
                        backgroundColor: "#D9D9D9",
                        borderRadius: 5,
                        paddingVertical: 14,
                        paddingLeft: 18,
                        paddingRight: 10,
                        flexDirection: "row",
                        gap: 5,
                        alignItems: 'center',
                        justifyContent: "center",
                    }}>
                        {
                            props.allowType ? (
                                <TextInput
                                    style={{
                                        minWidth : 30,
                                        maxWidth : 1,
                                        alignSelf: "flex-start",
                                    }}
                                    onChangeText={(text) => {
                                        setValue(text);
                                        props.onValueChange?.(text);
                                    }}
                                    value={value}
                                />
                            ) : (
                                <Text style={{ ...gstyles.t_semibold_dark, minWidth: 20 }}>{props.selected?.title || ""}</Text>
                            )
                        }
                        <Ionicons name='arrow-drop-down' size={28} />
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
                            {
                                props?.items?.map((e, idx) => (
                                    <TouchableOpacity
                                        key={idx}
                                        onPress={() => props.onSelect(e)}
                                        style={{
                                            paddingVertical: 6,
                                            paddingHorizontal: 6,
                                        }}>
                                        <Text style={{ ...gstyles.t_semibold, minWidth: 50 }}>{e.title || " "}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>
                    </View>
                }
            </View>
        </View>
    )
}


export default Dropdown

const styles = StyleSheet.create({})