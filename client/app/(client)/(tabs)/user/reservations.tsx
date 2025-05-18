import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const reservations = () => {
  return (
    <View>
      <Text>reservations</Text>
      <Link href={"/(client)/createReservation"}>Create Reservation</Link>
    </View>
  )
}

export default reservations

const styles = StyleSheet.create({})