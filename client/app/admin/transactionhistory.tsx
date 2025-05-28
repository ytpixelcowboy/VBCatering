import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { gstyles } from '@/lib/styles'
import { formatTime } from '@/lib/utils'
import { router } from 'expo-router'
import TruncatedText from '@/components/TruncatedText'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const data = [
  {
    id: 1,
    type: "received",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    amount: 65890,
    source: "GCASH (GXI)",
    reservationRef: {
      id: "5338b20c-47a1-4dc0-8cb1-494926b9c025",
      name: "Catering + Event"
    },
    sender: {
      id: "",
      name: ""
    },
    createdAt: 1747879617
  },
  {
    id: 2,
    type: "refunded",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    amount: 45412,
    source: "GCASH (GXI)",
    reservationRef: {
      id: "5338b20c-47a1-4dc0-8cb1-494926b9c025",
      name: "Catering + Event"
    },
    sender: {
      id: "",
      name: ""
    },
    createdAt: 1747879617
  },
  {
    id: 3,
    type: "refunded-overpayed",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    amount: 400,
    source: "GCASH (GXI)",
    reservationRef: {
      id: "5338b20c-47a1-4dc0-8cb1-494926b9c025",
      name: "Catering + Event"
    },
    sender: {
      id: "",
      name: ""
    },
    createdAt: 1747879617
  }
]

const transactionhistory = () => {
  return (
    <SafeAreaProvider style={{ backgroundColor: "#f9f9f9" }}>
      <SafeAreaView style={{
        padding: 24,
        gap: 10,
      }} collapsable={true}>
        <table style={{
          tableLayout: "fixed",
          backgroundColor: "#D9D9D9",
          borderRadius: 8,
          borderCollapse: "collapse",
          textWrap: "wrap",
        }}>
          <thead style={{
            height: 60,
            ...gstyles.t_semibold,
            fontSize: 14,
          }}>
            <th style={{ ...gstyles.table_cell, minWidth: 60 }}>ID</th>
            <th style={{ ...gstyles.table_cell }}>Message</th>
            <th style={{ ...gstyles.table_cell }}>Reservation Ref</th>
            <th style={{ ...gstyles.table_cell, }}>Amount</th>
            <th style={gstyles.table_cell}>Source</th>
            <th style={{ ...gstyles.table_cell }}>Created At</th>
            <th style={{ ...gstyles.table_cell }}>Actions</th>
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
                  <td style={{ ...gstyles.table_cell }}>{e?.id}</td>
                  <td style={{ ...gstyles.table_cell }}>
                    <View style={{ alignItems: "center", flexDirection: "row", gap: 10 }}>
                      {
                        e.type === "received" ?
                        <MaterialIcons name='arrow-forward' size={35} />
                        :
                        <MaterialIcons name='arrow-upward' size={35} />
                      }
                      <View style={{ flex: 1 }}>
                        <Text style={{ ...gstyles.t_bold_dark, fontSize: 14 }}>{e?.type}</Text>
                        <TruncatedText style={{ textAlign: "left" }} size={100} content={e?.message} />
                      </View>
                    </View>

                  </td>
                  <td style={gstyles.table_cell}>
                    <View>
                      <Text style={{ ...gstyles.t_semibold, fontSize: 12 }}>{e?.reservationRef.name}</Text>
                      <Text style={{ ...gstyles.t_base, textDecorationLine: "underline", fontSize: 12 }}>{e?.reservationRef.id}</Text>
                    </View>
                  </td>
                  <td style={gstyles.table_cell}>{`${e?.amount} PHP`}</td>
                  <td style={gstyles.table_cell}>{e.source}</td>
                  <td style={gstyles.table_cell}>{formatTime(e?.createdAt || 0)}</td>
                  <td style={gstyles.table_cell}>
                    <View style={{
                      flex: 1,
                      flexDirection: "row",
                      gap: 10,
                      justifyContent: "center",
                    }}>
                      <TouchableOpacity style={{ ...gstyles.btn_nuetral, paddingHorizontal: 34 }} onPress={() => {
                        router.push(`/admin/manageaccount/${e.id}`)
                      }}>
                        <Text style={{ ...gstyles.t_semibold, color: "#FFFFFF" }}>Edit</Text>
                      </TouchableOpacity>
                    </View>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default transactionhistory

const styles = StyleSheet.create({})