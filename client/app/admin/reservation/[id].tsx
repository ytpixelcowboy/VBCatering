import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { gstyles } from '@/lib/styles';
import Spacer from '@/components/Spacer';

const reservation = () => {
    const { id } = useLocalSearchParams();

    return (
        <SafeAreaProvider style={{ backgroundColor: "#f9f9f9" }}>
            <SafeAreaView collapsable={true}>
                <View style={{  
                    paddingHorizontal: 14,
                    width: "100%",
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5
                }}>
                    <TouchableOpacity style={{
                        padding: 5
                    }}
                        onPress={() => {
                            if (router.canGoBack()) {
                                router.back();
                            } else {
                                router.navigate("/admin/(tabs)/dashboard")
                            }
                        }}
                    >
                        <MaterialIcons name='arrow-back' size={28} />
                    </TouchableOpacity>
                    <Text style={{ ...gstyles.t_semibold_dark, fontSize: 14 }}>{"Back"}</Text>
                </View>
                <View style={{
                    paddingHorizontal : 18,
                    width : "100%",
                }}>
                    <Text style={{ ...gstyles.t_semibold_dark, fontSize: 24, }}>{"Select Reservation Type"}</Text>
                    <Spacer size={10} />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default reservation