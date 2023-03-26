import React, {useState, useLayoutEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../../Image/logo.png';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'react-native-paper';
import * as CommonStyle from '../../helper/CommonStyle';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import Feather from 'react-native-vector-icons/dist/Feather';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
const CELL_COUNT = 4;
const Index = props => {
    const {t,i18n}=useTranslation();
    const [filePath, setFilePath] = useState(null)
    const [name, setName] = useState('')
    useLayoutEffect(() => {
      // ProAppProfilePictures
      firestore().collection('ServicePrestamodeUser').where('uid','==',auth().currentUser.uid).get().then((res)=>{
        res.forEach((ls)=>{
          setFilePath(ls.data().PhotoUrl)
          setName(ls.data().Name)
        })
      })
    }, [])
  //   const logout =()=>{
  //     auth().signOut()
  // .then(() => props.navigation.replace('Login'));
  //   }
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.ImageContainer}>
          <Avatar.Image size={138} source={{uri:filePath}} style={styles.Image} />
       </View>
       <Text style={{color:CommonStyle.RedButton,fontSize:24,textAlign:'center',marginVertical:25,fontWeight:'bold'}}>{name}</Text>
       <View style={styles.container}>
        <TouchableOpacity onPress={()=>props.navigation.navigate("PlanningStack")}>
          <View style={styles.box}>
            <Feather name="calendar" color={CommonStyle.AppThemeDark} size={32} style={{alignSelf: 'center'}} />
            <Text style={styles.text}>Planning</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>props.navigation.navigate('Jobs')}>
          <View style={styles.box}>
            <Entypo name="scissors" color={CommonStyle.AppThemeDark} size={32} style={{alignSelf: 'center',transform:([{rotate:'-60deg'}])}}/>
            <Text style={styles.text}>Prestations</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>props.navigation.navigate('Revenues')}>
          <View style={styles.box}>
            <Octicons name="graph" color={CommonStyle.AppThemeDark} size={32} style={{alignSelf: 'center'}} />
            <Text style={styles.text}>Revenues</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>props.navigation.navigate('Inbox')}>
          <View style={styles.box}>
            <Icon name="chat-bubble-outline" color={CommonStyle.AppThemeDark} size={32} style={{alignSelf: 'center'}} />
            <Text style={styles.text}>Messagerie</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>props.navigation.navigate('ProfileStack')}>
          <View style={styles.box}>
            <FontAwesome name="user-circle-o" color={CommonStyle.AppThemeDark} size={32} style={{alignSelf: 'center'}} />
            <Text style={styles.text}>Profil</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>props.navigation.navigate('AbonmentStack')}>
          <View style={styles.box}>
            <FontAwesome5 name="file-invoice-dollar" color={CommonStyle.AppThemeDark} size={32} style={{alignSelf: 'center'}} />
            <Text style={styles.text}>Abonnement</Text>
          </View>
          </TouchableOpacity>
       </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Index;
