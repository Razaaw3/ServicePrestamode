import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TextInput,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import styles from '../varficationCode/styles';
import Button from '../../Components/Button/index';
import * as CommonStyle from '../../helper/CommonStyle';
import PhoneInput from 'react-native-phone-number-input';
import {useTranslation} from 'react-i18next';
import BGPIC from '../../../Image/logo.png';

var validator = require('validator');
const Index = Routprops => {
  const [error, setError] = useState('');
  const [Value, setvalue] = useState('');
  const {t, i18n} = useTranslation();
  const CHECK = () => {
    if (validator.isEmpty(Value) === true) {
      setError('Phone Number is Empty');
    } else {
      Routprops.navigation.navigate('VerificationCode');
      setError('');
    }
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
       <KeyboardAvoidingView
        keyboardVerticalOffset={80}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.container}>
          <Image source={BGPIC} style={styles.ImagesStyle} />
          <View style={{marginTop: 25}} />
          <View>
            <Text style={styles.Content}>{t('Numéro de téléphone')}</Text>
          </View>
          <Text style={styles.ContentDes}>{t('Un code vous sera envoyé')}</Text>
          <View style={styles.InputStyleMains}>
            <View>
              <PhoneInput
                defaultValue={Value}
                defaultCode="FR"
                layout="second"
                onChangeText={text => {
                  setvalue(text);
                }}
                style={styles.InputStyles}
              />
            </View>
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

          <Button ButtonText={t('Valider')} propsFun={CHECK} />
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Index;
