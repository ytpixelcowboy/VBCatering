import { StyleSheet, Text, View, Image, TextInputComponent, TextInput, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import Logo from "../../assets/images/banner_logo.png";
import Spacer from '@/components/Spacer';
import Divider from '@/components/Divider';


const login = () => {
    return (
        <View style={styles.container}>
            <Image
                style={{
                    width: 250,
                    resizeMode: "contain"
                }}
                source={Logo} />

            <Text style={styles.t_header}>Login to your account</Text>

            <View style={styles.container_forms}>
                <Text style={styles.t_bold}>Email</Text>
                <Spacer size={2} />
                <TextInput style={styles.input} />
                <Spacer size={5} />
                <Text style={styles.t_bold}>Password</Text>
                <Spacer size={2} />
                <TextInput style={styles.input} />
                <Spacer size={10} />
                <View style={{
                    alignItems:"center"
                }}>
                    <TouchableOpacity style={styles.btn_primary}>
                        <Text style={styles.t_semibold_dark}>LOGIN</Text>
                    </TouchableOpacity>
                    <Spacer size={5} />
                    <TouchableOpacity>
                        <Text style={{ textDecorationLine: "underline" }}>Forgot Password</Text>
                    </TouchableOpacity>
                    <Spacer size={5}/>
                    <Divider variant="default" />
                    <Spacer size={5}/>
                    <Text style={styles.t_base}>You dont have an account yet ?, Click Here</Text>
                    <Spacer size={5}/>
                    <TouchableOpacity style={styles.btn_primary}>
                        <Text style={styles.t_semibold_dark}>CREATE NEW ACCOUNT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        backgroundColor: "#f9f9f9"
    },
    container_forms: {
        width: "100%",
        maxWidth: 500,
        marginTop: 20,
        alignContent: "center"
    },
    input: {
        width: "100%",
        height: 50,
        backgroundColor: "#D9D9D9",
        borderRadius: 5,
        paddingHorizontal : 18
    },
    btn_primary: {
        minWidth : 200,
        alignSelf: "center",
        height: 50,
        backgroundColor: "#C5D0A4",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    t_header: {
        fontSize: 20,
        color: "#565353",
        fontFamily: "poppins-bold"
    },
    t_base: {
        fontSize: 14,
        color: "#565353",
         fontFamily: "poppins"
    },
    t_base_dark: {
        fontSize: 14,
        color: "#000000",
        fontFamily: "poppins"
    },
    t_semibold_dark: {
        fontSize: 14,
        fontWeight: "600",
        color: "#000000",
        fontFamily: "poppins-semibold"
    },
    t_bold: {
        fontSize: 14,
        fontWeight: "600",
        color: "#565353",
        fontFamily: "poppins-bold"
    }
})