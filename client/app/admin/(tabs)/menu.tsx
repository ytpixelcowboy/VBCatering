import { Platform, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router';

const menu = () => {

  const width = useWindowDimensions().width;
  const isWeb = Platform.OS === 'web';

  if (isWeb && width > 448) {
    return (
      <Redirect href={"/admin/dashboard"} />
    )
  } else {
    return (
      <View>
        <Text>more</Text>
      </View>
    )
  }


}

export default menu

const styles = StyleSheet.create({})