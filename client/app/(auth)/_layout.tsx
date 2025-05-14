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
        </Stack>
    )
}

export default RootLayout

const styles = StyleSheet.create({})