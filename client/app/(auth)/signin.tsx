import { Text, View, Image, TextInput, ScrollView, SafeAreaView, TouchableOpacity, Platform, Alert } from 'react-native'
import React, { useState } from 'react'
import Logo from "../../assets/images/banner_logo.png";
import Spacer from '@/components/Spacer';
import { gstyles } from '../styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Checkbox from '@/components/Checkbox';
import { router } from 'expo-router';
import Dropdown from '@/components/Dropdown';
import { IFilterData } from '@/lib/types';
import { Filters_Sex } from '@/lib/const';
import DateDropPicker from '@/components/DateDropPicker';


const root = () => {
  const [isFocus_sex, setFocus_sex] = useState(false);
  const [selected_sex, setSelected_sex] = useState<IFilterData>(Filters_Sex[0]);

  const [chkbox_tos, setChkbox_tos] = useState(false);
  const [chkbox_privacy, setChkbox_privacy] = useState(false);

  const date = new Date();

  const [bdate_day, setBdateDay] = useState<number>(date.getUTCDate() + 1);
  const [bdate_month, setBdateMonth] = useState<number>(date.getUTCMonth() + 1);
  const [bdate_year, setBdateYear] = useState<number>(date.getUTCFullYear());

  return (
    <SafeAreaProvider style={{ backgroundColor: "#f9f9f9" }}>
      <SafeAreaView style={{ flex: 1 }} collapsable={true}>
        <ScrollView style={{
          flex : 1,
          width: "100%",
        }}
        nestedScrollEnabled={true} 
        >
          <View style={{ ...gstyles.container, ...gstyles.container_center }}>
            <Image
              style={{
                width: 250,
                resizeMode: "contain"
              }}
              source={Logo} />

            <Text style={gstyles.t_header}>Create new account</Text>

            <Spacer size={10} />
            <View style={gstyles.container_forms}>
              <View style={{ width: "100%" }}>
                <Text style={gstyles.t_semibold}>First Name</Text>
                <Spacer size={2} />
                <TextInput style={gstyles.input} />
              </View>
              <Spacer size={8} />
              <View style={{ width: "100%" }}>
                <Text style={gstyles.t_semibold}>Surname</Text>
                <Spacer size={2} />
                <TextInput style={{ ...gstyles.input }} />
              </View>
              <Spacer size={8} />
              <Text style={gstyles.t_semibold}>Birthday</Text>
              <Spacer size={2} />
              <View style={{
                width: "100%",
                flexDirection: "row",
                flexWrap: "wrap",
                gap : 20,
                zIndex : 10,
                alignItems: "flex-start"
              }}>
                <DateDropPicker
                  day={bdate_day}
                  month={bdate_month}
                  year={bdate_year}
                  fromYear={1980}
                  onSelectDay={(day) => {
                    console.log(`Day Selected : ${day}`)
                    setBdateDay(day)
                  }}
                  onSelectMonth={(month) => {
                    console.log(`Month Selected : ${month}`)
                    setBdateMonth(month);
                  }}
                  onSelectYear={(year) => {
                    console.log(`Year Selected : ${year}`)
                    setBdateYear(year)
                  }}
                />
                <Dropdown
                  style={{
                    zIndex: 10,
                    position: "relative",
                    alignSelf: "flex-start"
                  }}
                  label='Sex'
                  selected={selected_sex}
                  isFocus={isFocus_sex}
                  items={Filters_Sex}
                  onPress={() => setFocus_sex(!isFocus_sex)}
                  onSelect={(item) => {
                    setSelected_sex(item);
                    setFocus_sex(!isFocus_sex)
                  }} />
              </View>
              <Spacer size={8} />
              <View style={{ width: "100%" }}>
                <Text style={gstyles.t_semibold}>Email</Text>
                <Spacer size={2} />
                <TextInput style={{ ...gstyles.input }} inputMode='email' />
              </View>
              <Spacer size={8} />
              <View style={{ width: "100%", alignItems: "flex-start" }}>
                <Text style={gstyles.t_semibold}>Mobile Number</Text>
                <Spacer size={2} />
                <TextInput style={{ ...gstyles.sm_input }} inputMode='numeric' />
              </View>
              <Spacer size={15} />
              <View style={{ width: "100%" }}>
                <Text style={gstyles.t_semibold}>Password</Text>
                <Spacer size={2} />
                <TextInput style={{ ...gstyles.input }} />
              </View>
              <Spacer size={8} />
              <View style={{ width: "100%" }}>
                <Text style={gstyles.t_semibold}>Confirm Password</Text>
                <Spacer size={2} />
                <TextInput style={{ ...gstyles.input }} />
              </View>
              <Spacer size={20} />
              <Text style={{ ...gstyles.t_semibold_dark, alignSelf: 'flex-start', fontSize: 15 }}>I the 'Customer', has read and consent to the following aggreements:</Text>
              <Spacer size={5} />
              <Checkbox label='Terms and Condition' isActive={chkbox_tos} onPress={() => setChkbox_tos(!chkbox_tos)} />
              <Checkbox label='Privacy Policy' isActive={chkbox_privacy} onPress={() => setChkbox_privacy(!chkbox_privacy)} />
              <Spacer size={25} />
              <TouchableOpacity style={gstyles.btn_primary} onPress={() => {
                router.push("/")
              }}>
                <Text style={gstyles.t_semibold_dark}>Register Now</Text>
              </TouchableOpacity>
              <Spacer size={15} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default root