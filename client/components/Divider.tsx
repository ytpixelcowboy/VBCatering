import {View } from 'react-native'
import React from 'react'

type Props = {
    variant : "default" | "light" | "dark"
}

const Divider = (props : Props) => {
  return (
    <View style={{
        width : "80%",
        height : 3,
        borderRadius : 90,
        backgroundColor : props.variant === "default" ? "#B5BE99" : "#D9D9D9",
        marginTop : 10,
        marginBottom :10,
        alignSelf: "center"
    }} />
  )
}


export default Divider

