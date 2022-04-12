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
import * as CommonStyle from '../../helper/CommonStyle';
import Bars from '../../../Image/bars.png';
import Button from '../../Components/Button/index';
import {useTranslation} from 'react-i18next';
const Index = Routprops => {
  const {t, i18n} = useTranslation();
  const CHECK = () => {
    Routprops.navigation.navigate('DrawerBarber');
  };
  // return <Text>Example {time}</Text>
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.HeaderContainer}>
          <TouchableOpacity
            onPress={() => Routprops.navigation.navigate('DrawerBarber')}>
            <View
              style={{height: 20, width: 20, marginBottom: 20, marginTop: 6}}>
              <Image
                source={Bars}
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
              />
            </View>
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: CommonStyle.BlueColor,
                fontSize: 24,
                fontFamily: CommonStyle.Bold,
              }}>
              {t('Profil')}
            </Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputFields}>
            <TextInput
              placeholder={t('Nom')}
              placeholderTextColor="rgba(28,28,28,0.2)"
              style={styles.inputFieldsText}
            />
          </View>
          <View style={styles.inputFields}>
            <TextInput
              placeholder={t('Prénom')}
              placeholderTextColor="rgba(28,28,28,0.2)"
              style={styles.inputFieldsText}
            />
          </View>
          <View style={styles.inputFields}>
            <TextInput
              placeholder={t('Age')}
              placeholderTextColor="rgba(28,28,28,0.2)"
              style={styles.inputFieldsText}
            />
          </View>
          <View style={styles.inputFields}>
            <TextInput
              placeholder={t('Adresse')}
              placeholderTextColor="rgba(28,28,28,0.2)"
              style={styles.inputFieldsText}
            />
          </View>
          <View style={styles.inputFields}>
            <TextInput
              placeholder={t('Email')}
              placeholderTextColor="rgba(28,28,28,0.2)"
              style={styles.inputFieldsText}
            />
          </View>
          <View style={styles.inputFields}>
            <TextInput
              placeholder={t('Mot de passe')}
              placeholderTextColor="rgba(28,28,28,0.2)"
              style={styles.inputFieldsText}
            />
          </View>
          <View style={styles.inputField}>
            <Text
              style={{
                fontFamily: CommonStyle.Regular,
                fontSize: 16,
                width: '15%',
                color: '#2A2AC0',
                textAlign: 'center',
              }}>
              +33
            </Text>
            <TextInput
              placeholder="6 55 23 27 43"
              placeholderTextColor="rgba(28,28,28,0.2)"
              style={styles.inputFieldsText}
            />
          </View>
          <View style={styles.inputFields}>
            <TextInput
              placeholder={t('Pseudo - Nom boutique')}
              placeholderTextColor="rgba(28,28,28,0.2)"
              style={styles.inputFieldsText}
            />
          </View>
          <View style={styles.inputFields}>
            <TextInput
              placeholder={t('Moyen de paiement')}
              placeholderTextColor="rgba(28,28,28,0.2)"
              style={styles.inputFieldsText}
            />
          </View>
        </View>
      </ScrollView>
      <View style={{marginVertical: 15}}>
        <Button ButtonStyle="red" ButtonText={t('Valider')} propsFun={CHECK} />
      </View>
    </SafeAreaView>
  );
};
export default Index;
