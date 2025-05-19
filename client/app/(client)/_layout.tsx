import React from 'react'
import { Stack } from 'expo-router'
import { DRAWERITEM_CLIENT } from '@/lib/const'
import DrawerHolder from '@/components/DrawerHolder'

const RootLayout = () => {
  return (
    <DrawerHolder
      drawerItems={DRAWERITEM_CLIENT}>
      <Stack>
        <Stack.Screen name='reservation' options={{ headerShown: false }} />
        <Stack.Screen name='user' options={{ headerShown: false }} />
        <Stack.Screen name='createReservation' options={{ headerShown: false }} />
      </Stack>
    </DrawerHolder>

  )
}

export default RootLayout