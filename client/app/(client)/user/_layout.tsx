import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import DrawerHolder from '@/components/DrawerHolder'
import { DRAWERITEM_CLIENT } from '@/lib/const'

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='profile' />
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        </Stack>

    )
}

export default RootLayout

const styles = StyleSheet.create({})