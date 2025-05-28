import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { gstyles } from '@/lib/styles'
import { formatTime } from '@/lib/utils'
import { router } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import TruncatedText from '@/components/TruncatedText'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const data = [
  {
    id: 0,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    sender: {
      id: "5338b20c-47a1-4dc0-8cb1-494926b9c025",
      name: "Carl Jordee Palma",
      email: "carljordee11@gmail.com"
    },
    rate: 4.5,
    createdAt: 0,
  }
]

const customerfeedbacks = () => {
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
            <th style={{ ...gstyles.table_cell, width: 500 }}>Message</th>
            <th style={{ ...gstyles.table_cell }}>Sender</th>
            <th style={{ ...gstyles.table_cell }}>Rate</th>
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
                  <td style={gstyles.table_cell}>
                    <TruncatedText style={{ textAlign: "left" }} size={200} content={e?.content} />
                  </td>
                  <td style={gstyles.table_cell}>
                    <View style={{
                      flex : 1, 
                      alignItems: "center", 
                      flexDirection: "row", 
                      gap: 10, 
                      justifyContent : "center" 
                      }}>
                      <MaterialIcons name='person' size={35} />
                      <View>
                        <Text style={{ ...gstyles.t_bold_dark, fontSize: 14 }}>{e?.sender.name}</Text>
                        <Text style={{ ...gstyles.t_base, fontSize: 14 }}>{e?.sender.email}</Text>
                      </View>
                    </View>
                  </td>
                  <td style={gstyles.table_cell}>{`${e?.rate}/5`}</td>
                  <td style={gstyles.table_cell}>{formatTime(e?.createdAt || 0)}</td>
                  <td style={gstyles.table_cell}>
                    <View style={{
                      flex: 1,
                      alignSelf : "center",
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

export default customerfeedbacks

const styles = StyleSheet.create({})