import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';

import Button from '../../Components/Button/index';
import * as CommonStyle from '../../helper/CommonStyle';

var validator = require('validator');
import BGPIC from '../../../Image/logo.png';
import {useTranslation} from 'react-i18next';

const Index = Routprops => {
  const {t, i18n} = useTranslation();
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
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
      Routprops.navigation.navigate('PhoneNumber');
    }
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <View style={styles.container}>
            <Image source={BGPIC} style={styles.ImagesStyle} />
            <View style={styles.InputContainer}>
              <TextInput
                style={{marginLeft: 20}}
                placeholder={t("Nom")}
                onChangeText={name => setName(name)}
              />
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={{marginLeft: 20}}
                placeholder={t("Prénom")}
                onChangeText={name => setFirstName(name)}
              />
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={{marginLeft: 20}}
                placeholder={t("E-mail")}
                onChangeText={name => setEmail(name)}
              />
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={{marginLeft: 20}}
                placeholder={t("Adresse")}
                onChangeText={name => setAddress(name)}
              />
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={{marginLeft: 20}}
                placeholder={t("Mot de passe")}
                onChangeText={name => setPassword(name)}
              />
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={{marginLeft: 20}}
                placeholder={t("Photo de profil")}
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
export default Index;
