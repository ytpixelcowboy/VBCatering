import React, { useEffect } from 'react'
import { router, Stack, useSegments } from 'expo-router'
import { DRAWERITEM_ADMIN, DRAWERITEM_CLIENT } from '@/lib/const'
import DrawerHolder from '@/components/DrawerHolder'
import HeaderMenu from '@/components/HeaderMenu'

const RootLayout = () => {
  return (
    <DrawerHolder
      drawerItems={DRAWERITEM_ADMIN}>
      <Stack screenOptions={{
        headerRight: () => <HeaderMenu />   
      }}>
        <Stack.Screen name='(tabs)' options={{
          headerShown: false
        }} />
        <Stack.Screen name='manageaccounts' options={{
          title : "Manage Accounts"
        }}/>
        <Stack.Screen name='managefinance' options={{
          title : "Manage Finance"
        }}/>
        <Stack.Screen name='financeanalytics' options={{
          title : "Finance Analytics"
        }}/>
        <Stack.Screen name='customerfeedbacks' options={{
          title : "Customer Feedback"
        }}/>
        <Stack.Screen name='manageannouncements' options={{
          title : "Manage Announcements"
        }}/>
        <Stack.Screen name='transactionhistory' options={{
          title : "Transaction History"
        }}/>
        <Stack.Screen name='activitylogs' options={{
          title : "Activity Logs"
        }}/>
        <Stack.Screen name='reservation/[id]' options={{
          title : "View Reservation"
        }}/>
      </Stack>
    </DrawerHolder>

  )
}

export default RootLayout