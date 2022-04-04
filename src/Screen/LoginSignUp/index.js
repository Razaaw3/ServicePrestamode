import React, {useState} from 'react';
import {View, SafeAreaView, Image, Text} from 'react-native';
import styles from './styles';
import BGPIC from '../../../Image/logo.png';
import Button from '../../Components/Button/index';
import Header from '../../Components/AuthHeader/index';
const LoginSignUp = props => {
  const RoutLOGIN = () => {
    props.navigation.navigate('Login');
  };
  const RoutSIGNUP = () => {
    props.navigation.navigate('SignUp');
  };
  const [Images, setImages] = useState(BGPIC);
  const [ButtonText, setButtonText] = useState('NEXT');
  return (
    <SafeAreaView style={styles.MainContainer}>
      <View style={styles.container}>
        <Image source={Images} style={styles.ImagesStyle} />
        <Text style={styles.WellcomeText}>Bienvenue</Text>
        <Button
          ButtonText={'Connexion'}
          propsFun={RoutLOGIN}
          ButtonStyle={'blue'}
        />
        <View style={{marginTop: 8}} />
        <Button
          ButtonText={'Inscription'}
          propsFun={RoutSIGNUP}
          ButtonStyle={'red'}
        />
        <Text style={styles.LastText}>
          En vous connectant, vous acceptez nos conditions.
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default LoginSignUp;
