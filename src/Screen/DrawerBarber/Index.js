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
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../../Image/logo.png';
import { useTranslation } from 'react-i18next';
import auth from '@react-native-firebase/auth';
const CELL_COUNT = 4;
const Index = Routprops => {
    const {t,i18n}=useTranslation();
    const logout =()=>{
      auth().signOut()
  .then(() => Routprops.navigation.replace('Login'));
    }
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.HeaderContainer}>
          <View style={styles.container}>
            <Image source={Logo} style={styles.ImagesStyle} />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            onPress={() => Routprops.navigation.navigate('Profile')}>
            <View style={styles.inputFields}>
              <Text style={styles.textStyle}>{t('Profil')}</Text>
              <Icon
                name="keyboard-arrow-right"
                size={26}
                style={{alignSelf: 'center'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Routprops.navigation.navigate('Jobs')}>
            <View style={styles.inputFields}>
              <Text style={styles.textStyle}>{t('Prestations')}</Text>
              <Icon
                name="keyboard-arrow-right"
                size={26}
                style={{alignSelf: 'center'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Routprops.navigation.navigate('Book')}>
            <View style={styles.inputFields}>
              <Text style={styles.textStyle}>{t('Book')}</Text>
              <Icon
                name="keyboard-arrow-right"
                size={26}
                style={{alignSelf: 'center'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Routprops.navigation.navigate('Schedule')}>
            <View style={styles.inputFields}>
              <Text style={styles.textStyle}>{t('Planning')}</Text>
              <Icon
                name="keyboard-arrow-right"
                size={26}
                style={{alignSelf: 'center'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Routprops.navigation.navigate('Inbox')}>
            <View style={styles.inputFields}>
              <Text style={styles.textStyle}>{t('Messagerie')}</Text>
              <Icon
                name="keyboard-arrow-right"
                size={26}
                style={{alignSelf: 'center'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Routprops.navigation.navigate('History')}>
            <View style={styles.inputFields}>
              <Text style={styles.textStyle}>{t('Historique')}</Text>
              <Icon
                name="keyboard-arrow-right"
                size={26}
                style={{alignSelf: 'center'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Routprops.navigation.navigate('Welcome')}>
            <View style={styles.inputFields}>
              <Text style={styles.textStyle}>{t('Abonnement')}</Text>
              <Icon
                name="keyboard-arrow-right"
                size={26}
                style={{alignSelf: 'center'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={logout}>
            <View style={styles.inputField}>
              <Text style={styles.textStyle}>{t('Déconnexion')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Index;
