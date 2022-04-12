import React, { useState , useEffect} from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import styles from './styles';
import * as CommonStyle from '../../helper/CommonStyle';
import Bars from '../../../Image/bars.png'
import { useTranslation } from 'react-i18next';
const Index = (Routprops) => {
    const windowWidth = Dimensions.get('window').width;
  const {t,i18n}=useTranslation();
    const CHECK = () => {
        Routprops.navigation.navigate('Jobs')
    }
    return ( 
        <SafeAreaView style={styles.MainContainer}>
            <ScrollView>
            <View style={styles.HeaderContainer}>
            <TouchableOpacity onPress={()=>Routprops.navigation.push('DrawerBarber')}>
            <View style={{height:20,width:20, marginBottom:20,marginTop:6}}>
                <Image source={Bars} resizeMode='contain' style={{width:'100%',height:'100%'} }/>
            </View>
            </TouchableOpacity>
            <View>
                <Text style={{color:CommonStyle.BlueColor, fontSize:24, fontFamily:CommonStyle.Bold}}>{t("Prestations")}</Text>
            </View>
        </View>
        <View style={{marginVertical:22}}>
            <Text style={{color:CommonStyle.Date, fontSize:14, fontFamily:CommonStyle.Regular,textAlign:'center'}}>{t("Modifier métier")}</Text>
        </View>
        <View style={styles.inputContainer}>
                <View style={styles.inputFields}>
                    <Text style={{fontFamily:CommonStyle.Regular,fontSize:16,width:'80%',alignSelf:'center',color:CommonStyle.Date}}>{t("Extension de cils")}</Text>
                </View>
                <View style={styles.inputField}>
                    <TextInput numberOfLines={7} multiline={true} placeholder={t('Description')} placeholderTextColor='rgba(28,28,28,0.2)' style={{fontFamily:CommonStyle.Regular,fontSize:16,width:'85%',alignSelf:'center'}}/>
                </View>
                <View style={styles.inputFields}>
                    <TextInput placeholder='0,00€' keyboardType='number-pad' placeholderTextColor={CommonStyle.Date} style={{fontFamily:CommonStyle.Regular,fontSize:16,width:'85%',alignSelf:'center'}}/>
                </View>
        </View>
        <View style={{marginTop:14}}>
        <View style={styles.ButtonContainer}>
      <TouchableOpacity
        style={{
          width: windowWidth * 0.9,
          alignSelf: 'center',
          height: 43,
          borderRadius: 8,
          backgroundColor:CommonStyle.BlueButton,
          justifyContent: 'center',
        }}
        >
        <Text style={styles.Buttontext}>{t("Ajouter une image")}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.ButtonContainer}>
      <TouchableOpacity
        style={{
          width: windowWidth * 0.9,
          alignSelf: 'center',
          height: 43,
          borderRadius: 8,
          backgroundColor:CommonStyle.RedButton,
          justifyContent: 'center',
        }}
        onPress={CHECK}
        >
        <Text style={styles.Buttontext}>{t("Valider")}</Text>
      </TouchableOpacity>
    </View>
    </View>
    <View style={styles.inputContainer}>
                <View style={styles.inputFields}>
                    <Text style={{fontFamily:CommonStyle.Regular,fontSize:16,width:'80%',alignSelf:'center',color:CommonStyle.Date}}>{t("Réhaussement de cils")}</Text>
                </View>
                <View style={styles.inputField}>
                    <TextInput numberOfLines={7} multiline={true} placeholder={t('Description')} placeholderTextColor='rgba(28,28,28,0.2)' style={{fontFamily:CommonStyle.Regular,fontSize:16,width:'85%',alignSelf:'center'}}/>
                </View>
    </View>
       
                    
            </ScrollView>
           
        </SafeAreaView>
    );
}
export default Index;