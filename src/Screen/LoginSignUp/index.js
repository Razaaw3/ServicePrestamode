import React, {useState} from 'react';
import {View, SafeAreaView, Image, Text} from 'react-native';
import styles from './styles';
import BGPIC from '../../../Image/logo.png';
import Button from '../../Components/Button/index';
import {useTranslation} from 'react-i18next';
const LoginSignUp = props => {
  const RoutLOGIN = () => {
    props.navigation.navigate('Login');
  };
  const RoutSIGNUP = () => {
    props.navigation.navigate('Auth');
  };
  const [Images, setImages] = useState(BGPIC);
  const {t, i18n} = useTranslation();

  return (
    <SafeAreaView style={styles.MainContainer}>
      <View style={styles.container}>
        <Image source={Images} style={styles.ImagesStyle} />
        <Text style={styles.WellcomeText}>{t('Bienvenue')}</Text>
        <Button
          ButtonText={t('Connexion')}
          propsFun={RoutLOGIN}
          ButtonStyle={'blue'}
        />
        <View style={{marginTop: 8}} />
        <Button
          ButtonText={t('Inscription')}
          propsFun={RoutSIGNUP}
          ButtonStyle={'red'}
        />
        <Text style={styles.LastText}>
          {t('En vous connectant, vous acceptez nos conditions')}
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default LoginSignUp;
