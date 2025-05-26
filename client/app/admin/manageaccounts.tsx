import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { gstyles } from '@/lib/styles'
import { router } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { formatTime } from '@/lib/utils'

const data = [
  {
    id: "5338b20c-47a1-4dc0-8cb1-494926b9c025",
    employeeId: 1,
    name: "Carl Jordee Palma",
    email: "carljo******@gmail.com",
    org: {
      id: "vb-catering",
      name: "VB Catering"
    },
    deactivatedAt: 0,
    lastModifiedAt: 1747912325,
    createdAt: 1747879617
  },
  {
    id: "5338b20c-47a1-4dc0-8cb1-494926b9c026",
    employeeId: 2,
    name: "Toshikatsu Wada",
    email: "toshiw******@gmail.com",
    org: {
      id: "vb-catering",
      name: "VB Catering"
    },
    deactivatedAt: 1747912325,
    lastModifiedAt: 1747912325,
    createdAt: 1747879617
  },
  {
    id: "5338b20c-47a1-4dc0-8cb1-494926b9c027",
    employeeId: 3,
    name: "Mark Anthony Alcantara",
    email: "alcantara******@gmail.com",
    org: {
      id: "vb-catering",
      name: "VB Catering"
    },
    deactivatedAt: 0,
    lastModifiedAt: 1747912325,
    createdAt: 1747879617
  },
  ,
  {
    id: "5338b20c-47a1-4dc0-8cb1-494926b9c028",
    employeeId: 4,
    name: "Angelo Bato Bato",
    email: "batob******@gmail.com",
    org: {
      id: "vb-catering",
      name: "VB Catering"
    },
    deactivatedAt: 0,
    lastModifiedAt: 1747912325,
    createdAt: 1747879617
  }
]

const manageaccounts = () => {
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
            <th style={{...gstyles.table_cell, minWidth : 60}}>ID</th>
            <th style={gstyles.table_cell}>Name</th>
            <th style={{ ...gstyles.table_cell }}>Email</th>
            <th style={{ ...gstyles.table_cell }}>Org</th>
            <th style={{ ...gstyles.table_cell, }}>Status</th>
            <th style={gstyles.table_cell}>Last Modified At</th>
            <th style={{ ...gstyles.table_cell }}>Created at</th>
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
                  <td style={{...gstyles.table_cell}}>{e?.employeeId}</td>
                  <td style={gstyles.table_cell}>{e?.name}</td>
                  <td style={gstyles.table_cell}>{e?.email}</td>
                  <td style={gstyles.table_cell}>{e?.org.name}</td>
                  <td style={gstyles.table_cell}>
                    <Text style={{
                      ...gstyles.t_semibold_dark,
                      backgroundColor: e?.deactivatedAt ? "red" : "green",
                      paddingHorizontal: 14,
                      paddingVertical: 8,
                      borderRadius: 25,
                      color : "white"
                    }}>{e?.deactivatedAt ? "Deactivated" : "Active"}</Text>

                  </td>
                  <td style={gstyles.table_cell}>{formatTime(e?.lastModifiedAt || 0)}</td>
                  <td style={gstyles.table_cell}>{formatTime(e?.createdAt || 0)}</td>
                  <td style={gstyles.table_cell}>
                    <View style={{
                      flex: 1,
                      flexDirection: "row",
                      gap: 10,
                      justifyContent: "center",
                    }}>
                      <TouchableOpacity style={{...gstyles.btn_nuetral, paddingHorizontal : 34}} onPress={() => {
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

export default manageaccounts

const styles = StyleSheet.create({})