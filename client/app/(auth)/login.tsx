import { StyleSheet, Text, View, Image, TextInputComponent, TextInput } from 'react-native'
import React from 'react'
import Logo from "../../assets/images/banner_logo.png";


const login = () => {
    return (
        <View style={styles.container}>
            <Image 
            style={{
                width: 300,
            }}
            source={Logo}/>

            <Text style={styles.t_header}>Login</Text>

            <View style={styles.container_forms}>
                <Text style={styles.t_bold}>Email</Text>
                <Text style={styles.t_bold}>Password</Text>
            </View>
        </View>
    )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems : "center",
        justifyContent : "center",
        padding : 20,
        backgroundColor: "#f9f9f9"
    },
    container_forms : {
        width : "100%",
        marginTop : 20
    },
    t_header : {
        fontSize: 20,
        color : "#565353",
        fontWeight: "bold"
    },
    t_base : {
        fontSize: 14,
        color : "#565353",
    },
    t_bold : {
        fontSize: 14,
        fontWeight: "600",
        color : "#565353",
    }
})