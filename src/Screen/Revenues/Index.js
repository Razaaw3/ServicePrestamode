import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ActivityIndicator,
  TextInput,
  Platform
} from 'react-native';
import {Modal, Portal, Button, Provider} from 'react-native-paper';
import ButtonS from '../../Components/Button/index';
import * as CommonStyle from '../../helper/CommonStyle';
import styles from './Styles';
import Bars from '../../../Image/bars.png';
import {useTranslation} from 'react-i18next';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import '../../config/i18n/index';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Back from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Feather from 'react-native-vector-icons/dist/Feather';
import Material from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {Dropdown} from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  LineChart
} from "react-native-chart-kit";

const Index = props => {
  const [visible, setVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const {t, i18n} = useTranslation();
  const [List, setList] = useState([
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
  ]);
  const [Data, setData] = useState([]);
  const [Loader, setLoader] = useState(false);
  const [state, setState] = useState(false);
  const [StateValue, setStateValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  // useEffect(() => {

  //   const uid = auth().currentUser.uid
  //   database()
  // .ref(`user/${uid}/MyResevations`)
  // .once('value')
  // .then(snapshot => {
  //   let data = snapshot.val();
  //   if(snapshot.val()===null){
  //     setLoader(false)
  //     setState(false)
  //   }
  //   else{
  //     setLoader(false)
  //     setState(true)
  //   }

  //   console.log("Data is : ",data)
  //   let Items = Object.values(data)
  //   Items.forEach(item=>{
  //     console.log("fdsdas",item)
  //     Data.push(item)

  //   })

  // });

  // // setLoader(false)
  // // console.log("dfsdfsdfsdfsdf",Data)
  // }, [])
  const [color, setColor] = useState(false);
  const windowHeight = Dimensions.get('window').height;
  const [coutures, setCoutures] = useState(false);
  const Next = () => {
    props.navigation.navigate('History');
  };

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

    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Home')}>
        <Image source={Bars} />
        </TouchableOpacity>
        <Text style={styles.headerHeading}>Revenues</Text>
      </View>
      <View style={styles.tabContainer}>
        <View style={{width:'30%',alignItems:'center'}}>
        <Image source={require('../../../Image/assignment.png')} />
        </View>
        <View style={{width:'40%'}}>
          <Text style={{color:'grey',fontFamily:CommonStyle.Regular, fontSize:12}}>CA mensuel</Text>
          <Text style={{color:CommonStyle.dark,fontFamily:CommonStyle.Regular, fontSize:24}}>340,00€</Text>
        </View>
        <View style={{width:'25%',alignItems:'flex-end'}}>
          <Text style={{color:'#FF2366',fontFamily:CommonStyle.Regular, fontSize:14,marginTop:-25}}>-25%</Text>
          
        </View>
      </View>
      <View style={[styles.tabContainer,{marginBottom:20}]}>
        <View style={{width:'30%',alignItems:'center'}}>
        <Image source={require('../../../Image/good.png')} />
        </View>
        <View style={{width:'40%'}}>
          <Text style={{color:'grey',fontFamily:CommonStyle.Regular, fontSize:12}}>CA mensuel</Text>
          <Text style={{color:CommonStyle.dark,fontFamily:CommonStyle.Regular, fontSize:24}}>340,00€</Text>
        </View>
        <View style={{width:'25%',alignItems:'flex-end'}}>
          <Text style={{color:'#02BC77',fontFamily:CommonStyle.Regular, fontSize:14,marginTop:-25}}>+25%</Text>
          
        </View>
      </View>
      <View style={{width:'100%',alignItems:'center',borderRadius:10,backgroundColor:CommonStyle.pureWhite,elevation:9,borderColor:'#EBEBEB',borderWidth:3}}>
  <LineChart
    data={{
      labels: ["Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Juil", "Aou"],
      datasets: [
        {
          data: [
            Math.random() * 1,
            Math.random() * 1,
            Math.random() * 1,
            Math.random() * 1,
            Math.random() * 1,
            Math.random() * 1,
            Math.random() * 1
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width*.97} // from react-native
    height={220}
    // yAxisLabel="$"
    // yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      // backgroundColor: "red",
      backgroundGradientFrom: CommonStyle.pureWhite,
      backgroundGradientTo: CommonStyle.pureWhite,
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(248, 19, 0, ${opacity})`,
      strokeWidth: 3, // optional, default 3,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
       
      },
      propsForBackgroundLines:{
        // r: "91",
        strokeWidth: "2",
        stroke: "#EBEBEB",
        strokeDasharray:'0'
      }
    }}
    
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
    // withInnerLines={false}
    getDotColor={()=>'red'}
    withVerticalLines={false}
    withShadow={false}
  
  />
</View>

    
        </ScrollView>   
    </SafeAreaView>
  )
}

export default Index