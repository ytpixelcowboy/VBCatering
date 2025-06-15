import { FlatList, Platform, SafeAreaView, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

import VerticalDivider from "../../../components/VerticalDivider";
import { router } from 'expo-router'
import { formatTime } from '@/lib/utils'
import { gstyles } from '@/lib/styles'
import TabSelector from '@/components/TabSelector';
import ViewType from '@/components/ViewType';
import FilterDropdown from '@/components/FilterDropdown';

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
        padding: 24,
        gap: 10,
      }} collapsable={true}>
        <View style={{
          width: "100%",
          flexDirection: "row",
          height: 50,
          justifyContent: "space-between",
        }}>
          <FilterDropdown
          style={{
            zIndex : 10,
          }}
          isFocus={true}
          displayValue={''} 
          onPress={()=>{

          }}

          >
            
          </FilterDropdown>
          <ViewType selected={viewType} showTitle={false} onSelect={setViewType} />
        </View>

        {
          (viewType === "list" && width > 1080 && isWeb)
          &&
          (
            <View style={{
              width: "100%",
            }}>
              <table style={{
                tableLayout: "fixed",
                backgroundColor: "#D9D9D9",
                borderRadius: 8,
                borderCollapse: "collapse"
              }}>
                <thead style={{
                  height: 60,
                  ...gstyles.t_semibold,
                  fontSize: 14,
                }}>
                  <th style={gstyles.table_cell}>Status</th>
                  <th style={{
                    ...gstyles.table_cell,
                    minWidth: 80
                  }}>Id</th>
                  <th style={gstyles.table_cell}>Type</th>
                  <th style={{
                    ...gstyles.table_cell,
                    width: 50
                  }}>Items Count</th>
                  <th style={{
                    ...gstyles.table_cell,
                    minWidth: 80,
                  }}>Reserve Date</th>
                  <th style={gstyles.table_cell}>Payment Status</th>
                  <th style={{
                    ...gstyles.table_cell,
                    minWidth: 80,
                  }}>Created at</th>
                  <th style={{
                    ...gstyles.table_cell,
                    minWidth: 80,
                  }}>Actions</th>
                </thead>
                <tbody style={{
                  justifyItems: "normal",
                }}>
                  {
                    data?.map((e, idx) => (
                      <tr key={`reservation_${idx}`} style={{
                        ...gstyles.t_base_dark,
                        fontSize: 14,
                        textAlign: "center",
                        flexShrink: 0,
                        textWrap: "wrap",
                        backgroundColor: "#F9F9F9C4",
                      }}>
                        <td style={gstyles.table_cell}>
                          <Text style={{
                            ...gstyles.t_semibold_dark,
                            backgroundColor: "#A9B091",
                            paddingHorizontal: 14,
                            paddingVertical: 8,
                            borderRadius: 25
                          }}>{e.status}</Text>
                        </td>
                        <td style={gstyles.table_cell}>{e.id}</td>
                        <td style={gstyles.table_cell}>{e.cateringType}</td>
                        <td style={gstyles.table_cell}>{e.items.length}</td>
                        <td style={gstyles.table_cell}>{formatTime(e.reservationDate)}</td>
                        <td style={gstyles.table_cell}>{e.paymentStatus}</td>
                        <td style={gstyles.table_cell}>{formatTime(e.createdAt)}</td>
                        <td style={gstyles.table_cell}>
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
            <View style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 10,
              alignItems: "stretch",
              justifyContent: "flex-start"
            }}>
              {
                data?.map((e, idx) => (
                  <View
                    key={`reservation_${idx}`}
                    style={{
                      flex: 1,
                      alignSelf: "flex-start",
                      maxWidth : 350,
                      backgroundColor: "#D9D9D9",
                      borderRadius: 6,
                    }}>
                    <View style={{
                      height: 60,
                      backgroundColor: "#A9B091",
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
                        <Text style={{ ...gstyles.t_semibold_dark, fontSize: 14 }}>{e.status}</Text>
                      </View>

                      <Text style={{ ...gstyles.t_base_dark, minWidth: 200, fontSize: 12, textAlign: "right", flexWrap: "wrap" }}>{formatTime(e.createdAt)}</Text>
                    </View>

                    <View style={{
                      width: "100%",
                      paddingHorizontal: 18,
                      paddingVertical: 10,
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      gap: 5
                    }}>
                      <View style={{

                      }}>
                        <Text style={{ ...gstyles.t_base, fontSize: 12 }}>Reservation ID: </Text>
                        <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{e.id}</Text>
                      </View>
                      <View style={gstyles.container_type}>
                        <MaterialIcons name='room-service' size={25} />
                        <View style={{
                          flex: 1,
                          paddingHorizontal: 18,
                        }}>
                          <Text style={{ ...gstyles.t_base, fontSize: 12 }}>Type:</Text>
                          <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{e.cateringType}</Text>
                        </View>
                      </View>
                      <View style={gstyles.container_type}>
                        <MaterialIcons name='calendar-month' size={25} />
                        <View style={{
                          flex: 1,
                          paddingHorizontal: 18,
                        }}>
                          <Text style={{ ...gstyles.t_base, fontSize: 12 }}>Reservation Target:</Text>
                          <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{formatTime(e.reservationDate)}</Text>
                        </View>
                      </View>
                      <View style={gstyles.container_type}>
                        <MaterialIcons name='credit-card' size={25} />
                        <View style={{
                          flex: 1,
                          paddingHorizontal: 18,
                        }}>
                          <Text style={{ ...gstyles.t_base, fontSize: 12 }}>Payment Status</Text>
                          <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{e.paymentStatus}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={{
                      width: "100%",
                      flexDirection: "row",
                      flexWrap: "nowrap",
                      paddingHorizontal: 18,
                      paddingVertical: 18,
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <View style={{
                        flex: 1,
                      }}>
                        <Text style={{ ...gstyles.t_base, fontSize: 12 }}>Items Count:</Text>
                        <Text style={{ ...gstyles.t_base_dark, fontSize: 16 }}>{e.items.length}</Text>
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
                          router.push(`/admin/reservation/${e.id}`);
                        }}>
                          <Text style={{ ...gstyles.t_semibold, color: "#FFFFFF" }}>Review</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                ))
              }
            </View>
          )
        }
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default managereservations
