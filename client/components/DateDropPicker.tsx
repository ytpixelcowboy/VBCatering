import { StyleSheet, Text, useWindowDimensions, View, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import { IFilterData } from '@/lib/types'

type Props = {
    day: number,
    month: number,
    year: number,
    fromMonth?: number,
    toMonth?: number,
    fromYear?: number,
    toYear?: number,
    fromDay?: number,
    toDay?: number,
    onSelectDay: (day: number) => void,
    onSelectMonth: (month: number) => void,
    onSelectYear: (year: number) => void,
    getTimeInMilis?: (milliseconds: number) => void;
}

const DatePicker = (props: Props) => {
    const date = new Date();

    const [days, setDays] = useState<IFilterData[]>();
    const [months, setMonths] = useState<IFilterData[]>([]);
    const [years, setYears] = useState<IFilterData[]>([])

    const fromMonth = props.fromMonth || 1
    const toMonth = props.toMonth || 12;
    const fromYear = props.fromYear || 1980;
    const toYear = props.toYear || date.getUTCFullYear();
    const fromDay = props.fromDay || 1;
    const toDay = props.toDay;


    const [isFocus_day, setFocusDay] = useState(false);
    const [isFocus_month, setFocusMonth] = useState(false);
    const [isFocus_year, setFocusYear] = useState(false);

    const getDays = (month: number, year: number) => {
        const hallow = [3, 5, 8, 10]; //Contains 30 days 

        let max = 0;
        if (month == 1) {
            const isLeapYear = (year % 4) == 0;
            //console.log(year);
            max = isLeapYear ? 29 : 28;
        } else if (hallow.findIndex((e) => e == (month - 1))) {
            max = 30;
        } else {
            max = 31;
        }

        //Only cap values at the max
        if (toDay) {
            max = toDay
        }

        let bin = [] as number[];
        for (let i = fromDay; i <= max; i++) {
            bin.push(i);
        }
        return { "items": bin, max };
    }

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

    const getDaysAsFilterData = () => {
        let bin = [] as IFilterData[];

        getDays(props.month - 1, props.year).items.forEach((e) => {
            bin.push({
                id: e - 1,
                title: e.toString()
            })
        })

        return bin;
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

    const parseDay = (day: number) => {
        return getDaysAsFilterData().find((e) => e.id == day - 1) as IFilterData
    }
    const parseMonth = (month: number) => {
        return getMonthsAsFilterData().find((e) => e.id == month - 1) as IFilterData
    }
    const parseYear = (year: number) => {
        return getYearsAsFilterData().find((e) => e.id == year) as IFilterData
    }

    const [selectedDay, setSelectedDay] = useState<IFilterData>(parseDay(props.day));
    const [selectedMonth, setSelectedMonth] = useState<IFilterData>(parseMonth(props.month));
    const [selectedYear, setSelectedYear] = useState<IFilterData>(parseYear(props.year));

    useEffect(() => {

        setDays(getDaysAsFilterData());
        setMonths(getMonthsAsFilterData());
        setYears(getYearsAsFilterData());

        if (!selectedDay) setSelectedDay(parseDay(props.day))
        if (!selectedMonth) setSelectedMonth(parseMonth(props.month))
        if (!selectedYear) setSelectedYear(parseYear(props.year))

    }, [selectedDay, selectedMonth, selectedYear])

    return (
        <View
            style={{
                flexWrap: "wrap",
                flexDirection: "row",
                gap: 5,
                zIndex: 9999,
            }}>
            <Dropdown
                style={{ alignItems: "flex-start", zIndex: 10, }}
                label='Day'
                selected={selectedDay}
                items={days}
                allowType={true}
                isFocus={isFocus_day}
                onPress={function (): void {
                    setFocusDay((prev) => !prev)
                }} onSelect={(item: IFilterData) => {
                    setFocusDay((prev) => !prev)
                    setSelectedDay(item);
                    props.onSelectDay(item.id as number)
                }}
                onValueChange={(value) => {
                    //If user type date lower than min, set min
                    if(Number(value) < Number(props.fromDay)){
                        setSelectedDay(parseDay(1))
                        return;
                    }
                    //If user type date higher than max, set max
                    if(Number(value) > Number(props.toDay)){
                        setSelectedDay(parseMonth(1))
                        return;
                    }

                    if (value)
                        setSelectedDay(parseDay(Number(value)))
                }} />
            <Dropdown
                style={{ alignItems: "flex-start", zIndex: 10, }}
                label='Month'
                selected={selectedMonth}
                allowType={true}
                isFocus={isFocus_month}
                items={months}
                onPress={function (): void {
                    setFocusMonth((prev) => !prev)
                }} onSelect={(item: IFilterData) => {
                    setFocusMonth((prev) => !prev)
                    setSelectedMonth(item);
                    props.onSelectMonth((item.id as number) + 1)
                }}
                onValueChange={(value) => {
                    if(Number(value) < Number(props.fromDay)){
                        setSelectedMonth(parseMonth(1))
                        return;
                    }
                    //If user type date higher than max, set max
                    if(Number(value) > Number(props.toMonth)){
                        setSelectedMonth(parseMonth(1))
                        return;
                    }

                    if (value)
                        setSelectedMonth(parseMonth(Number(value)))
                }}
            />
            <Dropdown
                style={{ alignItems: "flex-start", zIndex: 10, }}
                label='Year'
                selected={selectedYear}
                allowType={true}
                isFocus={isFocus_year}
                items={years}
                onPress={function (): void {
                    setFocusYear((prev) => !prev)
                }} onSelect={(item: IFilterData) => {
                    setFocusYear((prev) => !prev)
                    setSelectedYear(item);
                    props.onSelectYear(item.id as number)
                }}
                onValueChange={(value) => {
                    if(Number(value) < Number(props.fromYear)){
                        setSelectedYear(parseYear(1))
                        return;
                    }
                    //If user type date higher than max, set max
                    if(Number(value) > Number(props.toYear)){
                        setSelectedYear(parseYear(1))
                        return;
                    }

                    if (value)
                        setSelectedYear(parseYear(Number(value)))
                }} />
        </View>
    )
}

export default DatePicker

const styles = StyleSheet.create({})