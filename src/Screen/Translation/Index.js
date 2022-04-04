import React, { useState , useEffect} from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    Text,
    Image,
    TextInput,
    StyleSheet
} from 'react-native';
import styles from '../varficationCode/styles';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
    
  } from 'react-native-confirmation-code-field';
  import Circle from 'react-native-vector-icons/dist/FontAwesome';
import Button from '../../Components/Button/index';
import Header from '../../Components/AuthHeader/index';
import Icon from 'react-native-vector-icons/AntDesign';
import IconDown from 'react-native-vector-icons/Entypo';
import {useTranslation} from 'react-i18next';
import * as i18n from 'i18next'
import AsyncStorage from '@react-native-async-storage/async-storage';


import BGPIC from '../../../Image/logo.png';
const CELL_COUNT = 4;
const Index = (Routprops) => {
    const {t,i18n} = useTranslation(); 
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [currentLanguage,setCurrentLanguage] =useState('fr');
  const [time,settime] = useState('');
//   const [ChangeLanguage , setChangeLanguage] = useState(false);

    // const CHECK = () => {
    //     Routprops.navigation.navigate('VerificationCode')
    // }
    // return <Text>Example {time}</Text>
    const changeLanguage =async(value) => {
        setCurrentLanguage(value)
        try {
                await AsyncStorage.setItem('lan',value)
            } 
            catch (e) 
            {
                console.log("Error is   :",e)
            }
        // console.log(language)
        i18n
          .changeLanguage(value)
          .then(() =>   setCurrentLanguage(value))
          .catch(err => console.log(err));
      }
      const ChangeLanguageFun = () => {
        // setChangeLanguage(!ChangeLanguage)
        Routprops.navigation.navigate('Screen1')
    }
    return ( 
        <SafeAreaView style={styles.MainContainer}>
            <ScrollView>
                <View style={styles.container}>
                <Image source={BGPIC} style={styles.ImagesStyle} />
                    <View style={{marginTop:25}}/>
                    <View>
                        <Text style={styles.Content}>{t('Langues')}</Text>
                    </View>
                    <Text style={styles.ContentDes}>{t('veuillez sélectionner votre langue')}</Text>
                    <View style={{marginTop:10}}>
                            <View style={styles.ChangesLanguageCon}>
                                <Circle name={currentLanguage==='fr'?"circle":"circle-o"} onPress={() => changeLanguage('fr')} size={20} color='#EF233C' style={styles.IconChangesLanguageCon}/>
                                <Text style={styles.ChangesLanguageText}>French</Text>
                            </View>
                            <View style={styles.ChangesLanguageCon}>
                                <Circle name={currentLanguage==='en'?"circle":"circle-o"} onPress={() => changeLanguage('en')} size={20} color='#EF233C' style={styles.IconChangesLanguageCon}/>
                                <Text style={styles.ChangesLanguageText}>English</Text>
                            </View>
                            <View style={styles.ChangesLanguageCon2}>
                            </View>
                        </View>
                   
                </View>
            </ScrollView>
            <Button
                        ButtonText={'Valider'} 
                        propsFun={ChangeLanguageFun}
                    /> 
        </SafeAreaView>
    );
}
export default Index;
