import { Platform, useWindowDimensions } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Tabs } from 'expo-router';
import SideDrawer from '@/view/client/drawer';


function HomeTabs() {
    const width = useWindowDimensions().width;
    const isWeb = Platform.OS === 'web';

    return (
        <Tabs
            safeAreaInsets={{ top: 10 }}
            screenOptions={{
                tabBarActiveTintColor: "green",
                tabBarStyle: (isWeb && width > 512) ? { display: "none" } : {},
            }}>
            <Tabs.Screen
                name='reservations'
                options={{
                    title: "Reservations",
                    tabBarIcon: () => <MaterialIcons name='shopping-cart' size={25} />
                }} />
            <Tabs.Screen
                name='inbox'
                options={{
                    title: "Inbox",
                    tabBarIcon: () => <MaterialIcons name='inbox' size={25} />
                }} />
            <Tabs.Screen
                name="activities"
                options={{
                    title: "Notification",
                    tabBarIcon: () => <MaterialIcons name='notifications' size={25} />
            }}/>
            <Tabs.Screen
                name="menu"
                options={{
                    title: "Menu",
                    tabBarIcon: () => <MaterialIcons name='grid-view' size={25} />
                }}
            />
        </Tabs>
    );
}

const RootLayout = () => {
    const width = useWindowDimensions().width;

    const isWeb = Platform.OS === 'web';

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            {(isWeb && width > 512) ? <SideDrawer/> : <HomeTabs />}
        </GestureHandlerRootView>
    );
};

export default RootLayout;
