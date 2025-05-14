import { Text, View, Image, TextInput, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from "../../assets/images/banner_logo.png";
import Spacer from '@/components/Spacer';
import { gstyles } from '../styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Checbox from '@/components/Checbox';
import Checkbox from '@/components/Checbox';
import { router } from 'expo-router';


const root = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} collapsable={true}>
        <ScrollView style={{
          width: "100%",
        }}>
          <View style={{
            ...gstyles.container,
            width: "100%",
            maxWidth: 500,
            alignItems: "center"
          }}>
            <Image
              style={{
                width: 250,
                resizeMode: "contain"
              }}
              source={Logo} />

            <Text style={gstyles.t_header}>Create new account</Text>

            <Spacer size={10} />
            <View style={{ width: "100%" }}>
              <Text style={gstyles.t_semibold}>First Name</Text>
              <Spacer size={2} />
              <TextInput style={gstyles.input} />
            </View>
            <Spacer size={8} />
            <View style={{ width: "100%" }}>
              <Text style={gstyles.t_semibold}>Surname</Text>
              <Spacer size={2} />
              <TextInput style={{ ...gstyles.input }} />
            </View>
            <Spacer size={8} />
            <View style={{
              width: "100%",
              flexDirection: "row",
              gap: 5,
            }}>
              <View style={{ flex : 2 }}>
              <Text style={gstyles.t_semibold}>Birthdate</Text>
              <Spacer size={2} />
              <TextInput style={{ ...gstyles.input }} />
            </View>
            <View style={{ flex : 1, alignItems: "flex-start" }}>
              <Text style={gstyles.t_semibold}>Sex</Text>
              <Spacer size={2} />
              <TextInput style={{ ...gstyles.sm_input }} />
            </View>
            </View>
            <Spacer size={8} />
            <View style={{ width: "100%" }}>
              <Text style={gstyles.t_semibold}>Email</Text>
              <Spacer size={2} />
              <TextInput style={{ ...gstyles.input }} />
            </View>
            <Spacer size={8} />
            <View style={{ width: "100%", alignItems: "flex-start" }}>
              <Text style={gstyles.t_semibold}>Mobile Number</Text>
              <Spacer size={2} />
              <TextInput style={{ ...gstyles.sm_input }} />
            </View>
            <Spacer size={15} />
            <View style={{ width: "100%" }}>
              <Text style={gstyles.t_semibold}>Password</Text>
              <Spacer size={2} />
              <TextInput style={{ ...gstyles.input }} />
            </View>
            <Spacer size={8} />
            <View style={{ width: "100%" }}>
              <Text style={gstyles.t_semibold}>Confirm Password</Text>
              <Spacer size={2} />
              <TextInput style={{ ...gstyles.input }} />
            </View>
            <Spacer size={20} />
            <Text style={{ ...gstyles.t_semibold_dark, alignSelf: 'flex-start', fontSize: 12 }}>I the 'Customer', has read and consent to the following aggreements:</Text>
            <Spacer size={5} />
            <Checkbox label='Terms and Condition' />
            <Checkbox label='Privacy Policy' />
            <Spacer size={25} />
            <TouchableOpacity style={gstyles.btn_primary} onPress={() => {
              router.push("/")
            }}>
              <Text style={gstyles.t_semibold_dark}>Register Now</Text>
            </TouchableOpacity>
            <Spacer size={15} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default root