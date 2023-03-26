import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import * as CommonStyle from '../../helper/CommonStyle';
import Button from '../../Components/Button/index';
import Icon from 'react-native-vector-icons/AntDesign';
import {useTranslation} from 'react-i18next';
import BGPIC from '../../../Image/logo.png';
import DropdownAlert from 'react-native-dropdownalert';
import auth from '@react-native-firebase/auth'
import firestore from "@react-native-firebase/firestore"

var validator = require('validator');
const CELL_COUNT = 6;

const VarificationCode = props => {

  //Hooks
  let dropDownAlertRef = useRef(null);

  

  //States
  const {t, i18n} = useTranslation();
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [dataprevios, setdataprevios] = useState('');
  const [Data, setData] = useState({});
  
  
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  
  useEffect(() => {
    console.log("NAme is : ",props.route.params.Array)
    const phoneForOTP = props.route.params.phoneForOTP;
    const confirmation = props.route.params.confirmation;
    setdataprevios(phoneForOTP);
    setConfirm(confirmation);
    setPassword(props.route.params.Array.Password)
    setEmail(props.route.params.Array.Email)
    setData(props.route.params.Array)
  }, []);

  const CHECK = async () => {
    if (validator.isEmpty(value) === true) {
      setError('Please Enter Verification code');
    } else {
      try{
        const con = await confirm.confirm(value);
        console.log("concon",con)
        // props.navigation.navigate('UploadImage',{Array:props.route.params.Array,id:con.user.uid})
       
        // props.navigation.navigate('UploadImage')
        if(con){
try{
          auth().createUserWithEmailAndPassword(email,password)
           .then(() => {
            dropDownAlertRef.current?.alertWithType(
              'success',
              'Success',
              'Successfully Registered',
            );
            // setUserid(...auth().currentUser.uid);
            // setTimeout(() => {
            // console.log("USer id is +Ods", userid)
            // database().ref(`prestamodeUser/${userid}`).set({
            //     UserID:userid,
            //     Name:props.route.params.Array.Name,
            //     Email:props.route.params.Array.Email,
            //     Address:props.route.params.Array.Address,
            //     FirstName:props.route.params.Array.FirstName,
            //     Password:props.route.params.Array.Password,
            //     Age:props.route.params.Array.Age,
            //     PhoneNumber:props.route.params.phoneForOTP,
            //     })
                firestore()
                .collection('ServicePrestamodeUser')
                .add({
                  Name: Data.Name,
                  Phone: Data.PhoneNumber,
                  Email: Data.Email,
                  Address: Data.Address,
                  uid: auth().currentUser.uid,
                  FirstName:Data.FirstName
                })
            // }, 3000);
            
          })
          .then(()=>{
            props.navigation.navigate('UploadImage')
          })
          .catch((error) => {
            console.log(error);
            if (error.code === "auth/email-already-in-use") {
              dropDownAlertRef.current?.alertWithType(
                'error',
                'Error',
                "That email address is already in use!"
              );
            } else {
              dropDownAlertRef.current?.alertWithType(
                'error',
                'Error',
                error.message
              );
            }
          });
          }
        catch(error){
          console.log("Error in storing data : ",error);
        }
        }
       
       
       
        
      }
      catch(err){
        alert('Invalid Code')
        console.log("Invalid Code : ",err)
      }
      
    }

  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      <DropdownAlert ref={dropDownAlertRef} />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={80}>
        <ScrollView>
          <View style={styles.container}>
            <Image source={BGPIC} style={styles.ImagesStyle} />
            <View style={{marginTop: 25}} />
            <View>
              <Text style={styles.Content}>{t('Vérification')}</Text>
            </View>
            <Text style={styles.ContentDes}>
              {t('Veuillez insérer le code reçu')}
            </Text>
            <View style={styles.InputStyleMain}>
              <View style={styles.InputStyle}>
                <CodeField
                  ref={ref}
                  {...prop}
                  // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                  value={value}
                  onChangeText={code => setValue(code)}
                  cellCount={CELL_COUNT}
                  rootStyle={styles.codeFieldRoot}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  renderCell={({index, symbol, isFocused}) => (
                    <Text
                      key={index}
                      style={[styles.cell, isFocused && styles.focusCell]}
                      onLayout={getCellOnLayoutHandler(index)}>
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                  )}
                />
              </View>
              <Icon
                name="close"
                size={20}
                color="lightgray"
                style={{marginLeft: 32, marginTop: 15}}
              />
            </View>
            <Text
              style={{
                marginBottom: 9,
                alignSelf: 'center',
                color: 'red',
                fontFamily: CommonStyle.Regular,
                fontSize: 12,
              }}>
              {error}
            </Text>
            <Button ButtonText={'Valider'} propsFun={CHECK} />
          </View>
          <View style={{flexDirection: 'row', marginLeft: '5%', marginTop: 5}}>
            <TouchableOpacity
              style={{width: '50%'}}
              onPress={() => Routprops.navigation.navigate('PhoneNumber')}>
              <Text style={styles.LastLeft}>{t('Envoyer à nouveau')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{width: '44%'}}
              onPress={() => Routprops.navigation.navigate('PhoneNumber')}>
              <Text style={styles.LastRight}>{t('Modifier le numéro')}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default VarificationCode;
