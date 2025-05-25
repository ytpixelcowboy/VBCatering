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
    status: "reserved",
    cateringType: "catering-events",
    items: [

    ],
    reservationDate: 1747879617,
    paymentStatus: "reservation-paid",
    createdAt: 1747879617
  },
  {
    id: "5338b20c-47a1-4dc0-8cb1-494926b9c225",
    status: "completed",
    cateringType: "food-only",
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
        padding: 18,
        gap: 10,
      }} collapsable={true}>
        {
          (viewType === "list" && width > 1080 && isWeb)
          &&
          (
            <View style={{
              width: "100%",
              
            }}>
              <table style={{
                borderRadius: 8,
                backgroundColor: "#D9D9D9",
                tableLayout: "fixed",
                borderCollapse : "collapse"
              }}>
                <thead style={{
                  height: 60,
                  ...gstyles.t_semibold,
                  fontSize: 14,
                }}>
                  <th style={styles.table_cell}>Status</th>
                  <th style={{
                    ...styles.table_cell,
                    minWidth: 80
                  }}>Id</th>
                  <th style={styles.table_cell}>Type</th>
                  <th style={{
                    ...styles.table_cell,
                    width: 50
                  }}>Items Count</th>
                  <th style={{
                    ...styles.table_cell,
                    minWidth: 80,
                  }}>Reserve Date</th>
                  <th style={styles.table_cell}>Payment Status</th>
                  <th style={{
                    ...styles.table_cell,
                    minWidth: 80,
                  }}>Created at</th>
                  <th style={{
                    ...styles.table_cell,
                    minWidth: 80,
                  }}>Actions</th>
                </thead>
                <tbody style={{
                  justifyItems: "normal",
                }}>
                  {
                    data?.map((e, idx) => (
                      <tr key={`reservation_${idx}`} 
                      style={{
                        ...gstyles.t_base_dark,
                        fontSize: 14,
                        textAlign: "center",
                        flexShrink: 0,
                        textWrap: "wrap",
                        backgroundColor : "#F9F9F9C4",
                      }}>
                        <td style={styles.table_cell}>
                          <Text style={{
                            ...gstyles.t_semibold_dark,
                            backgroundColor : "#81B7656B",
                            padding : 14,
                            borderRadius : 25
                          }}>{e.status}</Text>
                        </td>
                        <td style={{
                          maxWidth: 150,
                        }}>{e.id}</td>
                        <td style={styles.table_cell}>{e.cateringType}</td>
                        <td style={styles.table_cell}>{e.items.length}</td>
                        <td style={styles.table_cell}>{formatTime(e.reservationDate)}</td>
                        <td style={styles.table_cell}>{e.paymentStatus}</td>
                        <td style={styles.table_cell}>{formatTime(e.createdAt)}</td>
                        <td style={styles.table_cell}>
                          <View style={{
                            flex: 1,
                            flexDirection: "row",
                            gap: 10,
                            justifyContent: "center"
                          }}>
                            <TouchableOpacity style={gstyles.btn_nuetral} onPress={() => {
                              router.push(`/admin/reservation/${e.id}`)
                            }}>
                              <Text style={{ ...gstyles.t_semibold, color: "#FFFFFF" }}>Review</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={gstyles.btn_negative} onPress={() => {
                              router.push("/")
                            }}>
                              <MaterialIcons name='close' size={25} color={"white"} />
                            </TouchableOpacity>
                          </View>
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
                height: "100%"
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
                    height: 60,
                    backgroundColor: "#81B7656B",
                    borderRadius: 6,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 18,
                  }}>
                    <View style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10
                    }}>
                      <MaterialIcons name='access-time' size={25} />
                      <Text style={{ ...gstyles.t_semibold_dark, fontSize: 14 }}>{e.item.status}</Text>
                    </View>

                    <Text style={{ ...gstyles.t_base_dark, minWidth: 200, fontSize: 12, textAlign: "right", flexWrap: "wrap" }}>{formatTime(e.item.createdAt)}</Text>
                  </View>

                  <View style={{
                    width: "100%",
                    paddingHorizontal: 18,
                    paddingVertical: 10,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    gap : 8
                  }}>
                    <View style={{
                      
                    }}>
                      <Text style={{ ...gstyles.t_base, fontSize: 12 }}>Reservation ID: </Text>
                      <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{e.item.id}</Text>
                    </View>
                    <View style={styles.container_type}>
                      <MaterialIcons name='room-service' size={25} />
                      <View style={{
                        flex: 1,
                        paddingHorizontal: 18,
                      }}>
                        <Text style={{ ...gstyles.t_base, fontSize: 12 }}>Type:</Text>
                        <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{e.item.cateringType}</Text>
                      </View>
                    </View>
                    <View style={styles.container_type}>
                      <MaterialIcons name='calendar-month' size={25} />
                      <View style={{
                        flex: 1,
                        paddingHorizontal: 18,
                      }}>
                        <Text style={{ ...gstyles.t_base, fontSize: 12 }}>Reservation Target:</Text>
                        <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{formatTime(e.item.reservationDate)}</Text>
                      </View>
                    </View>
                    <View style={styles.container_type}>
                      <MaterialIcons name='credit-card' size={25} />
                      <View style={{
                        flex: 1,
                        paddingHorizontal: 18,
                      }}>
                        <Text style={{ ...gstyles.t_base, fontSize: 12 }}>Payment Status</Text>
                        <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{e.item.paymentStatus}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{
                    width: "100%",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    paddingHorizontal: 18,
                    paddingVertical: 18,
                    alignItems : "center",
                    justifyContent: "center"
                  }}>
                    <View style={{
                      flex: 1,
                    }}>
                      <Text style={{ ...gstyles.t_base, fontSize: 12 }}>Items Count:</Text>
                      <Text style={{ ...gstyles.t_base_dark, fontSize: 16 }}>{e.item.items.length}</Text>
                    </View>
                    <View style={{
                      gap: 5,
                      flexDirection: "row",
                    }}>
                      <TouchableOpacity style={gstyles.btn_negative} onPress={() => {
                        router.push("/")
                      }}>
                        <MaterialIcons name='close' size={25} color={"white"} />
                      </TouchableOpacity>

                      <TouchableOpacity style={gstyles.btn_nuetral} onPress={() => {
                        router.push(`/admin/reservation/${e.item.id}`);
                      }}>
                        <Text style={{ ...gstyles.t_semibold, color: "#FFFFFF" }}>Review</Text>
                      </TouchableOpacity>
                    </View>
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