import React, { Component,useEffect } from 'react';
import {
    View,
    Image,
    SafeAreaView,
    ActivityIndicator
} from 'react-native';
import styles from './styles';
import Logo from '../../../Image/logo.png';
const SplashScreen = (props) => {
    useEffect(() => {
        setTimeout(function(){
            props.navigation.navigate('Translation');
        }, 2000);
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