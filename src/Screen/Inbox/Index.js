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
// import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
// var Slider = require('react-native-slider');
import Slider from 'react-native-slider'
import Location from 'react-native-vector-icons/SimpleLineIcons'
import Calender from 'react-native-vector-icons/AntDesign'
import { Avatar } from 'react-native-paper';
const Index = props => {
  const [List , setList] = useState([
    {id:1},{id:1},{id:1},{id:1},{id:1},{id:1},
    {id:1}
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
  const Next = () => {
    props.navigation.navigate('LeaveComment');
  };
  const FlatListView = ({item,index}) => {
    return(
      <TouchableOpacity onPress={()=>props.navigation.navigate('Chat')}>
    <View style={styles.chatContainer}>
      <View style={{width:'20%'}}>
      <Avatar.Image size={70} source={require('../../../Image/logo.png')} style={{backgroundColor:'transparent'}} />
      </View>
      <View style={{flexDirection:'column',width:'100%'}}>
      <View style={styles.chatHeading}>
      <Text style={{fontFamily:CommonStyle.Bold,fontSize:15,color:CommonStyle.dark}}>Julian Dasilva</Text>
      <Text style={{fontFamily:CommonStyle.Regular,fontSize:12}}>1h ago</Text>
      </View>
      <View style={styles.chat}>
      <Text>Hi Julian! See you after work?</Text> 
      </View>
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
        <TouchableOpacity onPress={()=>props.navigation.goBack(null)}>
            <Back name='chevron-back' size={26} color='#707070'/>
        </TouchableOpacity>
        <TouchableOpacity >
        <Image source={avatar}/>
        </TouchableOpacity>
    </View>
    <View style={styles.message}>
        <Text style={{fontSize:16,fontFamily:CommonStyle.Bold,color:CommonStyle.dark}}>Messagerie</Text>
    </View>
    
       
        <View>
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
export default Index;
