import { Platform, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const SideDrawer = () => {
  const width = useWindowDimensions().width;
    const isWeb = Platform.OS === 'web';

    return (
        <Drawer
            screenOptions={{
                drawerType: (isWeb && width > 512) ? "permanent" : "back",
                drawerStyle: { width: 320 },
                swipeEnabled: false,
                headerLeft: (isWeb && width > 512) ? () => null : undefined,
            }}
        >
            <Drawer.Screen
                name="reservations"
                options={{
                    drawerLabel: "Reservations",
                    drawerIcon: () => <MaterialIcons name='shopping-cart' size={25} />
                }}
            />
            <Drawer.Screen
                name="inbox"
                options={{
                    drawerLabel: "Inbox",
                    drawerIcon: () => <MaterialIcons name='inbox' size={25} />
                }}
            />
            <Drawer.Screen
                name="activities"
                options={{
                    drawerLabel: "Notifications",
                    drawerIcon: () => <MaterialIcons name='notifications' size={25} />
                }}
            />
            <Drawer.Screen
                name="./user/profile"
                options={{
                    drawerLabel: "Profile",
                    drawerIcon: () => <MaterialIcons name='notifications' size={25} />
                }}
            />
            <Drawer.Screen
                name="menu"
                options={{
                    sceneStyle:{ display : "none"},
                    drawerIcon : () => null
                }}
            />
        </Drawer>
    );
}

export default SideDrawer