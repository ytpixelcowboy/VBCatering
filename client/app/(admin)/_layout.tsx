import React, { useEffect } from 'react'
import { router, Stack, useSegments } from 'expo-router'
import { DRAWERITEM_ADMIN, DRAWERITEM_CLIENT } from '@/lib/const'
import DrawerHolder from '@/components/DrawerHolder'

const RootLayout = () => {

  return (
    <DrawerHolder
      drawerItems={DRAWERITEM_ADMIN}>
      <Stack>
        <Stack.Screen name='dashboard' />
        <Stack.Screen name='manageaccounts' />
        <Stack.Screen name='managereservations' />
        <Stack.Screen name='managefoods' />
        <Stack.Screen name='managefinance' />
        <Stack.Screen name='financeanalytics' />
        <Stack.Screen name='customerfeedbacks' />
        <Stack.Screen name='manageannouncements' />
        <Stack.Screen name='transactionhistory' />
        <Stack.Screen name='activitylogs' />
      </Stack>
    </DrawerHolder>

  )
}

export default RootLayout