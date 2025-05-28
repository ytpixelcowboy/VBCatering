import { StyleProp, StyleSheet, Text, TextProps, TextStyle, View } from 'react-native'
import React from 'react'


type Props = {
    style? : StyleProp<TextStyle>,
    size : number,
    content? : string
}

const TruncatedText = (props : Props) => {
  return (
    <Text style={props.style}>{`${props.content?.substring(0, props.size)}${props.size < (props.content?.length || 0) ? "..." : ""}`}</Text>
  )
}

export default TruncatedText

const styles = StyleSheet.create({})