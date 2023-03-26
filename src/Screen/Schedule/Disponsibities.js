import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native';
import ButtonS from '../../Components/Button/index';
import * as CommonStyle from '../../helper/CommonStyle';
import styles from './styles';
import '../../config/i18n/index';
import Back from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useTranslation } from 'react-i18next';
const Disponsibities = (props) => {
    const {t, i18n} = useTranslation();
    const data = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
      ];
    
      const [date, setDate] = useState(new Date(1598051730000));
      const [date2, setDate2] = useState(new Date(1598051730000));
      const [mode, setMode] = useState('date');
      const [show, setShow] = useState(false);
      const [mode2, setMode2] = useState('date');
      const [show2, setShow2] = useState(false);
      const [StateValue, setStateValue] = useState(null);
      const [isFocus, setIsFocus] = useState(false);
    
      const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
          setShow(true);
          // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
      };
    
      const showTimepicker = () => {
        showMode('time');
      };
      const onChange2 = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow2(false);
        setDate2(currentDate);
      };
    
      const showMode2 = (currentMode) => {
        if (Platform.OS === 'android') {
          setShow2(true);
          // for iOS, add a button that closes the picker
        }
        setMode2(currentMode);
      };
    
      const showTimepicker2 = () => {
        showMode2('time');
      };
  return (
    <>
    <View
    style={[
      styles.activeTab,
      {alignSelf: 'center', marginVertical: 25, width: '40%'},
    ]}>
    <Text style={[styles.tabText]}>Sélectionner une plage</Text>
  </View>
  <View style={styles.Ouvert}>
    <Text
      style={{
        fontFamily: CommonStyle.Regular,
        fontSize: 16,
        color: CommonStyle.dark,
      }}>
      Ouvert
    </Text>
    <Back name="checkmark-circle" size={26} color={CommonStyle.RedButton} />
  </View>
  <View style={styles.Ouvert}>
    <Text
      style={{
        fontFamily: CommonStyle.Regular,
        fontSize: 16,
        color: CommonStyle.dark,
      }}>
      Fermé
    </Text>
  </View>
  <View style={{flexDirection:'row',justifyContent: 'space-evenly',alignItems: 'center',marginBottom:35}}>
    <View style={{width:'50%',alignItems:'center'}}>
      <Text style={[styles.tabText,{fontSize:16,marginVertical:15,alignSelf:'flex-start',marginLeft:35}]}>De</Text>
      
      <TouchableOpacity style={styles.Timebox} onPress={showTimepicker} >
        <Text style={{color:CommonStyle.BlueButton,fontFamily:CommonStyle.Regular}}>{date.toLocaleTimeString()}</Text>
      </TouchableOpacity>
      {show && (
    <DateTimePicker
      testID="dateTimePicker"
      value={date}
      mode={mode}
      is24Hour={true}
      onChange={onChange}
    />
  )}
    </View>
    <View style={{width:'50%',alignItems:'center'}}>
      <Text style={[styles.tabText,{fontSize:16,marginVertical:15,alignSelf:'flex-start',marginLeft:35}]}>À</Text>
      <TouchableOpacity style={styles.Timebox} onPress={showTimepicker2} >
        <Text style={{color:CommonStyle.BlueButton,fontFamily:CommonStyle.Regular}}>{date2.toLocaleTimeString()}</Text>
      </TouchableOpacity>
      {show2 && (
    <DateTimePicker
      testID="dateTimePicker2"
      value={date2}
      mode={mode2}
      is24Hour={true}
      onChange={onChange2}
    />
  )}
    </View>
  </View>
  <ButtonS ButtonText="Ajouter horaires" propsFun={()=>props.navigation.navigate('Calendar')} />

  <View style={{marginTop:70,paddingHorizontal:30}}>
      <Text style={[styles.tabText]}>Créneaux de</Text>
        <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={{color:CommonStyle.pureWhite}}
            autoScroll
            // disable
            // inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            containerStyle={styles.containerStyle}
            data={data}
            // search
            maxHeight={100}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? t('heure(s)') : '...'}
            searchPlaceholder="Search..."
            value={StateValue}
            showsVerticalScrollIndicator={false}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setStateValue(item.value);
              setIsFocus(false);
            }}
            // renderLeftIcon={() => (
            //   <AntDesign
            //     style={styles.icon}
            //     color={isFocus ? 'blue' : 'black'}
            //     name="Safety"
            //     size={20}
            //   />
            // )}
          />
    </View>
    <ButtonS ButtonText="Valider" />
    </>
  )
}

export default Disponsibities