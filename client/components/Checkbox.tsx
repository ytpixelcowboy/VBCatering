import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/MaterialIcons";
import { gstyles } from '@/app/styles';

type Props = {
    label?: string,
    isActive?: boolean
    onPress?: () => void,
}

export const Checkbox = (props: Props) => {
    return (
        <View style={{
            alignSelf:"flex-start",
            flexDirection: "row",
            gap: 10,
            alignItems : "center",
            justifyContent : "center"
        }}>
            <TouchableOpacity
                onPress={props.onPress}>
                {
                    props.isActive
                    &&
                    (<Ionicons name='check-box' size={30} color="#B5BE99" />)
                    ||
                    (<Ionicons name='check-box-outline-blank' size={30} color="#B5BE99" />)
                }

            </TouchableOpacity>
            {
                props.label &&
                <Text style={{...gstyles.t_base, fontSize: 14}}>{props.label}</Text>
            }
        </View>
    )
}

export default Checkbox