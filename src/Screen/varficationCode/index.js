import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
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
import BGPIC from '../../../Image/logo.png';
import {useTranslation} from 'react-i18next';
var validator = require('validator');
const CELL_COUNT = 4;
const VarificationCode = Routprops => {
  const {t, i18n} = useTranslation();
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CHECK = () => {
    if (validator.isEmpty(value) === true) {
      setError('Please Enter Verification code');
    } else {
      Routprops.navigation.navigate('DrawerBarber');
      setError('');
    }
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
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
                {...props}
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
          <Button ButtonText={t('Valider')} propsFun={CHECK} />
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
    </SafeAreaView>
  );
};
export default VarificationCode;
