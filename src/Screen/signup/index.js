import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import styles from './styles';
import Button from '../../Components/Button/index';
import * as CommonStyle from '../../helper/CommonStyle';
import {useTranslation} from 'react-i18next';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
var validator = require('validator');
import BGPIC from '../../../Image/logo.png';
const VarificationCode = Routprops => {
  const {t, i18n} = useTranslation();
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  // const [name, setName] = useState('')
  const [Password, setPassword] = useState('');
  let dropDownAlertRef = useRef(null);
  const CHECK = () => {
    const ComEmail = validator.isEmpty(email);
    const ValEmail = validator.isEmail(email);
    const ComFullName = validator.isEmpty(name);
    const ComPassword = validator.isEmpty(Password);
    const Comdate = validator.isEmpty(address);
    const ComselectedGender = validator.isEmpty(firstName);
    if (ComFullName === true) {
      setError('Name is Empty');
    } else if (ComselectedGender === true) {
      setError('FirstName is Empty');
    } else if (ComEmail === true) {
      setError('Email is Empty');
    } else if (ValEmail === false) {
      setError('Email is invalid');
    } else if (Comdate === true) {
      setError('Address is Empty');
    } else if (ComPassword === true) {
      setError('Password is Empty');
    } else {
     auth().createUserWithEmailAndPassword(email,Password)
     .then((user) => {
      dropDownAlertRef.current?.alertWithType(
        'success',
        'Success',
        'Successfully Registered',
      );
      let userid=auth().currentUser.uid;
      console.log("USer id is +Ods", userid)
      database().ref(`user/${userid}`).set({
          UserID:userid,
          Name:name,
          Email:email,
          Address:address,
          FirstName:firstName
          // Pic:this.state.avatarSource,
          })
      if (user) {
        auth()
          .currentUser.updateProfile({
            displayName: name
          })
          .then(() => Routprops.navigation.replace("Login"))
          .catch((error) => {
            dropDownAlertRef.current?.alertWithType(
              'error',
              'Error',
              error,
            );
          });
      }
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
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      <DropdownAlert ref={dropDownAlertRef} />
      <KeyboardAvoidingView
        keyboardVerticalOffset={80}
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <View style={styles.container}>
            <Image source={BGPIC} style={styles.ImagesStyle} />
            <View style={styles.InputContainer}>
              <TextInput
                style={{marginLeft: 20}}
                placeholder={t('Nom')}
                placeholderTextColor="rgba(28,28,28,.4)"
                onChangeText={name => setName(name)}
              />
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={{marginLeft: 20}}
                placeholder={t('Prénom')}
                placeholderTextColor="rgba(28,28,28,.4)"
                onChangeText={name => setFirstName(name)}
              />
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={{marginLeft: 20}}
                placeholder="E-mail"
                placeholderTextColor="rgba(28,28,28,.4)"
                onChangeText={name => setEmail(name)}
              />
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={{marginLeft: 20}}
                placeholder="Adresse"
                placeholderTextColor="rgba(28,28,28,.4)"
                onChangeText={name => setAddress(name)}
              />
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={{marginLeft: 20}}
                placeholder={t('Mot de passe')}
                placeholderTextColor="rgba(28,28,28,.4)"
                onChangeText={name => setPassword(name)}
              />
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={{marginLeft: 20}}
                placeholder={t('Photo de profil')}
                placeholderTextColor="rgba(28,28,28,.4)"
              />
            </View>

            <Text
              style={{
                alignSelf: 'center',
                color: 'red',
                fontFamily: CommonStyle.Regular,
                fontSize: 12,
              }}>
              {error}
            </Text>
            <View style={{marginTop: 30}} />
            <Button
              ButtonText={t('Valider')}
              propsFun={CHECK}
              ButtonStyle={'red'}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default VarificationCode;
