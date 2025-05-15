import { FlatList, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { gstyles } from '@/app/styles'
import Spacer from './Spacer'
import Ionicons from "@expo/vector-icons/MaterialIcons";
import { IFilterData } from '@/lib/types';


type Props = {
    style?: StyleProp<ViewStyle>,
    label?: string,
    isFocus?: boolean,
    selected?: IFilterData,
    onPress: () => void,
    onSelect: (item: IFilterData) => void,
    items?: IFilterData[]
}

const Dropdown = (props: Props) => {
    return (
        <View style={props.style}>
            {
                props.label &&
                (
                    <>
                        <Text style={gstyles.t_semibold}>{props.label}</Text>
                        <Spacer size={2} />
                    </>
                )
            }
            <View style={{ minWidth: 100 }}>
                <TouchableOpacity
                    onPress={props.onPress}
                >
                    <View style={{
                        height: 50,
                        backgroundColor: "#D9D9D9",
                        borderRadius: 5,
                        paddingVertical: 14,
                        paddingHorizontal: 18,
                        flexDirection: "row",
                        gap: 5,
                        alignItems: 'center'
                    }}>
                        <Text style={{ ...gstyles.t_semibold, minWidth: 50 }}>{props.selected?.title || ""}</Text>
                        <Ionicons name='arrow-drop-down' size={35} />
                    </View>
                </TouchableOpacity>
                {
                    props.isFocus &&
                    <View style={{
                        position: 'absolute',
                        top: 55,
                        left: 0,
                        right: 0,
                        zIndex: 9999,
                    }}>
                        <View style={{
                            minHeight: 50,
                            backgroundColor: "#D9D9D9",
                            borderRadius: 5,
                            paddingVertical: 14,
                            paddingHorizontal: 18,
                        }}>
                            <FlatList
                                data={props?.items}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        onPress={() => props.onSelect(item)}
                                        activeOpacity={1}
                                        style={{
                                            paddingVertical: 6,
                                            paddingHorizontal: 6
                                        }}>
                                        <Text style={gstyles.t_semibold}>{item?.title || " "}</Text>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={item => item?.id.toString()}
                            />
                        </View>

                    </View>
                }
            </View>
        </View>

    )
}

export default Dropdown

const styles = StyleSheet.create({})