import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const reservation = () => {
    const { id } = useLocalSearchParams();

    return (
        <SafeAreaProvider style={{ backgroundColor: "#f9f9f9" }}>
            <SafeAreaView style={{padding: 18}} collapsable={true}>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default reservation