import {ScrollView, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const reservation = () => {
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <ScrollView style={{
                width : "100%"
            }}>
                
            </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default reservation
