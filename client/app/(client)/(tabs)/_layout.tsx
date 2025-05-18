import { Platform, useWindowDimensions } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import UserProfile from "./user/profile";
import UserReservations from "./user/reservations";
import UserInbox from "./user/inbox";
import MoreMenu from "../../../view/client/menu";

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

    const width = useWindowDimensions().width;
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width > 620 ? "permanent" : "back",
                drawerStyle: { width: 320 },
                swipeEnabled: false,
                headerLeft: width > 620 ? () => null : undefined,
            }}
        >
            <Drawer.Screen
                name="Reservations"
                component={UserReservations}
                options={{
                    drawerLabel: "Reservations",
                    drawerIcon: () => <MaterialIcons name='shopping-cart' size={25} />
                }}
            />
            <Drawer.Screen
                name="Inbox"
                component={UserInbox}
                options={{
                    drawerLabel: "Inbox",
                    drawerIcon: () => <MaterialIcons name='inbox' size={25} />
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={UserProfile}
                options={{
                    drawerLabel: 'Profile',
                    drawerIcon: () => <MaterialIcons name="person-outline" size={20} />,
                }}
            />
            <Drawer.Screen
                name="Menu"
                component={MoreMenu}
                options={{
                    drawerLabel: 'Menu',
                    drawerIcon: () => <MaterialIcons name="more" size={20} />,
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
