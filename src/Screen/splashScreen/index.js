import React, { Component,useEffect } from 'react';
import {
    View,
    Image,
    SafeAreaView,
    ActivityIndicator
} from 'react-native';
import styles from './styles';
import Logo from '../../../Image/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SplashScreen = (props) => {
    useEffect(() => {
        async function fetchValue(){
                try {
                const lan = await AsyncStorage.getItem('lan')
                console.log("Your id in local storage is : ",lan)
                if(lan===null){
                    await AsyncStorage.setItem('lan','fr')
                    // console.log('asddd')
                }
            } catch (error) {
                console.log("Error is ",error)
            }
            setTimeout(function(){
                props.navigation.navigate('Translation');
            }, 2000);
        }
        fetchValue();
    });
    
    return ( 
        <SafeAreaView style={styles.MainContainer}>
            <View>
                <Image source={Logo} style={styles.LogoStyle}/>
            </View>
        </SafeAreaView>
    );
}
export default SplashScreen;