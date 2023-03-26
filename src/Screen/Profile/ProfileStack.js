import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Avatar } from 'react-native-paper';
import * as CommonStyle from '../../helper/CommonStyle'
import Button from '../../Components/Button/index';
import { useTranslation } from 'react-i18next';
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { useState, useLayoutEffect } from 'react';

const Profilestack = ({navigation}) => {
    const {t, i18n} = useTranslation()
    const [name, setName] = useState('')
    const [filePath, setFilePath] = useState('')
    useLayoutEffect(() => {
      // ProAppProfilePictures
      firestore().collection('ServicePrestamodeUser').where('uid','==',auth().currentUser.uid).get().then((res)=>{
        res.forEach((ls)=>{
          setFilePath(ls.data().PhotoUrl)
          setName(ls.data().Name)
        })
      })
    }, [])
  return (
    <SafeAreaView style={{backgroundColor:CommonStyle.pureWhite,height:'100%'}}>
      <ScrollView>
        <View style={styles.ImageContainer}>
          <Avatar.Image
            size={138}
            source={{uri:filePath}}
            style={styles.Image}
          />
        </View>
        <Text
          style={{
            color: CommonStyle.RedButton,
            fontSize: 24,
            textAlign: 'center',
            marginVertical: 25,
            fontWeight: 'bold',
          }}>
          {name}
        </Text>
        <Button
                ButtonText={t('Informations personnelles')}
                propsFun={()=>navigation.navigate('Profile')}

              />
              <Button
                ButtonText={t('Données de paiement')}
                propsFun={()=>navigation.navigate('Subscription')}
              />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profilestack;

const styles = StyleSheet.create({
    ImageContainer:{
        backgroundColor:CommonStyle.RedButton,
        width:150,
        height:150,
        borderRadius:350,
        alignItems: "center",
        justifyContent: "center",
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:80,
      },
});
