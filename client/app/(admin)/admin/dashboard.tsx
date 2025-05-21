import { SafeAreaView, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { gstyles } from '@/app/styles'
import Spacer from '@/components/Spacer'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const dashboard = () => {
  const width = useWindowDimensions().width;

  return (
    <SafeAreaProvider style={{ backgroundColor: "#f9f9f9" }}>
      <SafeAreaView style={{ flex: 1 }} collapsable={true}>
        <ScrollView
          scrollsToTop={width > 1200}
          nestedScrollEnabled={true}
          scrollEnabled={width < 1200}
          style={{
            flex: 1,
            height: "100%",
          }}
          contentContainerStyle={{
            flexGrow: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: 24,
            gap: 18,
          }}
        >
          <ScrollView
            scrollEnabled={width > 1200}
            style={{
              flex: 3,
              minWidth: width > 620 ? 500 : 300,
              maxHeight: width > 1200 ? 800 : 'auto',
            }}>
            <Text style={{ ...gstyles.t_semibold_dark, fontSize: 20 }}>{"Statistics"}</Text>
            <Spacer size={8} />
            <View style={{
              width: "100%",
              gap: 10,
              flexDirection: "row",
              flexWrap: "wrap",
            }}>
              <View style={{
                flex: 1,
                minWidth: 200,
                minHeight: 125,
                backgroundColor: "#FFE082",
                borderRadius: 8,
                padding: 18,
                gap: 5
              }}>
                <View style={{
                  width: "100%",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  gap: 10,
                  alignItems: "center",
                }}>
                  <MaterialIcons name="pending-actions" size={25} />
                  <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{"Pending"}</Text>
                </View>
                <Text style={{ ...gstyles.t_bold_dark, textAlignVertical: "center", fontSize: 48, color: "#806100" }}>{"17"}</Text>
              </View>
              <View style={{
                flex: 1,
                minWidth: 200,
                minHeight: 125,
                backgroundColor: "#3CAD0063",
                borderRadius: 8,
                padding: 18,
                gap: 5
              }}>
                <View style={{
                  width: "100%",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  gap: 10,
                  alignItems: "center",
                }}>
                  <MaterialIcons name="calendar-month" size={25} />
                  <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{"Upcoming"}</Text>
                </View>
                <Text style={{ ...gstyles.t_bold_dark, fontSize: 48, color: "#205C00" }}>{"70"}</Text>
              </View>
              <View style={{
                flex: 1,
                minWidth: 200,
                minHeight: 125,
                backgroundColor: "#0021AD63",
                borderRadius: 8,
                padding: 18,
                gap: 5
              }}>
                <View style={{
                  width: "100%",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  gap: 10,
                  alignItems: "center",
                }}>
                  <MaterialIcons name="check-box" size={25} />
                  <Text style={{ ...gstyles.t_base_dark, fontSize: 14 }}>{"Completed"}</Text>
                </View>
                <Text style={{ ...gstyles.t_bold_dark, fontSize: 48, color: "#001059" }}>{"156"}</Text>
              </View>
            </View>
            <Spacer size={20} />
            <Text style={{ ...gstyles.t_semibold_dark, fontSize: 16, }}>{"Upcoming Events"}</Text>
            <Spacer size={8} />
            <View>
            </View>
            <View style={{
              width: "100%",
              height: 1000,
              backgroundColor: "black"
            }}></View>
          </ScrollView>
          <View style={{
            flex: 1,
            minWidth: 350,
            minHeight: 600,
            gap: 18,
          }}>
            <Text style={{ ...gstyles.t_semibold_dark, fontSize: 18 }}>{"Partner Notice"}</Text>

            <View style={{
              flex: 1,
              backgroundColor: "#D9D9D9",
              borderRadius: 8
            }}>

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default dashboard

const styles = StyleSheet.create({})