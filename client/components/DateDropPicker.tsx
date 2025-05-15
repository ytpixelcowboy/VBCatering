import { StyleSheet, Text, useWindowDimensions, View, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import { IFilterData } from '@/lib/types'
import { Dimensions } from 'react-native';

const DateDropPicker = () => {
    const [screenSize, setScreenSize] = useState(Dimensions.get('window'));

    const [days, setDays] = useState([]);
    const [months, setMonths] = useState([]);
    const [years, setYears] = useState([])


    const [day, setDay] = useState(1);
    const [month, setMonth] = useState(1)
    const [year, setYear] = useState(2000);

    useEffect(()=>{
        const isLeapYear = (new Date().getFullYear() / 4) == 0;

        console.log(isLeapYear);

        if(days.length != 0){
            let tDays = 1;
            do {
                tDays++;
            }while((isLeapYear && tDays != 29) || tDays != 28)
        }
    },[])

    return (
        <View
            style={{
                width:"100%",
                flexWrap : "wrap",
                flexDirection : "row",
                gap : 5
            }}>
            <Dropdown
                style={{alignItems : "flex-start"}}
                label='Day'
                onPress={function (): void {
                    throw new Error('Function not implemented.')
                }} onSelect={function (item: IFilterData): void {
                    throw new Error('Function not implemented.')
                }} /> 
            <Dropdown
                style={{alignItems : "flex-start"}}
                label='Month'
                onPress={function (): void {
                    throw new Error('Function not implemented.')
                }} onSelect={function (item: IFilterData): void {
                    throw new Error('Function not implemented.')
                }} />
            <Dropdown
                style={{alignItems : "flex-start"}}
                label='Year'
                onPress={function (): void {
                    throw new Error('Function not implemented.')
                }} onSelect={function (item: IFilterData): void {
                    throw new Error('Function not implemented.')
                }} />
                <Dropdown
                style={{alignItems : "flex-start"}}
                label='Year'
                onPress={function (): void {
                    throw new Error('Function not implemented.')
                }} onSelect={function (item: IFilterData): void {
                    throw new Error('Function not implemented.')
                }} />
        </View>
    )
}

export default DateDropPicker

const styles = StyleSheet.create({})