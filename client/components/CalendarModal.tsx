import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Calendar, CalendarList, Agenda, DateData } from 'react-native-calendars';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { gstyles } from '@/app/styles';
import { IFilterData } from '@/lib/types';
import Dropdown from './Dropdown';

type Props = {
  label: string,
  showEvents: boolean,
  day: number,
  month: number,
  year: number,
  fromMonth?: number,
  toMonth?: number,
  fromYear?: number,
  toYear?: number,
  fromDay?: number,
  toDay?: number,
  onDaySelect: (day: number, month: number, year: number) => void,
  onClose: () => void,
}

export default function CalendarModal(props: Props) {
  const date = new Date();

  const [months, setMonths] = useState<IFilterData[]>([]);
  const [years, setYears] = useState<IFilterData[]>([])

  const fromMonth = props.fromMonth || 1
  const toMonth = props.toMonth || 12;
  const fromYear = props.fromYear || 1980;
  const toYear = props.toYear || date.getUTCFullYear();

  const [isFocus_month, setFocusMonth] = useState(false);
  const [isFocus_year, setFocusYear] = useState(false);

  const getMonths = () => {
    let bin = [] as number[];
    for (let i = fromMonth; i <= toMonth; i++) {
      bin.push(i);
    }

    return { "items": bin, "max": toMonth }
  }

  const getYears = () => {
    let bin = [] as number[];
    for (let i = fromYear; i <= toYear; i++) {
      bin.push(i);
    }

    return { "items": bin, "max": toMonth }
  }

  const getMonthsAsFilterData = () => {
    let bin = [] as IFilterData[];

    getMonths().items.forEach((e) => {
      bin.push({
        id: e - 1,
        title: e.toString()
      })
    })

    return bin;
  }

  const getYearsAsFilterData = () => {
    let bin = [] as IFilterData[];

    getYears().items.forEach((e) => {
      bin.push({
        id: e,
        title: e.toString()
      })
    })

    return bin;
  }

  const parseMonth = (month: number) => {
    return getMonthsAsFilterData().find((e) => e.id == month - 1) as IFilterData
  }
  const parseYear = (year: number) => {
    return getYearsAsFilterData().find((e) => e.id == year) as IFilterData
  }

  const [selectedMonth, setSelectedMonth] = useState<IFilterData>(parseMonth(props.month) || date.getUTCMonth());
  const [selectedYear, setSelectedYear] = useState<IFilterData>(parseYear(props.year)|| date.getUTCFullYear());

  useEffect(() => {

    setMonths(getMonthsAsFilterData());
    setYears(getYearsAsFilterData());

    if (!selectedMonth) setSelectedMonth(parseMonth(props.month))
    if (!selectedYear) setSelectedYear(parseYear(props.year))

  }, [selectedMonth, selectedYear])

  return (
    <View style={{
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "#00000073",
      zIndex: 9999,
      alignItems: "center",
      justifyContent: "center"
    }}>
      <View style={{
        minWidth: 350,
        maxWidth: 800,
        minHeight: 400,
        padding: 18,
        backgroundColor: "#FFFFFF",
        borderRadius: 12
      }}>
        <View style={{
          alignSelf: "flex-start",
          height: 50,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 5
        }}>
          <TouchableOpacity style={{
            padding: 5
          }}
            activeOpacity={1}
            onPress={() => {
              props.onClose()
            }}
          >
            <MaterialIcons name='arrow-back' size={28} />
          </TouchableOpacity>
          <Text style={{ ...gstyles.t_semibold_dark, fontSize: 14 }}>{props.label}</Text>
        </View>
        <View style={{
          alignSelf: "flex-start",
          height: 50,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
          zIndex: 10,
        }}>
          <Dropdown
            style={{ alignItems: "flex-start", zIndex: 10, }}
            selected={selectedMonth}
            allowType={true}
            isFocus={isFocus_month}
            items={months}
            onPress={()=>{
              setFocusMonth((prev) => !prev)
            }} onSelect={(item: IFilterData) => {
              setSelectedMonth(item);
              setFocusMonth((prev) => !prev)
            }}
            onValueChange={(value) => {
              if (Number(value) < Number(props.fromDay)) {
                setSelectedMonth(parseMonth(1))
                return;
              }
              //If user type date higher than max, set max
              if (Number(value) > Number(props.toMonth)) {
                setSelectedMonth(parseMonth(1))
                return;
              }

              if (value)
                setSelectedMonth(parseMonth(Number(value)))
            }}
          />
          <Dropdown
            style={{ alignItems: "flex-start", zIndex: 10, }}
            selected={selectedYear}
            allowType={true}
            isFocus={isFocus_year}
            items={years}
            onPress={()=>{
              setFocusYear((prev) => !prev)
            }} onSelect={(item: IFilterData) => {
              setSelectedYear(item);
              setFocusYear((prev) => !prev)
            }}
            onValueChange={(value) => {
              if (Number(value) < Number(props.fromYear)) {
                setSelectedYear(parseYear(1))
                return;
              }
              //If user type date higher than max, set max
              if (Number(value) > Number(props.toYear)) {
                setSelectedYear(parseYear(1))
                return;
              }

              if (value)
                setSelectedYear(parseYear(Number(value)))
            }} />
        </View>
        <Calendar
          hideArrows={true}
          initialDate={`${selectedYear.id}-${Number(selectedMonth.id) + 1}-${props.day}`}
          onDayPress={(date: DateData) => {
            props.onDaySelect(date.day, date.month, date.year)
          }}
          renderHeader={() => null}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})