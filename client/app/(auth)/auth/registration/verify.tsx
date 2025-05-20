import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { gstyles } from '@/app/styles'
import { Image } from 'expo-image'
import Spacer from '@/components/Spacer'
import { router } from 'expo-router'
import { IMG_BANNER_LOGO } from '@/lib/assets'

const verify = () => {
    return (
        <SafeAreaProvider style={{ backgroundColor: "#f9f9f9" }}>
            <SafeAreaView style={{ flex: 1 }} collapsable={true}>
                <ScrollView style={{
                    width: "100%"
                }}>
                    <View style={{ ...gstyles.container, ...gstyles.container_center }}>
                        <Image
                            style={{
                                width: 250,
                                height : 150,
                                resizeMode: "contain"
                            }}
                            source={IMG_BANNER_LOGO}
                        />

                        <Text style={gstyles.t_header}>Verify your registration</Text>
                        <Spacer size={10} />
                        <View style={gstyles.container_forms}>
                            <Text style={{ ...gstyles.t_base_dark, textAlign: "center",fontSize : 14 }}>An email has been sent to [CLIENT PROVIDED EMAIL] that contains a magic link to verify account creation process, You may check your spam folder in case you cannot find the email</Text>
                            <Spacer size={20} />
                            <Text style={{...gstyles.t_semibold, textAlign: "center", fontSize : 14 }}>Magic link expires within 3 minutes</Text>
                            <Spacer size={10} />
                            <TouchableOpacity style={gstyles.btn_primary} onPress={() => {
                                router.replace("/(auth)/auth/registration/activation")
                            }}>
                                <Text style={gstyles.t_semibold_dark}>VERIFY CODE</Text>
                            </TouchableOpacity>
                            <Spacer size={8} />
                            <Text style={{ ...gstyles.t_base, fontSize: 11,textAlign: "center"  }}>{"(You may resent magic link again after in [TIME FRAME])"}</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default verify

const styles = StyleSheet.create({})