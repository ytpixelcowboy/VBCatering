import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { ReactElement } from 'react'
import { router } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { gstyles } from '@/lib/styles';
import VerticalDivider from './VerticalDivider';

const WebHeader = () => {
    const width = useWindowDimensions().width;

    if(width < 448){
        return <></>
    }

    return (
        <View style={{
            width : "100%",
            height: 65,
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor : "white",
            justifyContent : "flex-end",
            shadowColor: "#00000045",
            shadowRadius: 5,
            shadowOffset: { width: 0, height: 2 },
            gap: 15
        }}>
            <MaterialIcons name='light-mode' size={25} />
            <MaterialIcons name='notifications' size={25} />
            <MaterialIcons name='inbox' size={25} />
            <MaterialIcons name='settings' size={25} />
            <View style={{
                height: "100%",
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
                paddingHorizontal: 14
            }}>
                <VerticalDivider variant='light' />
                <MaterialIcons name='person-outline' size={25} />
                <View style={{
                    width: 160,
                }}>
                    <Text style={{ ...gstyles.t_semibold_dark, fontSize: 14 }}>{"Palma, Carl Jordee"}</Text>
                    <Text style={{ ...gstyles.t_base, fontSize: 12 }}>{"Admin"}</Text>
                </View>
                <MaterialIcons name='more-vert' size={25} />
            </View>
        </View>
    )
}

export default WebHeader