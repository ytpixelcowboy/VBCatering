import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { gstyles } from '@/lib/styles'
import { Image } from 'expo-image'
import Spacer from '@/components/Spacer'
import { router } from 'expo-router'
import { IMG_BANNER_LOGO } from '@/lib/assets'
import { sleep } from '@/lib/utils'

const root = () => {
    useEffect(() => {
        (async() => {
            await sleep(5000)
            router.replace("/(auth)/login")
        })();
    }, [])

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
                                height: 150,
                                resizeMode: "contain"
                            }}
                            source={IMG_BANNER_LOGO}
                        />

                        <Text style={gstyles.t_header}>Password Reset Successfully</Text>
                        <Spacer size={10} />
                        <View style={gstyles.container_forms}>
                            <Text style={{ ...gstyles.t_base_dark, textAlign: "center", fontSize : 14 }}>We have successfully reset your password, you may now login to your account.</Text>
                            <Spacer size={20} />
                            <Text style={{ ...gstyles.t_semibold, textAlign: "center", fontSize : 14 }}>Redirecting to login page...</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default root

const styles = StyleSheet.create({})