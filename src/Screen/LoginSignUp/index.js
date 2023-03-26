import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  BackHandler,
  Alert
} from 'react-native';
// import styles from './styles';
import BGPIC from '../../../Image/logo.png';
import Button from '../../Components/Button/index';
import Header from '../../Components/AuthHeader/index';
import Circle from 'react-native-vector-icons/dist/FontAwesome';
import {Modal, Portal, Provider} from 'react-native-paper';
import AntDesign from "react-native-vector-icons/AntDesign"
import {useTranslation} from 'react-i18next';
import '../../config/i18n/index';
import * as CommonStyle from '../../helper/CommonStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import image1 from '../../../Image/image1.PNG'

import Ionicons from 'react-native-vector-icons/Ionicons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const LoginSignUp = props => {
  GoogleSignin.configure({
    webClientId: '212141452853-gvpfrgti2ccqgjvmru7kler7ullknmam.apps.googleusercontent.com',
  });
  const {t, i18n} = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('fr');
  const [visible, setVisible] = useState(false);

  const RoutLOGIN = () => {
    props.navigation.navigate('Login');
  };
  const RoutSIGNUP = () => {
    props.navigation.navigate('Auth');
  };
  const [Images, setImages] = useState(BGPIC);
  // const [list, setlist] = useState([{pic:image2},{pic:image1},{pic:image3},{pic:image4},{pic:image5},{pic:image6}])
  const [ButtonText, setButtonText] = useState('NEXT');

  const changeLanguage = async value => {
    setCurrentLanguage(value);
    console.log(value);
    try {
      await AsyncStorage.setItem('lan', value);
    } catch (e) {
      console.log('Error is   :', e);
    }
    // console.log(language)
    i18n
      .changeLanguage(value)
      .then(() => setCurrentLanguage(value))
      .catch(err => console.log(err));
    setVisible(false);
  };
  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    auth().signInWithCredential(googleCredential)
  } 
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 9,
          }}
          onPress={() => setVisible(!visible)}>
          <Ionicons name="globe-outline" size={26} color="#000" />
          <Text style={{color: 'black'}}> {t('Français v')}</Text>
        </TouchableOpacity>

        <Image
          source={require('../../../Image/image1.png')}
          style={{width: 390, height: 450, alignSelf: 'center'}}
          resizeMode="cover"
        />

        <View style={{backgroundColor:'white'}}>
          <Image
            source={Images}
            style={{width: 300, height: 100, marginLeft: -30}}
          />
          <Text style={styles.text}>
            {t("Choisissez vos coiffures préférées et sélectionnez votre coiffeuse parmi les meilleures de votre ville")}
          </Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={RoutLOGIN}>
              <View
                style={[styles.btn, {backgroundColor: CommonStyle.BlueButton}]}>
                <Text style={{color: CommonStyle.pureWhite, fontSize: 13}}>
                  {t('Se connecter')}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={RoutSIGNUP}
              style={[styles.btn, {backgroundColor: CommonStyle.RedButton}]}>
              <Text style={{color: CommonStyle.pureWhite, fontSize: 13}}>
                {t("S'inscrire")}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.btnContainer,{marginBottom:60,marginTop:10}]}>
            <TouchableOpacity >
              <View
               style={styles.otherBtn}>
               <Image source={require('../../../Image/fb.png')} style={{marginHorizontal:8}} />
                <Text style={{color: CommonStyle.pureWhite, fontSize: 8}}>
                  {t('Se connecter avec Facebook')}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={onGoogleButtonPress}
              style={[styles.otherBtn]}>
              <View
               style={[styles.otherBtn,{paddingLeft:0,width:"100%",backgroundColor:'#FF4F41'}]}>
                <Image source={require('../../../Image/google.png')} style={{marginHorizontal:8}} />
                {/* <AntDesign name="apple1" color="#000000" size={16} style={{marginRight:5}} /> */}
                <Text style={{color: CommonStyle.pureWhite, fontSize: 8}}>
                  {t('Se connecter avec Google')}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={() => setVisible(!visible)}
            contentContainerStyle={styles.containerStyle}>
            <View
              style={{
                marginTop: 'auto',
                marginBottom: 'auto',
                backgroundColor: CommonStyle.pureWhite,
                padding: 30,
                margin: 10,
              }}>
              <View>
                <TouchableWithoutFeedback onPress={() => changeLanguage('fr')}>
                  <View style={styles.ChangesLanguageCon}>
                    <Circle
                      name={currentLanguage === 'fr' ? 'circle' : 'circle-o'}
                      size={20}
                      color="#EF233C"
                      style={styles.IconChangesLanguageCon}
                    />
                    <Text style={styles.ChangesLanguageText}>French</Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => changeLanguage('en')}>
                  <View style={styles.ChangesLanguageCon}>
                    <Circle
                      name={currentLanguage === 'en' ? 'circle' : 'circle-o'}
                      size={20}
                      color="#EF233C"
                      style={styles.IconChangesLanguageCon}
                    />
                    <Text style={styles.ChangesLanguageText}>English</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </Modal>
        </Portal>
      </Provider>
    </SafeAreaView>
  );
};
export default LoginSignUp;
const styles = StyleSheet.create({
  MainContainer: {
    height: windowHeight * 1,
    backgroundColor: CommonStyle.AppThemeLight,
    // paddingBottom:30
  },
  pictureContainer: {
    width: '100%',
    height: windowHeight * 0.55,
  },
  text: {
    color: 'grey',
    paddingHorizontal: 30,
    fontSize: 17,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 30,
    // marginBottom: 60,
  },
  btn: {
    width: 140,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  otherBtn:{
    backgroundColor: "#707070",
    width:140,
    height:28,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
    flexDirection:'row',
    // paddingLeft:8
  },
  ChangesLanguageText: {
    fontSize: 12,
    fontFamily: CommonStyle.Bold,
    marginLeft: windowWidth * 0.04,
    color: CommonStyle.dark,
  },
  ChangesLanguageCon: {
    flexDirection: 'row',
    marginLeft: windowWidth * 0.09,
    marginTop: 12,
    alignItems: 'center',
  },
  containerStyle: {
    backgroundColor: 'white',
    paddingLeft: 6,
    // height:320,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 30,
    justifyContent: 'flex-start',
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
