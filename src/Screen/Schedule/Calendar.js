import { StyleSheet, Text, View,SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import Bars from '../../../Image/bars.png'
import React from 'react'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'; 
import styles from './styles'
import * as CommonStyle from '../../helper/CommonStyle'
import ButtonS from '../../Components/Button/index'
import { useState } from 'react';
const Calendars = ({navigation,route}) => {
    const [state, setState] = useState({
        selectedDate: "",
        markedDates: {}
    })
    const getSelectedDayEvents = date => {
        let markedDates = {};
        markedDates[date] = { selected: true, selectedColor: '#181461', textColor:CommonStyle.pureWhite  };
        console.log(markedDates)
        // let serviceDate = moment(date);
        // serviceDate = serviceDate.format("DD.MM.YYYY");
        setState({
            // selectedDate: serviceDate,
            markedDates: markedDates
        });
    };
  return (
    <SafeAreaView style={styles.MainContainer}>
        <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={Bars} />
          </TouchableOpacity>
          <Text style={styles.headerHeading}>Planning</Text>
        </View>
        <View style={{width:'100%',marginTop:30,justifyContent:'center',marginBottom:10}}>
<Calendar
 style={{
    borderWidth: 1,
    borderColor: 'lightgray',
    height: 450,
    width:"95%",
    alignSelf: 'center',
  }}
  theme={{
    arrowButton:{
        color:"#383838"
    },
    'stylesheet.calendar.header': {
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: 6,
            alignItems: 'center',
          },
          week: {
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          },
      dayHeader: {
        textAlign: 'center',
        color:"#383838",
        fontSize: 12,
        fontWeight: "900",
        backgroundColor:'#FAFCFE',
        height:44,
        width:44,
       textAlignVertical: 'center',

        // color: appStyle.textSectionTitleColor
      },
      monthText: {
        fontSize: 16,
        color: '#383838',
        margin: 10,
        fontWeight:'900'
      },
    }
  }}
  initialDate={"2022-09-14"}
  markedDates={state.markedDates}
  onDayPress={day => {
    getSelectedDayEvents(day.dateString);
  }}
  onDayLongPress={day => {
    console.log('selected day', day);
  }}
//   monthFormat={'yyyy MM'}
  onMonthChange={month => {
    console.log('month changed', month);
  }}
 
//   disableMonthChange={true}
//   firstDay={1}
   onPressArrowLeft={subtractMonth => subtractMonth()}
  onPressArrowRight={addMonth => addMonth()}
  enableSwipeMonths={true}
/>
</View>
<ButtonS ButtonText="Valider" />
</ScrollView>
    </SafeAreaView>
  )
}

export default Calendars
