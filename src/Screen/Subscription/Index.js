import React, { useState , useEffect} from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import styles from './styles';
import * as CommonStyle from '../../helper/CommonStyle';
import Button from '../../Components/Button/index';
import BGPIC from '../../../Image/logo.png';
import CB from '../../../Image/CB.png'
import Calender from '../../../Image/calendar.png'
import Crypto from '../../../Image/crypto.png'
import { useTranslation } from 'react-i18next';
const Index = (Routprops) => {
    const {t,i18n}=useTranslation()
    const CHECK = () => {
        Routprops.navigation.navigate('DrawerBarber')
    }
    return ( 
        <SafeAreaView style={styles.MainContainer}>
             <KeyboardAvoidingView
                keyboardVerticalOffset={80}
                style={{flex: 1}}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
            <ScrollView>
                <View style={styles.container}>
                <Image source={BGPIC} style={styles.ImagesStyle} />
                </View>
                <View style={{width:252,height:110,alignSelf:'center',paddingHorizontal:15,paddingVertical:5,marginVertical:15}}>
                    <Text style={{textAlign:'center',fontFamily:CommonStyle.Bold,fontSize:24,color:CommonStyle.BlueButton}}>{t("Dernière étape avant de proposer vos services")}</Text>
                </View>
                <View style={{width:243,height:53,alignSelf:'center',marginBottom:30}}>
                    <Text style={{textAlign:'center',fontFamily:CommonStyle.Regular,fontSize:14,color:CommonStyle.BlueButton}}>{t("Accédez à notre réseau de clients sans commission en souscrivant à notre")}</Text>
                    <Text style={{textAlign:'center',fontFamily:CommonStyle.Bold,fontSize:16,color:CommonStyle.BlueButton}}>{t("abonnement mensuel de")} 100€</Text>
                </View>
                <View style={styles.whiteContainer}>
                    <Text style={{textAlign:'center',color:'#1C1939',marginVertical:10}}>{t("Coordonnées de paiement")}</Text>
                    <View style={styles.borderContainer}>
                        <View style={{width:'10%',}}>
                        <Image source={CB} />
                        </View>
                        <TextInput placeholderTextColor='#CED2F5' placeholder={t('Numéro de carte bancaire')} style={{width:'90%',color:"#000"}}/>
                    </View>
                    <View style={styles.borderContainer}>
                        <View style={{width:'10%',}}>
                        <Image source={Calender}/>
                        </View>
                        <TextInput placeholderTextColor='#CED2F5' placeholder={t("Date d'expiration")} style={{width:'90%',color:"#000"}}/>
                    </View>
                    <View style={styles.borderContainer}>
                        <View style={{width:'10%',}}>
                        <Image source={Crypto}/>
                        </View>
                        <TextInput placeholderTextColor='#CED2F5' placeholder={t("Date d'expiration")} style={{width:'90%',color:"#000"}}/>
                        {/* <Text style={{color:'E4EBF9',}}>Numéro de carte bancaire</Text> */}
                    </View>
                    </View>
                    <View style={{marginVertical:15}}>
                        <Button propsFun={CHECK} ButtonText={t('Payer et commencer')} />
                    </View>
                    <View>
                        <Text style={{textAlign:'center'}}>{t("En cliquant sur valider vous acceptez nos conditions")}</Text>
                    </View>
                    
                {/* </View> */}
                
            </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
export default Index;