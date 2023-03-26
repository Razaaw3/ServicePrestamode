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
import Button from '../../Components/Button/index';
import BGPIC from '../../../Image/logo.png';
import {useTranslation} from 'react-i18next';
const CELL_COUNT = 4;
const Index = Routprops => {
  const CHECK = () => {
    Routprops.navigation.navigate('PaymentPlan');
  };
  const {t, i18n} = useTranslation();
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Image source={BGPIC} style={styles.ImagesStyle} />
        </View>
        <View
          style={{
            width: 252,
            height: 40,
            alignSelf: 'center',
            paddingHorizontal: 15,
            paddingVertical: 5,
            marginVertical: 15,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: CommonStyle.Bold,
              fontSize: 24,
              color: CommonStyle.BlueButton,
            }}>
            {t('Bienvenue!')}
          </Text>
        </View>
        <View
          style={{
            width: 243,
            height: 53,
            alignSelf: 'center',
            marginVertical: 25,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: CommonStyle.Regular,
              fontSize: 14,
              color: '#181461',
            }}>
            {t(
              "Dernière vérification, veuillez fournir une pièce d'identité pour vérification",
            )}
          </Text>
        </View>

        <View style={{marginVertical: 15}}>
          <Button ButtonText={t('Sélectionner un fichier')} propsFun={CHECK} />
        </View>
        <View style={{width: '75%', alignSelf: 'center'}}>
          <Text style={{textAlign: 'center',color:CommonStyle.Date}}>
            {t(
              'Document acceptés' )} : {t('carte d’identité, passeport, titre de séjour,permis de conduire',
            )}
          </Text>
        </View>

        {/* </View> */}
      </ScrollView>
      <View style={{width: '80%', alignSelf: 'center', marginBottom: 35}}>
        <TouchableOpacity>
          <Text style={{textAlign: 'center',color:CommonStyle.Date}}>{t('Envoyer plus tard')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Index;
