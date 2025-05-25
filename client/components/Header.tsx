import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { ReactElement } from 'react'
import { router } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { gstyles } from '@/lib/styles';

type Props = {
    headerLeft? : string | React.ComponentType;
    headerTitle? : string | React.ComponentType;
    headerright? : string | React.ComponentType;
}

const Header = () => {
    return (
        <View style={{
            paddingVertical: 14,
            paddingHorizontal: 14,
            width: "100%",
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            gap: 5
        }}>
            <View style={{
                flex : 3
            }}>

            </View>
            <View style={{
                flex : 1
            }}>

            </View>
            <View style={{
                flex : 2
            }}>

            </View>
            <TouchableOpacity style={{
                padding: 5
            }}
                onPress={() => {
                    if (router.canGoBack()) {
                        router.back();
                    }
                }}
            >
                <MaterialIcons name='arrow-back' size={28} />
            </TouchableOpacity>
            <Text style={{ ...gstyles.t_semibold_dark, fontSize: 14 }}>{"Back"}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})