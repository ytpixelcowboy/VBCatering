import { Text, View, Image, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native'
import React from 'react'
import Spacer from '@/components/Spacer';
import Divider from '@/components/Divider';
import { gstyles } from '../styles';
import { router } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { IMG_BANNER_LOGO } from '@/lib/assets';


const login = () => {
    return (
        <SafeAreaProvider style={{backgroundColor: "#f9f9f9"}}>
            <SafeAreaView style={{ flex: 1 }} collapsable={true}>
                <ScrollView style={{ 
                    width: "100%" 
                    }}>
                    <View style={{ ...gstyles.container, ...gstyles.container_center }}>
                        <Image
                            style={{
                                width: 250,
                                height : 150,
                                resizeMode: "contain"
                            }}
                            source={IMG_BANNER_LOGO} />

                        <Text style={gstyles.t_header}>Login to your account</Text>

                        <View style={gstyles.container_forms}>
                            <Text style={{...gstyles.t_semibold, fontSize: 14}}>Email</Text>
                            <Spacer size={2} />
                            <TextInput style={gstyles.input} />
                            <Spacer size={5} />
                            <Text style={{...gstyles.t_semibold, fontSize: 14}}>Password</Text>
                            <Spacer size={2} />
                            <TextInput style={gstyles.input} secureTextEntry={true} />
                            <Spacer size={10} />
                            <View style={{
                                alignItems: "center"
                            }}>
                                <TouchableOpacity style={gstyles.btn_primary} onPress={() => {
                                    router.push("/(auth)/auth/verify")
                                }}>
                                    <Text style={gstyles.t_semibold_dark}>LOGIN</Text>
                                </TouchableOpacity>
                                <Spacer size={5} />
                                <TouchableOpacity onPress={()=>{
                                    router.push("/(auth)/recover")
                                }}>
                                    <Text style={{ textDecorationLine: "underline", fontSize : 14 }}>Forgot Password</Text>
                                </TouchableOpacity>
                                <Spacer size={5} />
                                <Divider variant="default" />
                                <Spacer size={5} />
                                <Text style={{...gstyles.t_subtitle}}>You dont have an account yet ?, Click Here</Text>
                                <Spacer size={5} />
                                <TouchableOpacity style={gstyles.btn_primary} onPress={() => {
                                    router.push("/(auth)/signin")
                                }}>
                                    <Text style={gstyles.t_semibold_dark}>CREATE NEW ACCOUNT</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default login