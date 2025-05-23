import { FlatList, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { gstyles } from '@/lib/styles'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

import VerticalDivider from "../../../components/VerticalDivider";
import { router } from 'expo-router'
import { formatTime } from '@/lib/utils'

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
    id: "5338b20c-47a1-4dc0-8cb1-494926b9c125",
    status: "pending",
    cateringType: "catering-only",
    items: [

    ],
    reservationDate: 1747879617,
    paymentStatus: "reservation-paid",
    createdAt: 1747879617
  },
  {
    id: "5338b20c-47a1-4dc0-8cb1-494926b9c225",
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

  const [viewType, setViewType] = useState<"list" | "grid">("list");
  const width = useWindowDimensions().width
  const isWeb = Platform.OS === "web";

  return (
    <SafeAreaProvider style={{ backgroundColor: "#f9f9f9" }}>
      <SafeAreaView style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 24,
        gap: 10,
      }} collapsable={true}>
        {
          (viewType === "list" && width > 1200 && isWeb)
          &&
          (
            <View style={{
              width: "100%",
              backgroundColor: "#D9D9D9",
              borderRadius: 8
            }}>
              <table style={{
                tableLayout: "fixed",
                borderCollapse: "collapse"
              }}>
                <thead style={{
                  height: 60,
                  ...gstyles.t_semibold,
                  fontSize: 14,
                }}>
                  <th style={styles.table_cell}>Status</th>
                  <th style={styles.table_cell}>Id</th>
                  <th style={styles.table_cell}>Type</th>
                  <th style={{
                    ...styles.table_cell,
                    width: 50
                  }}>Items Count</th>
                  <th style={styles.table_cell}>Reserve Date</th>
                  <th style={styles.table_cell}>Payment Status</th>
                  <th style={styles.table_cell}>Created at</th>
                  <th style={styles.table_cell}>Actions</th>
                </thead>
                <tbody style={{
                  justifyItems: "normal",
                }}>
                  {
                    data?.map((e, idx) => (
                      <tr key={idx} style={{
                        ...gstyles.t_base_dark,
                        fontSize: 14,
                        textAlign: "center",
                        flexShrink: 0,
                        textWrap: "wrap",
                        backgroundColor: idx % 2 == 0 ? "#F9F9F9C4" : "#D9D9D9",
                      }}>
                        <td>{e.status}</td>
                        <td style={{
                          maxWidth: 150,
                        }}>{e.id}</td>
                        <td style={styles.table_cell}>{e.cateringType}</td>
                        <td style={styles.table_cell}>{e.items.length}</td>
                        <td style={styles.table_cell}>{formatTime(e.reservationDate)}</td>
                        <td style={styles.table_cell}>{e.paymentStatus}</td>
                        <td style={styles.table_cell}>{formatTime(e.createdAt)}</td>
                        <td style={{
                          ...styles.table_cell,
                          maxWidth: 80,
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
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </View>
          )
          ||
          (
            <FlatList
              style={{
                height : "100%"
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
                    height: 65,
                    backgroundColor: "#A4A4A4",
                    borderRadius: 6,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 18,
                  }}>
                    <View style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10
                    }}>
                      <MaterialIcons name='access-time' size={25} />
                      <Text style={{ ...gstyles.t_semibold_dark, fontSize: 14 }}>Pending</Text>
                    </View>

                    <Text style={{ ...gstyles.t_base_dark, minWidth: 200, fontSize: 12, textAlign: "right", flexWrap: "wrap" }}>08/28/2024 - 12:21 PM</Text>
                  </View>

                  <View style={{
                    width: "100%",
                    paddingVertical: 18,
                    paddingHorizontal: 18,
                    gap: 5,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent : "space-between"
                  }}>
                    <View style={styles.container_type}>
                      <MaterialIcons name='room-service' size={30} />
                      <View style={{
                        flex: 1,
                        paddingHorizontal: 18,
                      }}>
                        <Text style={{ ...gstyles.t_base, fontSize: 12 }}>Type:</Text>
                        <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{"Catering Service Only"}</Text>
                      </View>
                    </View>
                    <View style={styles.container_type}>
                      <MaterialIcons name='shopping-cart' size={30} />
                      <View style={{
                        flex: 1,
                        paddingHorizontal: 18,
                      }}>
                        <Text style={{ ...gstyles.t_base, fontSize: 12 }}>Items Count:</Text>
                        <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{"Catering Service Only"}</Text>
                      </View>
                    </View>
                    <View style={styles.container_type}>
                      <MaterialIcons name='calendar-month' size={30} />
                      <View style={{
                        flex: 1,
                        paddingHorizontal: 18,
                      }}>
                        <Text style={{ ...gstyles.t_base, fontSize: 12 }}>Reservation Target:</Text>
                        <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{"06/27/2024"}</Text>
                      </View>
                    </View>
                    <View style={styles.container_type}>
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
                  <View style={{
                    width: "100%",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    gap: 5,
                    paddingHorizontal: 18,
                    paddingVertical: 18,
                    justifyContent: "center"
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
              )}
              keyExtractor={(item) => item.id}
            >

            </FlatList>
          )
        }
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default managereservations

const styles = StyleSheet.create({
  container_type: {
    minWidth: 250,
    flexDirection: "row",
    alignItems: "center"
  },
  table_cell: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
})