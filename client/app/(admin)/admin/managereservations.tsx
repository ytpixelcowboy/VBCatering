import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { gstyles } from '@/app/styles'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

import VerticalDivider from "../../../components/VerticalDivider";
import { router } from 'expo-router'

const data = [
  {
    id: "5338b20c-47a1-4dc0-8cb1-494926b9c025",
    status: "pending",
    cateringType: "catering-only",
    items: [

    ],
    reservationDate: 1747879617,
    paymentStatus: "reservation-paid",
    createdAt: 1747879617
  },
  {
    id: "5338b20c-47a1-4dc0-8cb1-494926b9c025",
    status: "pending",
    cateringType: "catering-only",
    items: [

    ],
    reservationDate: 1747879617,
    paymentStatus: "reservation-paid",
    createdAt: 1747879617
  },
  {
    id: "5338b20c-47a1-4dc0-8cb1-494926b9c025",
    status: "pending",
    cateringType: "catering-only",
    items: [

    ],
    reservationDate: 1747879617,
    paymentStatus: "reservation-paid",
    createdAt: 1747879617
  }
]

const managereservations = () => {
  return (
    <SafeAreaProvider style={{ backgroundColor: "#f9f9f9" }}>
      <SafeAreaView style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 24,
        gap: 10,
      }} collapsable={true}>
        <FlatList
          style={{
            flex: 1
          }}
          contentContainerStyle={{
            gap: 10
          }}
          data={data}
          renderItem={(e) => (
            <View style={{
              backgroundColor: "#D9D9D9",
              borderRadius: 6,
            }}>
              <View style={{
                width: "100%",
                height: 65,
                backgroundColor: "#A4A4A4",
                borderRadius: 6,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 18,
              }}>
                <View style={{
                  minWidth: 200,
                  flexDirection: "row",
                  gap: 10
                }}>
                  <MaterialIcons name='access-time' size={25} />
                  <Text style={{ ...gstyles.t_semibold_dark, fontSize: 16 }}>Pending</Text>
                </View>
                <VerticalDivider variant={'light'} />
                <View style={{
                  flex: 1,
                  paddingHorizontal: 18,
                }}>
                  <Text style={{ ...gstyles.t_base, fontSize: 12 }}>Pending</Text>
                  <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{e.item.id}</Text>
                </View>
                <View style={{
                  minWidth: 120,
                  gap: 10,
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}>
                  <TouchableOpacity style={gstyles.btn_negative} onPress={() => {
                    router.push("/")
                  }}>
                    <Text style={{ ...gstyles.t_semibold, color: "#FFFFFF" }}>Decline</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={gstyles.btn_nuetral} onPress={() => {
                    router.push("/")
                  }}>
                    <Text style={{ ...gstyles.t_semibold, color: "#FFFFFF" }}>Review</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{
                flex: 1,
                minHeight: 100,
                paddingHorizontal: 18,
                alignItems: "center",
                gap: 15,
                flexDirection: "row"
              }}>
                <View style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}>
                  <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                  }}>
                    <MaterialIcons name='room-service' size={30} />
                    <View style={{
                      flex: 1,
                      paddingHorizontal: 18,
                    }}>
                      <Text style={{ ...gstyles.t_base, fontSize: 12 }}>Type:</Text>
                      <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{"Catering Service Only"}</Text>
                    </View>
                  </View>
                  <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                  }}>
                    <MaterialIcons name='shopping-cart' size={30} />
                    <View style={{
                      flex: 1,
                      paddingHorizontal: 18,
                    }}>
                      <Text style={{ ...gstyles.t_base, fontSize: 12 }}>Items Count:</Text>
                      <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{"Catering Service Only"}</Text>
                    </View>
                  </View>
                  <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                  }}>
                    <MaterialIcons name='calendar-month' size={30} />
                    <View style={{
                      flex: 1,
                      paddingHorizontal: 18,
                    }}>
                      <Text style={{ ...gstyles.t_base, fontSize: 12 }}>Reservation Target:</Text>
                      <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{"06/27/2024"}</Text>
                    </View>
                  </View>
                  <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                  }}>
                    <MaterialIcons name='credit-card' size={30} />
                    <View style={{
                      flex: 1,
                      paddingHorizontal: 18,
                    }}>
                      <Text style={{ ...gstyles.t_base, fontSize: 12 }}>Payment Status</Text>
                      <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{"Reservation Paid"}</Text>
                    </View>
                  </View>
                </View>

                <Text style={{ ...gstyles.t_base_dark, minWidth: 200, fontSize: 14, textAlign: "right" }}>08/28/2024 - 12:21 PM</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        >

        </FlatList>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default managereservations

const styles = StyleSheet.create({})