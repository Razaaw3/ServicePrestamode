import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, Image, Text,StyleSheet, ScrollView,Dimensions, FlatList, TouchableOpacity} from 'react-native';
// import styles from './styles';
import BGPIC from '../../../Image/logo.png';
import Button from '../../Components/Button/index';
import Header from '../../Components/AuthHeader/index';
import {useTranslation} from 'react-i18next';
import '../../config/i18n/index';
import * as CommonStyle from '../../helper/CommonStyle';

// import image1 from '../../../Image/image1.PNG'


import Ionicons from 'react-native-vector-icons/Ionicons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const LoginSignUp = props => {
  const {t, i18n} = useTranslation();
  const RoutLOGIN = () => {
    props.navigation.navigate('Login');
  };
  const RoutSIGNUP = () => {
    props.navigation.navigate('Auth');
  };
  const [Images, setImages] = useState(BGPIC);
  // const [list, setlist] = useState([{pic:image2},{pic:image1},{pic:image3},{pic:image4},{pic:image5},{pic:image6}])
  const [ButtonText, setButtonText] = useState('NEXT');

  
  return (
    <SafeAreaView style={styles.MainContainer}>
      {/* <View style={styles.container}>
        <Image source={Images} style={styles.ImagesStyle} />
        <Text style={styles.WellcomeText}>{t('Bienvenue')}</Text>
        <Button
          ButtonText={'Connexion'}
          propsFun={RoutLOGIN}
          ButtonStyle={'blue'}
        />
        <View style={{marginTop: 8}} />
        <Button
          ButtonText={'Inscription'}
          propsFun={RoutSIGNUP}
          ButtonStyle={'red'}
        />
        <Text style={styles.LastText}>
          {t('En vous connectant, vous acceptez nos conditions')}
        </Text>
      </View> */}
    <ScrollView>
    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginVertical:9}} onPress={()=>props.navigation.navigate("Translation")} >

        <Ionicons name='globe-outline' size={26 } color='#000'/>
        <Text style={{color:'black'}}> {t("Français v")}</Text>
        
      </TouchableOpacity>
      
        <Image source={require('../../../Image/image1.jpg')}  style={{width:390,height:450,alignSelf: 'center'}} resizeMode="cover" />
              
      <View>
        
          <Image source={Images} style={{width:300,height:100,marginLeft:-30}}  />
          <Text style={styles.text}>Choisissez vos coiffure préférées et sélectionnez votre coiffeuse parmi les meilleures de votre ville</Text>
          <View style={styles.btnContainer}>
          <TouchableOpacity onPress={RoutLOGIN}>
            <View style={[styles.btn,{backgroundColor:CommonStyle.BlueButton}]}>
            <Text style={{color:CommonStyle.AppThemeLight}}>{t("Se Connecter")}</Text> 
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={RoutSIGNUP} style={[styles.btn,{backgroundColor:CommonStyle.RedButton}]}>
            <Text style={{color:CommonStyle.dark}}>{t("S'inscrire")}</Text> 
          </TouchableOpacity>
          </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default LoginSignUp;
const styles = StyleSheet.create({
  MainContainer:{
    height:windowHeight*1,
    backgroundColor:CommonStyle.AppThemeLight,
    // paddingBottom:30
  },
  pictureContainer:{
   width:"100%",
   height:windowHeight*.55,
  },
  text:{
    color:'grey',
    paddingHorizontal:30,
    fontSize:17
  },
  btnContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:50,
    marginVertical:30,
    marginBottom:60
  },
  btn:{
    width:110,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15
  }
})
