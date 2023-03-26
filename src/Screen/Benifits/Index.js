import React, { useState , useEffect} from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions,
    FlatList
} from 'react-native';
import styles from './styles';
import * as CommonStyle from '../../helper/CommonStyle';
import Bars from '../../../Image/bars.png'
import { useTranslation } from 'react-i18next';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
const Index = (Routprops) => {
  // const services = Routprops.route.params.selectedServices;
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [servicesArray, setservicesArray] = useState([1,2])
  const FlatListView = ({item, index}) => {
    return (
      <>
            <View style={styles.inputFields}>
                    <Text style={{fontFamily:CommonStyle.Regular,fontSize:16,width:'80%',alignSelf:'center',color:CommonStyle.Date}}>{item}</Text>
                </View>
                <View style={styles.inputField}>
                    <TextInput numberOfLines={7} onChangeText={(data)=>setDescription(data)} multiline={true} placeholder={t('Description')} placeholderTextColor='rgba(28,28,28,0.2)' style={{fontFamily:CommonStyle.Regular,fontSize:16,width:'85%',alignSelf:'center'}}/>
                </View>
                <View style={styles.inputFields}>
                    <TextInput placeholder='0,00€' onChangeText={(data)=>{setPrice(data)}} keyboardType='number-pad' placeholderTextColor={CommonStyle.Date} style={{fontFamily:CommonStyle.Regular,fontSize:16,width:'85%',alignSelf:'center'}}/>
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
        // onPress={CHECK.bind(this,item)}
        >
        <Text style={styles.Buttontext}>{t("Valider")}</Text>
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
        // onPress={CHECK.bind(this,item)}
        >
        <Text style={styles.Buttontext}>{t("Supprimer")}</Text>
      </TouchableOpacity>
    </View>
    </View>
      </>
    );
  };
  
    const windowWidth = Dimensions.get('window').width;
  const {t,i18n}=useTranslation();
    // const CHECK = (item) => {
    //     // Routprops.navigation.navigate('DrawerBarber')
    //     let obj = {"service_name":item,"Description":description,"Price":price};
    //     if(description==""){
    //       alert("Please enter description");
    //     }
    //     else if(price==="")
    //       alert("Please enter the price first")
    //     else{
    //       const uid = auth().currentUser.uid;
    //       servicesArray.push(obj);
    //       if(servicesArray.length===services.length){
    //       database()
    //     .ref(`user/${uid}`)
    //    .update({
    //       detail:servicesArray,
    //    })
    //    Routprops.navigation.navigate('DrawerBarber')
    //   }
    //     }
    //     console.log(servicesArray)
    // }
    return ( 
        <SafeAreaView style={styles.MainContainer}>
            <ScrollView>
            <View style={styles.HeaderContainer}>
            <TouchableOpacity onPress={()=>Routprops.navigation.goBack()}>
            <View style={{height:20,width:20, marginBottom:20,marginTop:6}}>
                <Image source={Bars} resizeMode='contain' style={{width:'100%',height:'100%'} }/>
            </View>
            </TouchableOpacity>
            <View>
                <Text style={{color:CommonStyle.BlueButton, fontSize:24, fontFamily:CommonStyle.Bold}}>{t("Modifier prestation")}</Text>
            </View>
        </View>
        <View style={styles.inputContainer}>
        <FlatList
            // key={'_'}
            data={servicesArray}
            renderItem={FlatListView}
          />
        </View>
       
                    
            </ScrollView>
           
        </SafeAreaView>
    );
}
export default Index;