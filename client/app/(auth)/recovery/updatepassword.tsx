import { Text, View, Image, TextInput, ScrollView, SafeAreaView, TouchableOpacity, Platform, Alert } from 'react-native'
import React, { useState } from 'react'
import Spacer from '@/components/Spacer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { IFilterData } from '@/lib/types';
import { Filters_Sex } from '@/lib/const';
import CalendarModal from '@/components/CalendarModal';
import { IMG_BANNER_LOGO } from '@/lib/assets';
import { gstyles } from '@/app/styles';


const root = () => {
    const date = new Date();

    return (
        <SafeAreaProvider style={{ backgroundColor: "#f9f9f9" }}>
            <SafeAreaView style={{ flex: 1 }} collapsable={true}>
                <ScrollView style={{
                    width: "100%",
                    position: "relative"
                }}
                    nestedScrollEnabled={true}
                >
                    <View style={{ ...gstyles.container, ...gstyles.container_center }}>
                        <Image
                            style={{
                                width: 250,
                                resizeMode: "contain"
                            }}
                            source={IMG_BANNER_LOGO} />

                        <Text style={gstyles.t_header}>Reset Password</Text>
                        <Spacer size={10} />
                        <View style={gstyles.container_forms}>
                            <Text style={{ ...gstyles.t_base_dark, textAlign: "center", fontSize: 14 }}>Please enter your email address to search your account.</Text>
                            <Spacer size={10} />
                            <View style={{ width: "100%" }}>
                                <Text style={{ ...gstyles.t_semibold, fontSize: 14 }}>Password</Text>
                                <Spacer size={5} />
                                <TextInput style={gstyles.input} secureTextEntry={true} />
                            </View>
                            <Spacer size={10} />
                            <View style={{ width: "100%" }}>
                                <Text style={{ ...gstyles.t_semibold, fontSize: 14 }}>Confirm Password</Text>
                                <Spacer size={5} />
                                <TextInput style={gstyles.input} secureTextEntry={true} />
                            </View>
                            <Spacer size={10} />
                            <TouchableOpacity style={gstyles.btn_primary} onPress={() => {
                                 router.replace("/(auth)/recovery/success");
                            }}>
                                <Text style={gstyles.t_semibold_dark}>CONFIRM</Text>
                            </TouchableOpacity>
                            <Spacer size={15} />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default root