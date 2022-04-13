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
  Platform
} from 'react-native';
import styles from './styles';
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useTranslation} from 'react-i18next';
import DropdownAlert from 'react-native-dropdownalert';
import * as CommonStyle from '../../helper/CommonStyle';
import Button from '../../Components/Button/index';
var validator = require('validator');
import BGPIC from '../../../Image/logo.png';
import PhoneInput from 'react-native-phone-number-input';
const CELL_COUNT = 4;
const Index = Routprops => {
  const {t, i18n} = useTranslation();
  const [value, setValue] = useState('');
  const [Value, setvalue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState('');
  let dropDownAlertRef = useRef(null);
  const ComEmail = validator.isEmpty(phoneNumber);
  const ComPassword = validator.isEmpty(Password);

  const CHECK = () => {
    if (ComEmail === true) {
      setError('Phone-Number is Empty');
    } else if (ComPassword === true) {
      setError('Password is Empty');
    } else {
      dropDownAlertRef.current?.alertWithType(
        'success',
        'Success',
        'Successfully Login',
      );
      setTimeout(() => {
        Routprops.navigation.navigate('DrawerBarber');
      }, 2000);
    }
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      <DropdownAlert ref={dropDownAlertRef} />
      <KeyboardAvoidingView
        keyboardVerticalOffset={80}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <View style={styles.container}>
            <Image source={BGPIC} style={styles.ImagesStyle} />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.InputStyleMains}>
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
            </View>
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
              {error}
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
