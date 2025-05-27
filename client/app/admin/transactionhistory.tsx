import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { gstyles } from '@/lib/styles'
import { formatTime } from '@/lib/utils'
import { router } from 'expo-router'

const data = [
  {
    id : 1,
    type : "received",
    amount : 65890,
    source : "GCASH (GXI)",
    reservationId : "",
    sender : {
      id : "",
      name : ""
    },
    createdAt : 0

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
            <th style={gstyles.table_cell}>Title</th>
            <th style={{ ...gstyles.table_cell }}>Charge To</th>
            <th style={{ ...gstyles.table_cell }}>Grand Total</th>
            <th style={{ ...gstyles.table_cell, }}>Remaining Balance</th>
            <th style={gstyles.table_cell}>Due At</th>
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
                  <td style={gstyles.table_cell}>{e?.title}</td>
                  <td style={gstyles.table_cell}>{e?.debtTo.name}</td>
                  <td style={gstyles.table_cell}>{e?.total}</td>
                  <td style={gstyles.table_cell}>{e?.balance}</td>
                  <td style={gstyles.table_cell}>{formatTime(e?.paymentDue || 0)}</td>
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