import { Platform } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import UserProfile from "./user/profile";
import UserReservations from "./user/reservations";
import UserInbox from "./user/inbox";

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeTabs() {
    return (
        <Tabs.Navigator
            safeAreaInsets={{ top: 10 }}
            screenOptions={{ 
                tabBarActiveTintColor: "green",
                tabBarStyle: Platform.OS == "web" ? { display: "none" } : {},
             }}>
            <Tabs.Screen
                name='reservations'
                component={UserReservations}
                options={{
                    title: "Reservations",
                    tabBarIcon: () => <MaterialIcons name='shopping-cart' size={25} />
                }} />
            <Tabs.Screen
                name='inbox'
                component={UserInbox}
                options={{
                    title: "Inbox",
                    tabBarIcon: () => <MaterialIcons name='inbox' size={25} />
                }} />
            <Tabs.Screen
                name='profile'
                component={UserProfile}
                options={{
                    title: 'Profile',
                    tabBarIcon: () => <MaterialIcons name="person-outline" size={20} />,
                }} />
        </Tabs.Navigator>
    );
}

function WebDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: 'permanent',
                drawerStyle: { width: 240 },
                swipeEnabled: false,
                headerLeft: Platform.OS === "web" ? () => null : undefined,
            }}
        >
            <Drawer.Screen
                name="reservations"
                component={UserReservations}
                options={{
                    drawerLabel: "Reservations",
                    drawerIcon: () => <MaterialIcons name='shopping-cart' size={25} />
                }}
            />
            <Drawer.Screen
                name="inbox"
                component={UserInbox}
                options={{
                    drawerLabel: "Inbox",
                    drawerIcon: () => <MaterialIcons name='inbox' size={25} />
                }}
            />
            <Drawer.Screen
                name="profile"
                component={UserProfile}
                options={{
                    drawerLabel: 'Profile',
                    drawerIcon: () => <MaterialIcons name="person-outline" size={20} />,
                }}
            />
        </Drawer.Navigator>
    );
}

const RootLayout = () => {
    const isWeb = Platform.OS === 'web';

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            {isWeb ? <WebDrawer /> : <HomeTabs />}
        </GestureHandlerRootView>
    );
};

export default RootLayout;
