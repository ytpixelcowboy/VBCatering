import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { ThemeProvider } from '@react-navigation/native';

const RootLayout = () => {

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <StatusBar barStyle={"dark-content"} />
            <Stack.Screen name='login'/>
            <Stack.Screen name='signin' />
            <Stack.Screen name='auth/verify' />
            <Stack.Screen name='auth/registration/activation' />
            <Stack.Screen name='auth/registration/verify' />
            <Stack.Screen name='recovery/success' />
            <Stack.Screen name='recovery/updatepassword' />
            <Stack.Screen name='recovery/verify' />
        </Stack>
    )
}

export default RootLayout

const styles = StyleSheet.create({})