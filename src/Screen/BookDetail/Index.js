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

const BookService = props => {
  const [List , setList] = useState([
    {id:1},{id:1},{id:1},{id:1},{id:1},{id:1},
  ])
const [Description, setDescription] = useState(false)
const [Book, setBook] = useState(false)
const [Avis, setAvis] = useState(false)
  const [sliderValue, setsliderValue] = useState(Math.ceil(10))
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Apple');
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  const maxVal = 1900
  const Next = () => {
    props.navigation.navigate('Meeting');
  };
  const FlatListView = ({item,index}) => {
    return(
    <View style={{margin:5,borderBottomColor:'rgba(103,103,103,0.4)',borderBottomWidth:0.7}}>
      <View style={{width:'100%',}}>
        <Text style={{fontSize:14,fontFamily:CommonStyle.Bold,color:'#5C5C5C'}}>Lorem</Text>
      </View>
      <View style={{width:'100%',paddingVertical:10}}>
      <Text style={{fontSize:12,fontFamily:CommonStyle.Regular,marginVertical:3,color:'#5C5C5C'}}>Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
      <Text style={{fontSize:12,fontFamily:CommonStyle.Regular,marginVertical:3,color:'#5C5C5C'}}>Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
      <Text style={{fontSize:12,fontFamily:CommonStyle.Regular,marginVertical:3,color:'#5C5C5C'}}>Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
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
        <View style={{width:110,height:110,marginRight:10}}>
            <Image source={Profile} style={{width:'100%',height:'100%'}} resizeMode='contain'/>
        </View>
        <View style={{flex:1}}>
            <Text style={{marginVertical:5,fontSize:16,fontFamily:CommonStyle.Bold,color:CommonStyle.dark}}>Emmanuel Macron</Text>
            <Text style={{marginVertical:3,fontSize:16,fontFamily:CommonStyle.Regular,color:'#707070'}}>Coiffeur</Text>
            <Text style={{marginVertical:2,fontSize:16,fontFamily:CommonStyle.Regular,color:'#707070'}}>Elysée, Paris 8ème</Text>
        </View>
    </View>
    <View style={styles.date}>
            <Text style={{fontSize:23,fontFamily:CommonStyle.Regular,color:CommonStyle.dark}}>Jeu. 9 déc.</Text>
            <Text style={{fontSize:23,fontFamily:CommonStyle.Bold,color:CommonStyle.RedButton}}> 08:00</Text>    
            
        </View>
        <View>
          <Buttons ButtonText='Contacter' propsFun={Next}/>
        </View>
        <View>
          <Buttons ButtonText='Réserver' propsFun={Next}/>
        </View>
        <View style={styles.tabContainer}>
            
            <TouchableOpacity onPress={()=>{
                setDescription(true)
                setBook(false)
                setAvis(true)
            }}>
                <View style={Description===true?{borderBottomColor:CommonStyle.dark,borderBottomWidth:2}:''}>
                    <Text style={Description===true?{marginBottom:12,fontFamily:CommonStyle.Bold,fontSize:16}:{marginBottom:12,fontFamily:CommonStyle.Regular,fontSize:16}}>Description</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                setDescription(false)
                setBook(true)
                setAvis(true)
            }}>
                <View style={Book===true?{borderBottomColor:CommonStyle.dark,borderBottomWidth:2}:''}>
                    <Text style={Book===true?{marginBottom:12,fontFamily:CommonStyle.Bold,fontSize:16}:{marginBottom:12,fontFamily:CommonStyle.Regular,fontSize:16}}>Book</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                setDescription(false)
                setBook(false)
                setAvis(false)
            }}>
                <View style={Avis===false?{borderBottomColor:CommonStyle.dark,borderBottomWidth:2,}:''}>
                    <Text style={Avis===false?{marginBottom:12,fontFamily:CommonStyle.Bold,fontSize:16}:{marginBottom:12,fontFamily:CommonStyle.Regular,fontSize:16}}>Avis</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={{marginHorizontal:15}}>
          <FlatList
            // key={'_'}
            data={List}
            renderItem={FlatListView}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default BookService;
