import {View } from 'react-native'
import React from 'react'

type Props = {
    size : number
}

const Spacer = (props : Props) => {
  return (
    <View style={{
        marginTop : props.size,
        marginBottom : props.size
    }} />
  )
}

export default Spacer