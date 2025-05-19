import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { router, useSegments } from 'expo-router';
import { gstyles } from '@/app/styles';
import { IDrawerItem } from '@/lib/types';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'expo-image';
import Spacer from './Spacer';
import { DRAWERITEM_CLIENT } from '@/lib/const';

type Props = {
    children?: React.ReactNode,
    drawerItems?: IDrawerItem[];
}


const DrawerHolder = (props: Props) => {

    const isWeb = Platform.OS == "web";
    const width = useWindowDimensions().width;

    const uri = useSegments();

    let pathName = uri.reverse()[0] || DRAWERITEM_CLIENT[0].name;

    return (
        <View style={{ height: "100%", width: "100%", flexDirection : "row", position : "fixed" }}>
            {
                (props.drawerItems && isWeb && props.drawerItems && width > 448)
                &&
                <View style={{
                    height: "100%",
                    paddingHorizontal: 18,
                    paddingVertical: 24,
                    backgroundColor: "#E4E4E4",
                    width: width > 620 ? 264 : 100,
                    gap: 2,
                    zIndex : 1,
                    ...gstyles.dropshadow_sm,
                }} >
                    <Image
                        style={{
                            width: (width > 620) ? 150 : 80,
                            height: 80,
                            resizeMode: "contain"
                        }}
                        source={require("../assets/images/banner_logo_fit.png")} />
                    <Spacer size={8} />
                    <FlatList
                        style={{
                            flex : 1
                        }}
                        data={props.drawerItems}
                        renderItem={(e) => (
                            <TouchableOpacity style={e.item.name.toLocaleLowerCase() === pathName ? styles.btn_primary : styles.btn_primary_transparent}
                                onPress={() => {
                                    router.push(e.item.url);
                                }}>
                                <Image
                                    style={{
                                        width: 30,
                                        height: 30,
                                        resizeMode: "contain"
                                    }}
                                    source={e.item.icon}
                                />
                                {
                                    width > 620
                                    &&
                                    <Text style={{ ...gstyles.t_semibold_dark, fontSize: 14 }}>{e.item.label}</Text>
                                }
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.label}
                    />

                </View>
            }
            <View style={{
                width: "100%",
            }}>
                {props.children}
            </View>
        </View>
    )
}

export default DrawerHolder

const styles = StyleSheet.create({
    btn_primary: {
        minWidth: 60,
        height: 60,
        backgroundColor: "#C5D0A4",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        gap: 16
    },
    btn_primary_transparent: {
        minWidth: 60,
        height: 60,
        backgroundColor: "#C5D0A400",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        gap: 16
    },
})