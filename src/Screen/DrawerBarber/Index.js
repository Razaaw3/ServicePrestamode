import React, {useState, useEffect} from 'react';
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
import storage from '@react-native-firebase/storage'

import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
const CELL_COUNT = 4;
const Index = props => {
    const {t,i18n}=useTranslation();
    const [filePath, setFilePath] = useState(null)
    const [loader, setLoader] = useState(true)
    useEffect(() => {
      // ProAppProfilePictures
      const func = async() =>{
        const uid = auth().currentUser.uid
        const imageRef = storage().ref(`ProAppProfilePictures/`+ uid);
        imageRef
        .getDownloadURL()
        .then((url) => {
        console.log('Single CoverPhoto URL',url)
        setFilePath(()=>url)
        console.log('Single filePath',filePath)
        setLoader(false)
        // UpdateData(url)
       
        })
      }
      func();
    }, [])
  //   const logout =()=>{
  //     auth().signOut()
  // .then(() => props.navigation.replace('Login'));
  //   }
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.ImageContainer}>
          <Avatar.Image size={120} source={filePath===""?{uri:'https://placeimg.com/140/140/any'}:{uri:filePath}} style={styles.Image} />
       </View>
       <Text style={{color:CommonStyle.RedButton,fontSize:24,textAlign:'center',marginVertical:25,fontWeight:'bold'}}>Bonjour Adja</Text>
       <View style={styles.container}>
        <TouchableOpacity onPress={()=>props.navigation.navigate("Schedule")}>
          <View style={styles.box}>
            <FontAwesome name="calendar" color={CommonStyle.AppThemeDark} size={60} style={{alignSelf: 'center'}} />
            <Text style={styles.text}>Planning</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>props.navigation.navigate('Jobs')}>
          <View style={styles.box}>
            <Entypo name="scissors" color={CommonStyle.AppThemeDark} size={60} style={{alignSelf: 'center',transform:([{rotate:'270deg'}])}}/>
            <Text style={styles.text}>Prestations</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>props.navigation.navigate('Revenues')}>
          <View style={styles.box}>
            <Octicons name="graph" color={CommonStyle.AppThemeDark} size={60} style={{alignSelf: 'center'}} />
            <Text style={styles.text}>Revenues</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>props.navigation.navigate('Inbox')}>
          <View style={styles.box}>
            <Ionicons name="ios-chatbubbles-outline" color={CommonStyle.AppThemeDark} size={60} style={{alignSelf: 'center'}} />
            <Text style={styles.text}>Messagerie</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>props.navigation.navigate('Profile')}>
          <View style={styles.box}>
            <AntDesign name="user" color={CommonStyle.AppThemeDark} size={60} style={{alignSelf: 'center'}} />
            <Text style={styles.text}>Profil</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>props.navigation.navigate('Welcome')}>
          <View style={styles.box}>
            <AntDesign name="shoppingcart" color={CommonStyle.AppThemeDark} size={60} style={{alignSelf: 'center'}} />
            <Text style={styles.text}>Abonnement</Text>
          </View>
          </TouchableOpacity>
       </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Index;
