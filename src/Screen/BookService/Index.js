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

const BookService = props => {
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
  const FlatListView = ({item,index}) => {
    return(
    <View style={{width:'50%',height:150,margin:5}}>
      <View style={{width:'100%',height:100}}>
        <Image source={require('../../../Image/skip1.png')} style={{width:'100%',height:'100%'}} resizeMode='contain'/>
      </View>
      <View style={{width:'100%',height:50,paddingHorizontal:40,paddingVertical:10}}>
      <Text>Prestation</Text>
      </View>
      
  </View>
      // </ScrollView>
    )
  }
  const FlatListViews = ({item,index}) => {
    return(
      <TouchableOpacity>
    <View style={{width:'100%'}}>

      <View style={{paddingHorizontal:10,paddingVertical:20}}>
        <Text style={{fontSize:14,fontFamily:CommonStyle.Bold,color:CommonStyle.dark}}>Lorem</Text>
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
            <View style={{height:60}}>
            <Header/>
            </View>
            <View>
                <Text style={{color:CommonStyle.BlueColor, fontSize:24, fontFamily:CommonStyle.Bold}}>Réserver un service</Text>
            </View>

        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={()=>{
            setTabSelected(true)
            setCoiffure(false)
            setCoutures(true)
            }}>
            <View style={coutures===false?{flexDirection:'row'}:styles.tabContainer2}>
                <View style={{width:20,height:20, marginHorizontal:5}}>
                    <Image source={require('../../../Image/sewing.png')} resizeMode='contain' style={{width:'100%',height:'100%',color:'#707070'}}/>
                </View>
                <Text style={{color:'#707070'}}>Coutures</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
            setTabSelected(true)
            setCoiffure(true)
            setCoutures(false)
            }}>
            <View style={coiffure===false?{flexDirection:'row'}:styles.tabContainer2}>
                <View style={{width:20,height:20, marginHorizontal:5}}>
                    <Image source={require('../../../Image/barber.png')} resizeMode='contain' style={{width:'100%',height:'100%',color:'#707070'}}/>
                </View>
                <Text style={{color:'#707070'}}>Coiffure</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
            setTabSelected(false)
            setCoiffure(false)
            setCoutures(false)
            }}>
            <View style={tabSelected===false?styles.tabContainer2:{flexDirection:'row'}}>
                <View style={{width:20,height:20, marginHorizontal:5}}>
                    <Image source={require('../../../Image/nail.png')} resizeMode='contain' style={{width:'100%',height:'100%',color:'#707070'}}/>
                </View>
                <Text style={{color:'#707070'}}>Esthétique</Text>
            </View>
            </TouchableOpacity>
        </View>
        {/* <Provider style={{flex:1}}>
        <View style={styles.inputFieldDropdown}>
        <View style={{width:'13%', justifyContent:'center',alignItems:'center'}}>
        <Icon name='search' size={24} color='#EF233C'/>
        </View>
        <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={styles.inputField}
    />
   
      </View>
      </Provider> */}
      <TouchableOpacity onPress={()=>setModalVisible(true)}>
      <View style={styles.inputFields}>

            <View style={{width:'15%', justifyContent:'center',alignItems:'center'}}>
            <Icon name='search' size={24} color='#EF233C'/>
            </View>
            <View style={{width:'75%',height:'100%',justifyContent:'center'}}>
                {/* <TextInput placeholder='Ville...' placeholderTextColor={CommonStyle.dark} style={{backgroundColor:CommonStyle.white,height:'100%',width:'90%'}}/> */}
              <Text  style={{backgroundColor:CommonStyle.white,color:CommonStyle.dark}}>Prestation…</Text>
            </View>
            <View style={{width:'10%', justifyContent:'center',alignItems:'center'}}>
            <Arrow name='keyboard-arrow-down' size={24} color='#EF233C'/>
            </View>
        </View>
        </TouchableOpacity>
        <View style={styles.inputFields}>

            <View style={{width:'15%', justifyContent:'center',alignItems:'center'}}>
              <Location name='location-pin' size={24} color='#EF233C'/>
            </View>
            <View style={{width:'85%',height:'100%',}}>
                <TextInput placeholder='Ville...' placeholderTextColor={CommonStyle.dark} style={{backgroundColor:CommonStyle.white,height:'100%',width:'90%'}}/>
            </View>
        </View>
        <View style={styles.inputFields}>
        <View style={{width:'15%', justifyContent:'center',alignItems:'center'}}>
              <Calender name='calendar' size={24} color='#EF233C'/>
        </View>
            <View style={{width:'85%',height:'100%',}}>
                <TextInput placeholder='Créneau…' placeholderTextColor={CommonStyle.dark} style={{backgroundColor:CommonStyle.white,height:'100%',width:'90%'}}/>
            </View>
        </View>
        <View style={styles.sliderContainer}>
          <Text style={{textAlign:'right',fontSize:16,fontFamily:CommonStyle.Regular,color:CommonStyle.dark}}>{sliderValue}€-{maxVal}€</Text>
        <Slider
          value={sliderValue}
          onValueChange={(value)=>setsliderValue(value)}
          minimumTrackTintColor='red'
          maximumTrackTintColor='#2A2AC0'
          maximumValue={maxVal}
          thumbStyle='red'
           />
        </View>
        <View>
          <ButtonS ButtonText='Rechercher ' propsFun={Next}/>
        </View>
        <View style={{marginLeft:'auto',marginRight:'auto'}}>
          <FlatList
            // key={'_'}
            data={List}
            renderItem={FlatListView}
            numColumns={2}
          />
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{backgroundColor:CommonStyle.AppThemeLight,width:300,height:400,alignSelf:'center',marginTop:'auto',marginBottom:'auto',borderRadius:30,paddingTop:30,paddingBottom:15,paddingHorizontal:15}}>
        <FlatList
            // key={'_'}
            data={List}
            renderItem={FlatListViews}
          />
          <View style={styles.ButtonContainer}>
      <TouchableOpacity
        style={{
          width: windowWidth * 0.5,
          alignSelf: 'center',
          height: 43,
          marginTop: windowHeight * 0.007,
          borderRadius: 8,
          backgroundColor:CommonStyle.BlueButton,
          justifyContent: 'center',
        }}
        onPress={()=>setModalVisible(false)}>
        <Text style={styles.Buttontext}>OK</Text>
      </TouchableOpacity>
    </View>
        </View>
        

      </Modal>
    </SafeAreaView>
  );
};
export default BookService;
