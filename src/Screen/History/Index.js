import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Modal,
  Dimensions
 
} from 'react-native';
import { Provider } from 'react-native-paper';
import Header from '../../Components/Header/Index'
import DropDownPicker from 'react-native-dropdown-picker';
import * as CommonStyle from '../../helper/CommonStyle';
import styles from './styles';
import sewing from '../../../Image/sewing.png'
import Icon from 'react-native-vector-icons/Feather';
import Arrow from 'react-native-vector-icons/MaterialIcons';
import User from 'react-native-vector-icons/FontAwesome';
import Back from 'react-native-vector-icons/Ionicons';
import Logo from '../../../Image/logo.png';
import Profile from '../../../Image/profile.png';
import ButtonS from '../../Components/Button/index';
// import { TextInput } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
// var Slider = require('react-native-slider');
import Slider from 'react-native-slider'
import Location from 'react-native-vector-icons/SimpleLineIcons'
import Calender from 'react-native-vector-icons/AntDesign'
import Bars from '../../../Image/bars.png'
const Index = props => {
  const [List , setList] = useState([
    {id:1},{id:2},{id:3},{id:4},{id:5},{id:6},
    {id:1},{id:2},{id:3},{id:4},{id:5},{id:6},
  ])
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
  const [modalVisible, setModalVisible] = useState(false);
const [tabSelected, setTabSelected] = useState(false)
const [coiffure, setCoiffure] = useState(false)
const [coutures, setCoutures] = useState(false)
  const [sliderValue, setsliderValue] = useState(43)
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Apple');
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  const maxVal = 1900
  const Next = () => {
    props.navigation.navigate('BookDetail');
  };
  const FlatListViews = ({item,index}) => {
    return(
      <TouchableOpacity>
    <View style={{width:'100%',marginVertical:10,paddingBottom:10,borderBottomColor:'#1C1C1C',borderBottomWidth:0.5}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:3}}>
            <Text style={{fontFamily:CommonStyle.Regular,fontSize:12,color:'rgba(28,28,28,0.4)'}}>Emmanuel Macron</Text>
            <Text style={{fontFamily:CommonStyle.Bold,fontSize:14,color:'#2A2AC0'}}>12/01/2019</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
            <Text style={{fontFamily:CommonStyle.Bold,fontSize:14,color:'rgb(28,28,28)'}}>Extension de cils</Text>
            <Text style={{fontFamily:CommonStyle.Bold,fontSize:14,color:'#2A2AC0'}}>14:30</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        </View>
      </View>
      </TouchableOpacity>
      

      // </ScrollView>
    )
  }
  const New = () => {

  } 
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
      <View style={styles.HeaderContainer}>
            <TouchableOpacity onPress={()=>props.navigation.navigate('DrawerBarber')}>
            <View style={{height:20,width:20, marginBottom:20,marginTop:6}}>
                <Image source={Bars} resizeMode='contain' style={{width:'100%',height:'100%'} }/>
            </View>
            </TouchableOpacity>
            <View>
                <Text style={{color:CommonStyle.BlueColor, fontSize:24, fontFamily:CommonStyle.Bold}}>Historique</Text>
            </View>
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={()=>setCoutures(true)}>
            <View style={coutures===false?{flexDirection:'row'}:styles.tabContainer2}>
                <Text style={{color:'#707070'}}>Disponibilités</Text>
            </View>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={()=>setCoutures(true)> */}
            <TouchableOpacity onPress={()=>setCoutures(false)}>
            <View style={coutures===false?styles.tabContainer2:{flexDirection:'row'}}>
                <Text style={{color:'#707070'}}>Réservations</Text>
            </View>
            </TouchableOpacity>

        </View>
       <View style={{marginHorizontal:25,marginVertical:12}}>
           <Text style={{fontSize:16,fontFamily:CommonStyle.Bold,color:CommonStyle.dark}}>Réservations à venir</Text>
       </View>
       <View style={{marginHorizontal:25}}>
       <FlatList
            data={List}
            renderItem={FlatListViews}
          />
       </View>

        
      </ScrollView>
    
    </SafeAreaView>
  );
};
export default Index;
