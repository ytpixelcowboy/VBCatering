import { Platform, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Image } from 'expo-image'
import HeaderMenu from '@/components/HeaderMenu'

const RootLayout = () => {
    const width = useWindowDimensions().width;
    const isWeb = Platform.OS === 'web';

    return (
        <Tabs
            safeAreaInsets={{ top: 10 }}
            screenOptions={{
                tabBarActiveTintColor: "green",
                tabBarStyle: (isWeb && width > 448) ? { display: "none" } : {},
                headerRight: () => <HeaderMenu />
            }}>
            <Tabs.Screen name='dashboard' options={{
                title : "Dashboard",
                tabBarIcon: () => <MaterialIcons name='home' size={25} />,
                tabBarLabel: "Dashboard"
            }} />
            <Tabs.Screen name='managereservations' options={{
                title: "Manage Reservation",
                tabBarIcon: () => <Image style={{
                    width: 25,
                    height: 25
                }} source={require("../../../assets/images/drawer/entries.svg")} />,
                tabBarLabel: "Reservations"
            }} />
            <Tabs.Screen name='managefoods' options={{
                title : "Manage Foods",
                tabBarIcon: () => <Image style={{
                    width: 25,
                    height: 25
                }} source={require("../../../assets/images/drawer/Coffee.svg")} />,
                tabBarLabel: "Foods"
            }} />
            <Tabs.Screen name='inbox' options={{
                title: "Inbox",
                tabBarIcon: () => <MaterialIcons name='inbox' size={25} />,
                tabBarLabel: "Inbox"
            }} />
            <Tabs.Screen name='menu' options={{
                headerShown : false,
                tabBarIcon: () => <MaterialIcons name='grid-view' size={25} />,
                tabBarLabel: "Menu"
            }} />
        </Tabs>
    )
}

export default RootLayout

const styles = StyleSheet.create({})