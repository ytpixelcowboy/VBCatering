import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { gstyles } from '@/lib/styles'
import { formatTime } from '@/lib/utils'
import { router } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Image } from 'expo-image'

const data = [
  {
    id : "5338b20c-47a1-4dc0-8cb1-494926b9c025",
    image : "https://media.istockphoto.com/id/1478610180/photo/pork-in-black-bowl-at-dark-slate-background-pork-adobo-or-adobong-baboy-is-sichuhan-cuisine.jpg?s=1024x1024&w=is&k=20&c=y4LoxDpeF5FnFUwM_fzPqvt7fmbGqEwwbT-YJJntbaI=",
    name : "Adobong Baboy",
    shortDescription : "Lorem Ipsum",
    description : "Lorem Ipsum",
    category : {
      id : "pasta",
      name : "Pasta"
    },
    isActive : true,
    lastModifiedAt : 0,
    createdAt : 0,
  },
  {
    id : "5338b20c-47a1-4dc0-8cb1-494926b9c025",
    image : "https://th.bing.com/th/id/R.6f79618fba2c4fb31590a3f499e908d7?rik=IYdJvIrIdt%2bOuQ&riu=http%3a%2f%2fphilnews.ph%2fwp-content%2fuploads%2f2019%2f04%2fSinigang-Recipe-1024x576.jpg&ehk=sbppNJokXZdl9%2bvsIODzFX8hvPfntpoi6OS6mdRj6eM%3d&risl=&pid=ImgRaw&r=0",
    name : "Sinigang Na Elbert",
    shortDescription : "Lorem Ipsum",
    description : "Lorem Ipsum",
    category : {
      id : "sabaw",
      name : "Sabaw"
    },
    isActive : true,
    lastModifiedAt : 0,
    createdAt : 0,
  },
  {
    id : "5338b20c-47a1-4dc0-8cb1-494926b9c025",
    image : "https://www.inspiredtaste.net/wp-content/uploads/2016/06/Vietnamese-Pho-Soup-Recipe-1.jpg",
    name : "Adobong Baboy",
    shortDescription : "Lorem Ipsum",
    description : "Lorem Ipsum",
    category : {
      id : "pasta",
      name : "Pasta"
    },
    isActive : true,
    lastModifiedAt : 0,
    createdAt : 0,
  }
]

const managefoods = () => {
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
            <th style={{ ...gstyles.table_cell }}>Preview</th>
            <th style={gstyles.table_cell}>Name</th>
            <th style={{ ...gstyles.table_cell }}>Description</th>
            <th style={{ ...gstyles.table_cell }}>Category</th>
            <th style={{ ...gstyles.table_cell }}>Status</th>
            <th style={{ ...gstyles.table_cell, }}>Last Modified At</th>
            <th style={gstyles.table_cell}>Created At</th>
            <th style={gstyles.table_cell}>Actions</th>
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
                  <td style={{ ...gstyles.table_cell }}>
                    <View style={{
                      flex : 1,
                      justifyContent : "center",
                      alignItems : "center"
                    }}>
                      <Image style={{
                      width : 120,
                      height : 80,
                      borderRadius : 18,
                      alignSelf : "center"
                    }}
                    contentFit='cover' source={e.image} />
                    </View>
                  </td>
                  <td style={gstyles.table_cell}>{e?.name}</td>
                  <td style={gstyles.table_cell}>{e?.shortDescription}</td>
                  <td style={gstyles.table_cell}>{e?.category.name}</td>
                  <td style={gstyles.table_cell}>
                    <Text style={{
                      ...gstyles.t_semibold_dark,
                      backgroundColor: e?.isActive ?  "green" : "red",
                      paddingHorizontal: 14,
                      paddingVertical: 8,
                      borderRadius: 25,
                      color: "white"
                    }}>{e?.isActive ? "Active" : "Deactivated" }</Text>

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

export default managefoods

const styles = StyleSheet.create({})