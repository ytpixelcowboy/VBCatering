import { ScrollView, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Spacer from '@/components/Spacer'
import { OPTIONS_RESERVATION_TYPE } from '@/lib/const'
import { gstyles } from '../../lib/styles'
import { Image } from 'expo-image';
import { useExpoRouter } from 'expo-router/build/global-state/router-store'

const createReservation = () => {


  return (
    <SafeAreaProvider style={{ backgroundColor: "#f9f9f9" }}>
      <SafeAreaView style={{ flex: 1 }} collapsable={true}>
        <View style={{ width: "100%", ...gstyles.container_center }}>
          <View style={{
            paddingVertical: 14,
            paddingHorizontal: 14,
            width: "100%",
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            gap: 5
          }}>
            <TouchableOpacity style={{
              padding: 5
            }}
              onPress={() => {
                if(router.canGoBack()){
                  router.back();
                }else{
                  router.navigate("/user/reservations")
                }
              }}
            >
              <MaterialIcons name='arrow-back' size={28} />
            </TouchableOpacity>
            <Text style={{ ...gstyles.t_semibold_dark, fontSize: 14 }}>{"Back"}</Text>
          </View>
          <View style={{
            width: "100%",
            maxWidth : 500,
            paddingHorizontal : 20
          }}>
            <Text style={{ ...gstyles.t_semibold_dark, fontSize: 20 }}>{"Select Reservation Type"}</Text>
            <Spacer size={10} />
            <FlatList
              contentContainerStyle={{
                gap: 10
              }}
              data={OPTIONS_RESERVATION_TYPE}
              renderItem={item => (
                <TouchableOpacity
                  style={{
                    flex : 1,
                    maxWidth: 500,
                    padding: 20,
                    flexDirection: "row",
                    borderRadius: 6,
                    backgroundColor: "#D9D9D9",
                    alignItems: "center",
                  }}
                  onPress={()=>{
                    router.push("/reservation/5338b20c-47a1-4dc0-8cb1-494926b9c025")
                  }}
                >
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      resizeMode: "contain"
                    }}
                    source={item.item.icon}
                  />
                  <View
                    style={{
                      flex: 1, 
                      marginLeft: 14,
                      flexDirection: "column"
                    }}
                  >
                    <Text style={{ ...gstyles.t_semibold_dark, fontSize: 14 }}>
                      {item.item.title}
                    </Text>
                    <Spacer size={1} />
                    <Text
                      style={{
                        ...gstyles.t_base_dark,
                        fontSize: 12,
                        flexWrap: "wrap",
                        maxWidth: "100%"
                      }}
                    >
                      {item.item.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default createReservation
