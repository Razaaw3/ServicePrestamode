import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import DropdownAlert from 'react-native-dropdownalert';
import * as CommonStyle from '../../helper/CommonStyle';
import Bars from '../../../Image/bars.png';
import Button from '../../Components/Button/index';
var validator = require('validator');
import BGPIC from '../../../Image/logo.png';

// import { TextInput } from 'react-native-paper';
import PhoneInput from 'react-native-phone-number-input';
import {useTranslation} from 'react-i18next';
// import { auth } from 'react-native-firebase';
import auth from '@react-native-firebase/auth';
const CELL_COUNT = 4;
const Index = Routprops => {
  // const uid = Routprops.route.params.id;
  // useEffect(() => {
  //   console.log(uid)
  // }, [])
  

  const {t, i18n} = useTranslation();
  const [Content, setContent] = useState(
    'Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod',
  );
  const [value, setValue] = useState('');
  const [Value, setvalue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [email, setEmail] = useState('');
  const [Pass, setPass] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState(''); //shadinaif@gmail.com
  const [Password, setPassword] = useState(''); //123123
  const [error, setError] = useState('');
  let dropDownAlertRef = useRef(null);
  const ComEmail = validator.isEmpty(email);
  const ComPassword = validator.isEmpty(Password);

  const CHECK = () => {
    
    if (ComEmail === true) {
      setError('Email is Empty');
    } else if (ComPassword === true) {
      setError('Password is Empty');
    } else {
      
      auth()
      .signInWithEmailAndPassword(email, Password)
      .then((user) => {
        console.log(user);
        if (user){
          setError('')
         dropDownAlertRef.current?.alertWithType(
        'success',
        'Success',
        'Successfully Login',
      );
      setTimeout(() => {
        Routprops.navigation.navigate('DrawerBarber');
      }, 2000);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/invalid-email")
        dropDownAlertRef.current?.alertWithType(
          'error',
          'Error',
          error.message
        );
          
        else if (error.code === "auth/user-not-found")
        dropDownAlertRef.current?.alertWithType(
          'error',
          'Error',
          "No User Found"
        );
        else {
          setError(
            "Please check your email id or password"
          );
        }
      });
    }
  };
  
  return (
    <SafeAreaView style={styles.MainContainer}>
      <DropdownAlert ref={dropDownAlertRef} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <View style={styles.container}>
            <Image source={BGPIC} style={styles.ImagesStyle} />
          </View>
          <View style={styles.inputContainer}>
            {/* <View style={styles.InputStyleMains}>
              <PhoneInput
                defaultValue={Value}
                defaultCode="DM"
                layout="first"
                onChangeText={text => {
                  setPhoneNumber(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                }}
                style={styles.InputStyles}
              />
            </View> */}
             <View style={styles.inputFields}>
              <TextInput
                style={{marginLeft: 20}}
                placeholder="E-mail"
                placeholderTextColor="rgba(28,28,28,.4)"
                onChangeText={name => setEmail(name)}
              />
            </View>
            {/* <Text style={{alignSelf:'center',color:'red',fontFamily:CommonStyle.Regular,fontSize:12}}>{error}</Text> */}
            <View style={styles.inputFields}>
              <TextInput
                onChangeText={Email => setPassword(Email)}
                placeholder={t('Mot de passe')}
                placeholderTextColor="rgba(28,28,28,0.2)"
                style={{
                  fontFamily: CommonStyle.Regular,
                  fontSize: 16,
                  width: '85%',
                  alignSelf: 'center',
                }}
              />
            </View>
            <Text
              style={{
                alignSelf: 'center',
                color: 'red',
                fontFamily: CommonStyle.Regular,
                fontSize: 12,
              }}>
              {t(error)}
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={{marginVertical: 15}}>
        <Button
          ButtonStyle="red"
          ButtonText={t('Se connecter')}
          propsFun={CHECK}
        />
      </View>
    </SafeAreaView>
  );
};
export default Index;
