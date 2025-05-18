import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Calendar, CalendarList, Agenda, DateData } from 'react-native-calendars';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { gstyles } from '@/app/styles';
import { IFilterData } from '@/lib/types';
import Dropdown from './Dropdown';
import { Locale_US_EN_MONTHS_SHORT } from '@/lib/const';

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

  const [showMonthsSelector, setShowMonthSelector] = useState(false);
  const [showYearSelector, setShowYearSelector] = useState(false);

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

    getMonths().items.forEach((e, idx) => {
      bin.push({
        id: e - 1,
        title: Locale_US_EN_MONTHS_SHORT[idx]
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
  const [selectedYear, setSelectedYear] = useState<IFilterData>(parseYear(props.year) || date.getUTCFullYear());

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
      justifyContent: "center",
      padding: 28,
    }}>
      <View style={{
        width : "100%",
        maxWidth: 1000,
        padding: 18,
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        flexDirection : "row",
        flexWrap : "wrap"
      }}>

        <View style={{
          width: "100%",
          ...(Platform.OS == "web" && props.showEvents) && {maxWidth : 500}
        }}>
          {
            showMonthsSelector
            &&
            <GridSelectView
              title='Select month'
              keyId='months'
              items={getMonthsAsFilterData()}
              onSelectItem={(item) => {
                setSelectedMonth(item)
                setShowMonthSelector((prev) => !prev)
              }}
              onClose={() => {
                setShowMonthSelector((prev) => !prev)
              }}
            />
            ||
            showYearSelector
            &&
            <GridSelectView
              title='Select year'
              keyId='years'
              items={getYearsAsFilterData()}
              onSelectItem={(item) => {
                setSelectedYear(item)
                setShowYearSelector((prev) => !prev)
              }}
              onClose={() => {
                setShowYearSelector((prev) => !prev)
              }}
            />
            ||
            <View style={{
              ...styles.container_selector
            }}>
              <View style={{
                width: "100%",
                alignSelf: "flex-start",
                height: 50,
                flexDirection: "row",
                alignItems: "center",
                gap: 5
              }}>
                <TouchableOpacity style={{
                  padding: 5
                }}
                  onPress={() => {
                    props.onClose()
                  }}
                >
                  <MaterialIcons name='arrow-back' size={28} />
                </TouchableOpacity>
                <Text style={{ ...gstyles.t_semibold_dark, fontSize: 14 }}>{props.label}</Text>
              </View>
              <Calendar
                style={{
                  width: "100%",
                }}
                hideArrows={true}
                initialDate={`${selectedYear.id}-${Number(selectedMonth.id) + 1}-${props.day}`}
                onDayPress={(date: DateData) => {
                  props.onDaySelect(date.day, date.month, date.year)
                }}
                enableSwipeMonths={true}
                onMonthChange={(date: DateData) => {
                  setSelectedMonth(parseMonth(date.month))
                }}
                renderHeader={() => (
                  <View style={{
                    alignSelf: "flex-start",
                    height: 50,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    zIndex: 10,
                  }}>
                    <TouchableOpacity style={{
                      paddingHorizontal: 18,
                      paddingVertical: 10,
                      borderRadius: 24,
                      backgroundColor: "#0000001C"
                    }}
                      onPress={() => {
                        setShowMonthSelector((prev) => !prev)
                      }}
                    >
                      <Text style={{ ...gstyles.t_semibold_dark, fontSize: 14 }}>{selectedMonth.title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                      paddingHorizontal: 18,
                      paddingVertical: 10,
                      borderRadius: 24,
                      backgroundColor: "#0000001C"
                    }}
                      onPress={() => {
                        setShowYearSelector((prev) => !prev)
                      }}
                    >
                      <Text style={{ ...gstyles.t_semibold_dark, fontSize: 14 }}>{selectedYear.title}</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          }

        </View>
        {
          props.showEvents
          &&
          <View style={styles.container_events}>
            <Text style={{ ...gstyles.t_semibold_dark, fontSize: 16 }}>Events</Text>
          </View>
        }
      </View>
    </View>
  )
}

const GridSelectView = (props: {
  keyId : string,
  title: string,
  items: IFilterData[],
  onSelectItem: (item: IFilterData) => void,
  onClose: () => void,
}) => {
  return (
    <View style={{
      ...styles.container_selector,
      maxHeight: 500
    }}>
      <View style={{
        width: "100%",
        alignSelf: "flex-start",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        gap: 5
      }}>
        <TouchableOpacity style={{
          padding: 5
        }}
          onPress={props.onClose}
        >
          <MaterialIcons name='arrow-back' size={28} />
        </TouchableOpacity>
        <Text style={{ ...gstyles.t_semibold_dark, fontSize: 14 }}>{props.title}</Text>
      </View>
      <ScrollView
        style={{
          width: "100%",
        }}
        contentContainerStyle={{
          paddingVertical: 20,
          top: 10,
          gap: 13,
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
        }}>
        {
          props.items.map((e, idx) => (
            <TouchableOpacity
              key={`${props.keyId}_${idx}`}
              style={{
                height: 50,
                width: 70,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 24,
                backgroundColor: "#0000001C"
              }}
              onPress={() => {
                props.onSelectItem(e);
              }}
            >
              <Text style={{ ...gstyles.t_semibold_dark, fontSize: 12 }}>{e.title}</Text>
            </TouchableOpacity>
          ))
        }

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container_selector: {
    width: "100%",
  },
  container_events: {
    padding : 20,
    minWidth: Platform.OS == "web" ? 350 : 300
  }
})