import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import Header from '../../Components/Header/Index'
import DropDownPicker from 'react-native-dropdown-picker';
import * as CommonStyle from '../../helper/CommonStyle';
import styles from './styles';
import sewing from '../../../Image/sewing.png'
import Icon from 'react-native-vector-icons/Octicons';
import Cal from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/FontAwesome';
import Back from 'react-native-vector-icons/Ionicons';
import Add from 'react-native-vector-icons/Entypo';
import Logo from '../../../Image/logo.png';
import Profile from '../../../Image/profile.png';
import Buttons from '../../Components/Button/index';
import bars from '../../../Image/bars.png'
import avatar from '../../../Image/avatar.png'
// import { TextInput } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
// var Slider = require('react-native-slider');
import Slider from 'react-native-slider'
import Location from 'react-native-vector-icons/SimpleLineIcons'
import Calender from 'react-native-vector-icons/AntDesign'

const MeetingConfirm = props => {
  const [List , setList] = useState([
    {id:1},{id:1},{id:1},{id:1},{id:1},{id:1},
  ])
const [Description, setDescription] = useState(false)
const [Book, setBook] = useState(false)
const [Avis, setAvis] = useState(false)
  const [sliderValue, setsliderValue] = useState(Math.ceil(10))
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(1);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  const maxVal = 1900
  const Next = () => {
    props.navigation.navigate('Inbox');
  };
  const FlatListView = ({item,index}) => {
    return(
    <View style={{width:'100%'}}>
        <View style={{borderBottomWidth:0.3,borderBottomColor:'rgba(28,28,28,0.2)',marginBottom:9,}}>
      <View>
        <Text style={{fontSize:14,fontFamily:CommonStyle.Bold,color:CommonStyle.dark}}>Récapitulatif</Text>
      </View>
      <View style={{paddingHorizontal:10,paddingVertical:10}}>
      <Text style={{fontFamily:CommonStyle.Regular,marginVertical:2}}>Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
      <Text style={{fontFamily:CommonStyle.Regular,marginVertical:2}}>Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
      <Text style={{fontFamily:CommonStyle.Regular,marginVertical:2}}>Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
      </View>
      </View>
      
  </View>
      // </ScrollView>
    )
  }
  const New = () => {

  } 
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.HeaderContainer}>
        <TouchableOpacity onPress={()=>props.navigation.goBack(null)}>
            <Back name='chevron-back' size={26} color='#707070'/>
        </TouchableOpacity>
        <TouchableOpacity >
        <Image source={avatar}/>
        </TouchableOpacity>
    </View>
    <View style={styles.profileContainer}>
        <Text style={{fontSize:16,fontFamily:CommonStyle.Bold,color:CommonStyle.dark}}>Rendez-vous avec Emmanuel Macron</Text>
    </View>
    <View style={styles.date}>
            <Text style={{fontSize:23,fontFamily:CommonStyle.Regular,color:CommonStyle.dark}}>Jeu. 9 déc.</Text>
            <Text style={{fontSize:23,fontFamily:CommonStyle.Bold,color:CommonStyle.RedButton}}> 08:00</Text>    
            
        </View>
    <View style={styles.Location}>
        <View style={{height:35,justifyContent:'center'}}>
            <Location name='location-pin'  size={19} color='#2A2AC0'/>
        </View>
            <View style={{marginHorizontal:8}}>
            <Text style={{fontSize:14,fontFamily:CommonStyle.Regular,color:'#707070'}}>Elysée</Text>
            <Text style={{fontSize:14,fontFamily:CommonStyle.Regular,color:'#707070'}}>Paris 8ème</Text>
            </View>
                
        </View>
        
        <View style={styles.tabContainer}>
            
        </View>
        <View style={{width:'100%',height:230,marginVertical:60}}>
            <Image source={require('../../../Image/done.png')} resizeMode='contain' style={{width:'100%',height:'100%'}}/>
        </View>
         <Buttons
          ButtonText={'Ajouter à l’agenda'}
          propsFun={Next}
        />
        <View style={{width:'100%',marginVertical:20}}>
            <Text style={{fontSize:14,fontFamily:CommonStyle.Regular,color:CommonStyle.dark,alignSelf:'center'}}>2 jours avant votre rendez-vous</Text>
        </View>
      </ScrollView>
     
    </SafeAreaView>
  );
};
export default MeetingConfirm;
