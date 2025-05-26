import { View, Text, SafeAreaView, TouchableOpacity, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { gstyles } from '@/lib/styles';
import Spacer from '@/components/Spacer';
import { formatTime } from '@/lib/utils';
import Divider from '@/components/Divider';
import TabSelector from '@/components/TabSelector';
import { IFilterData } from '@/lib/types';

const TabFilters = [
    {
        id: "tab-inclusion",
        title: "Inclusions",
    },
    {
        id: "tab-payment",
        title: "Payment",
    }
] as IFilterData[]

const reservation = () => {
    const { id } = useLocalSearchParams();
    const width = useWindowDimensions().width;

    const [tabSelected, setTabSelected] = useState<IFilterData>(TabFilters[0]);

    const isWeb = () => {
        return width > 448
    }

    const ActionButtons = () => {
        return (
            <View style={{
                ...width < 780 ? { width: "100%" } : {},
                flexDirection: width > 780 ? "row" : "column",
                gap: 6,
                justifyContent: "center"
            }}>
                <TouchableOpacity style={{
                    ...width < 780 ? { width: "100%" } : {},
                    ...gstyles.btn_primary,
                    paddingHorizontal: 34
                }} onPress={() => {
                    //
                }}>
                    <Text style={{ ...gstyles.t_semibold, color: "#000000" }}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...width < 780 ? { width: "100%" } : {},
                        ...gstyles.btn_negative,
                        paddingHorizontal: 34
                    }}
                    onPress={() => {
                        //
                    }}>
                    <Text style={{ ...gstyles.t_semibold, color: "#FFFFFF" }}>Decline</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaProvider style={{ backgroundColor: "#f9f9f9" }}>
            <SafeAreaView style={{ flex: 1 }} collapsable={true}>
                <View style={{
                    paddingVertical: 24,
                    paddingHorizontal: 24,
                    width: "100%",
                }}>
                    <View style={{
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        gap: 18
                    }}>
                        <View style={{
                            gap: 10
                        }}>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 13
                            }}>
                                <MaterialIcons name='timer' size={35} color={"#303227"} />
                                <Text style={{ ...gstyles.t_bold_dark, fontSize: 34, color: "#303227" }}>Pending</Text>
                            </View>
                            <Text style={{ ...gstyles.t_base, fontSize: 12, color: "#FFFFFF", backgroundColor: "#303227", borderRadius: 25, paddingHorizontal: 14, paddingVertical: 6 }}>{`ID: #${id}`}</Text>
                        </View>
                        <ActionButtons />
                    </View>
                    <Spacer size={20} />
                    <View style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 5
                    }}>
                        <View style={gstyles.container_type}>
                            <MaterialIcons name='room-service' size={25} />
                            <View style={{
                                flex: 1,
                                paddingHorizontal: 18,
                            }}>
                                <Text style={{ ...gstyles.t_base, fontSize: 14 }}>Type:</Text>
                                <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{"Catering Only"}</Text>
                            </View>
                        </View>
                        <View style={gstyles.container_type}>
                            <MaterialIcons name='calendar-month' size={25} />
                            <View style={{
                                flex: 1,
                                paddingHorizontal: 18,
                            }}>
                                <Text style={{ ...gstyles.t_base, fontSize: 14 }}>Reservation Target:</Text>
                                <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{"5/22/2025, 10:06:57 AM"}</Text>
                            </View>
                        </View>
                        <View style={gstyles.container_type}>
                            <MaterialIcons name='credit-card' size={25} />
                            <View style={{
                                flex: 1,
                                paddingHorizontal: 18,
                            }}>
                                <Text style={{ ...gstyles.t_base, fontSize: 14 }}>Payment Status:</Text>
                                <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{"Reservation Paid"}</Text>
                            </View>
                        </View>
                        <View style={gstyles.container_type}>
                            <MaterialIcons name='people' size={25} />
                            <View style={{
                                flex: 1,
                                paddingHorizontal: 18,
                            }}>
                                <Text style={{ ...gstyles.t_base, fontSize: 14 }}>Reservation By:</Text>
                                <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{"Elbert Rosales"}</Text>
                            </View>
                        </View>
                        <View style={gstyles.container_type}>
                            <MaterialIcons name='people' size={25} />
                            <View style={{
                                flex: 1,
                                paddingHorizontal: 18,
                            }}>
                                <Text style={{ ...gstyles.t_base, fontSize: 14 }}>Created At:</Text>
                                <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{"5/22/2025, 10:06:57 AM"}</Text>
                            </View>
                        </View>
                    </View>
                    <Spacer size={15} />
                    <TabSelector selected={tabSelected} items={TabFilters} onSelect={(e) => setTabSelected(e)} />

                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default reservation