import { Text, View, Image, TextInput, ScrollView, SafeAreaView, TouchableOpacity, Platform, Alert } from 'react-native'
import React, { useState } from 'react'
import Spacer from '@/components/Spacer';
import { gstyles } from '../../lib/styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Checkbox from '@/components/Checkbox';
import { router } from 'expo-router';
import Dropdown from '@/components/Dropdown';
import { IFilterData } from '@/lib/types';
import { Filters_Sex } from '@/lib/const';
import CalendarModal from '@/components/CalendarModal';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { IMG_BANNER_LOGO } from '@/lib/assets';


const root = () => {
    const [isFocus_sex, setFocus_sex] = useState(false);
    const [selected_sex, setSelected_sex] = useState<IFilterData>(Filters_Sex[0]);

    const [chkbox_tos, setChkbox_tos] = useState(false);
    const [chkbox_privacy, setChkbox_privacy] = useState(false);

    const date = new Date();

    const [bdate_day, setBdateDay] = useState<number>(date.getUTCDate() + 1);
    const [bdate_month, setBdateMonth] = useState<number>(date.getUTCMonth() + 1);
    const [bdate_year, setBdateYear] = useState<number>(date.getUTCFullYear());

    const [showModalCalender, setShowModalCalendar] = useState(false);

    return (
        <SafeAreaProvider style={{ backgroundColor: "#f9f9f9" }}>
            <SafeAreaView style={{ flex: 1 }} collapsable={true}>
                <ScrollView style={{
                    width: "100%",
                    position: "relative"
                }}
                    nestedScrollEnabled={true}
                >
                    <View style={{ ...gstyles.container, ...gstyles.container_center }}>
                        <Image
                            style={{
                                width: 250,
                                resizeMode: "contain"
                            }}
                            source={IMG_BANNER_LOGO} />

                        <Text style={gstyles.t_header}>Reset Password</Text>
                        <Spacer size={10} />
                        <View style={gstyles.container_forms}>
                            <Text style={{ ...gstyles.t_base_dark, textAlign: "center", fontSize : 14 }}>Please enter your email address to search your account.</Text>
                            <Spacer size={10} />
                            <View style={{ width: "100%" }}>
                                <Text style={{...gstyles.t_semibold, fontSize: 14}}>Email Address</Text>
                                <Spacer size={5} />
                                <TextInput style={gstyles.input} inputMode='email' />
                            </View>
                            <Spacer size={10} />
                            <TouchableOpacity style={gstyles.btn_primary} onPress={() => {
                                router.replace("/(auth)/recovery/verify");
                            }}>
                                <Text style={gstyles.t_semibold_dark}>Confirm Email</Text>
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