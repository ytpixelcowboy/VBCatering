import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet, Button, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Spacer from '@/components/Spacer';
import Divider from '@/components/Divider';
import { router } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { gstyles } from '@/lib/styles';
import { IMG_BANNER_LOGO } from '@/lib/assets';


const verify = () => {

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    const [input4, setInput4] = useState("");
    const [input5, setInput5] = useState("");
    const [input6, setInput6] = useState("");

    return (
        <SafeAreaProvider style={{ backgroundColor: "#f9f9f9" }}>
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

                        <Text style={gstyles.t_header}>Verify Login</Text>
                        <Spacer size={10} />
                        <Text style={{ ...gstyles.t_semibold, textAlign: "center", fontSize: 14}}>{`Enter the 6 digit code that you can find on your preferred Authentication Software`}</Text>
                        <Spacer size={20} />
                        <View style={{
                            ...gstyles.container_forms,
                            gap: 10,
                            flexWrap: "nowrap",
                            flexDirection: "row", 
                            justifyContent: "center"
                        }}>

                            <TextInputOTP onValueChange={setInput1} />
                            <TextInputOTP onValueChange={setInput2} />
                            <TextInputOTP onValueChange={setInput3} />
                            <TextInputOTP onValueChange={setInput4} />
                            <TextInputOTP onValueChange={setInput5} />
                            <TextInputOTP onValueChange={setInput6} />

                        </View>
                        <Spacer size={20} />
                        <TouchableOpacity style={{
                            ...gstyles.btn_primary,
                            paddingHorizontal : 34
                        }} onPress={() => {
                            if(input1 === "1"){
                                router.replace("/admin/dashboard")
                            }else{
                                router.replace("/(client)/user/(tabs)/reservations")
                            }
                        }}>
                            <Text style={gstyles.t_semibold_dark}>VERIFY CODE</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const TextInputOTP = (props: {
    onValueChange: (value: string) => void
}) => {

    const [value, setValue] = useState("");

    const handleChangeText = (text: string) => {
        // Allow only numeric values
        const numericValue = text.replace(/[^0-9]/g, '');
        setValue(numericValue)
    };

    useEffect(() => {
        props.onValueChange(value);
    }, [value])

    return (
        <TextInput style={{...styles.input_opt, fontSize : 14}} maxLength={1} value={value} inputMode='numeric' on onChangeText={handleChangeText} />
    )
}

const styles = StyleSheet.create({
    input_opt: {
        width: 50,
        height: 50,
        backgroundColor: "#D9D9D9",
        borderRadius: 6,
        textAlign: "center"
    }
})

export default verify