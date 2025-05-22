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
      <SafeAreaView style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 24,
        gap: 10,
      }} collapsable={true}>
        <ScrollView
          scrollIndicatorInsets={{left: 100}}
          style={{
            height: "100%",
            flex: width > 620 ? 3 : 1,
            minWidth: width > 620 ? 500 : 300,
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
          }}>

          </View>
          {
            width < 1200
            &&
            <>
              <Spacer size={10} />
              <PartnerNotice />

            </>
          }
        </ScrollView>
        {
          width > 1200
          &&
          <PartnerNotice />
        }
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const PartnerNotice = () => {
  return (
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
  )
}

export default dashboard

const styles = StyleSheet.create({})