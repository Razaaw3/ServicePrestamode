import React, { Component,useEffect } from 'react';
import {
    View,
    Image,
    SafeAreaView,
    ActivityIndicator
} from 'react-native';
import styles from './styles';
import Logo from '../../../Image/logo.png';
import '../../config/i18n/index'
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SplashScreen = (props) => {
    const {t,i18n} = useTranslation(); 
    useEffect(() => {
        async function fetchValue(){
                try {
                const lan = await AsyncStorage.getItem('lan')
                console.log("Your id in local storage is : ",lan)
                if(lan===null){
                    i18n
                    .changeLanguage('fr')
                }
                else{
                    i18n
                    .changeLanguage(lan)
                }
            } catch (error) {
                console.log("Error is ",error)
            }
            setTimeout(function(){
                props.navigation.navigate('Translation');
            }, 2000);
        }
        fetchValue();
    },[]);
    
    return ( 
        <SafeAreaView style={styles.MainContainer}>
            <View>
                <Image source={Logo} style={styles.LogoStyle}/>
            </View>
        </SafeAreaView>
    );
}
export default SplashScreen;