import PhoneInput from 'react-native-phone-number-input';
import React, {useState, useEffect,useRef} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator
} from 'react-native';
import styles from './styles';
import * as CommonStyle from '../../helper/CommonStyle';
import Bars from '../../../Image/bars.png';
import Button from '../../Components/Button/index';
import {useTranslation} from 'react-i18next';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const Index = Routprops => {
  const phoneInput = useRef(null);
  const [Loader, setLoader] = useState(true)
  const [ref, setRef] = useState('')
  const [age, setAge] = useState("")
const [Name, setName] = useState("")
const [Email, setEmail] = useState("")
const [payment, setPayment] = useState("")
const [Address, setAddress] = useState("")
const [phoneNumber, setPhoneNumber] = useState("")
const [shopName, setShopName] = useState("")
const [data, setData] = useState({})

  useEffect(() => {
    // const uid = auth().currentUser.uid;
    
    // database()
    // .ref(`user/${uid}`)
    // .once('value')
    // .then(snapshot=>{
    //   console.log("Snapshot data is : ",snapshot)  
    //    data = snapshot.val();
    //   console.log("Data is : ",data)
    //   setName(data.Name)
    //   console.log("NameName",Name)
    //   setEmail(data.Email)
    //   setAge(data.Age)
    //   setPayment(data.Payment)
    //   setPhoneNumber(data.PhoneNumber)
    //   // console.log("NameName",Email)
    //   setAddress(data.Address)
    //   setShopName(data.ShopName)
    //   setLoader(false)
      
      
    // })
    // // if(Name!=="")
    // //     setLoader(false)
    firestore()
    .collection('ServicePrestamodeUser')
    .where('uid', '==', auth().currentUser.uid)
    .onSnapshot(documentSnapshot => {
      setRef(documentSnapshot.docs[0]._ref._documentPath._parts[1]);
    });
    firestore().collection('ServicePrestamodeUser').where('uid','==',auth().currentUser.uid).get().then((res)=>{
      res.forEach((ls)=>{
        setName(ls.data().Name)
        setEmail(ls.data().Email)
        setAge(ls.data().Age)
        setAddress(ls.data().Address)
        setShopName(ls.data().ShopName)
        setPhoneNumber(ls.data().Phone)
      })
    }).then(()=>{
      setLoader(false)
    })
    
  }, [])
  
  
  const {t, i18n} = useTranslation();

  const CHECK = () => {
    firestore().collection('ServicePrestamodeUser').doc(ref).update({
      Name:Name,
      Email:Email,
      Address:Address,
      Age:age,
      PhoneNumber:phoneNumber,
      Payment:payment,
      ShopName:shopName
    }).then(()=>{
      Routprops.navigation.replace('MyTabs');
    })
    // const uid = auth().currentUser.uid;
    // database()
    // .ref(`user/${uid}`)
    // .update({
          // Name:Name,
          // Email:Email,
          // Address:Address,
          // Age:age,
          // PhoneNumber:phoneNumber,
          // Payment:payment,
          // ShopName:shopName
    // })
    // .once('value')
    // .then(snapshot=>{
    //   // console.log("Snapshot data is : ",snapshot)  
    //   let data = snapshot.val();
    //   console.log("Data is : ",data)
      // setName(data.Name)
      // setEmail(data.Email)
      // setAddress(data.Address)
      // setPassword(data.Password)
      
    // })
    // if(Name!=="")
    //   setLoader(false)
    
    // Routprops.navigation.replace('MyTabs');
  };

  return (
    <SafeAreaView style={styles.MainContainer}>
      {Loader===true?
        <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator/>
        </View>
        :
    <>
      <KeyboardAvoidingView
        keyboardVerticalOffset={80}
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <View style={styles.HeaderContainer}>
            <TouchableOpacity
              onPress={() => Routprops.navigation.goBack(null)}>
              <View
                style={{height: 20, width: 20, marginBottom: 20, marginTop: 6}}>
                <Image
                  source={Bars}
                  resizeMode="contain"
                  style={{width: '100%', height: '100%'}}
                />
              </View>
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  color: CommonStyle.BlueButton,
                  fontSize: 24,
                  fontFamily: CommonStyle.Bold,
                }}>
                {t('Informations personnelles')}
              </Text>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputFields}>
              <TextInput
                placeholder={t('Nom')}
                placeholderTextColor="rgba(28,28,28,0.2)"
                style={{
                  fontFamily: CommonStyle.Regular,
                  fontSize: 16,
                  width: '85%',
                  alignSelf: 'center',
                  color: CommonStyle.dark
                }}
                onChangeText={(name)=>setName(name)}
                value={Name}
              />
            </View>
            <View style={styles.inputFields}>
              <TextInput
                placeholder="Age"
                placeholderTextColor="rgba(28,28,28,0.2)"
                onChangeText={(age)=>setAge(age)}
                value={age}
                style={{
                  fontFamily: CommonStyle.Regular,
                  fontSize: 16,
                  width: '85%',
                  alignSelf: 'center',
                  color: CommonStyle.dark
                }}
              />
            </View>
            <View style={styles.inputFields}>
              <TextInput
                placeholder="Adresse"
                placeholderTextColor="rgba(28,28,28,0.2)"
                onChangeText={(address)=>setAddress(address)}
                style={{
                  fontFamily: CommonStyle.Regular,
                  fontSize: 16,
                  width: '85%',
                  alignSelf: 'center',
                  color: CommonStyle.dark
                }}
                value={Address}
              />
            </View>
            <View style={styles.inputFields}>
              <TextInput
                placeholder="Email"
                onChangeText={(email)=>setEmail(email)}
                placeholderTextColor="rgba(28,28,28,0.2)"
                style={{
                  fontFamily: CommonStyle.Regular,
                  fontSize: 16,
                  width: '85%',
                  alignSelf: 'center',
                  color: CommonStyle.dark
                }}
                value={Email}
              />
            </View>
           <View style={styles.InputContainer}>
           <PhoneInput
              ref={phoneInput}
              defaultValue={phoneNumber}
              defaultCode="FR"
              layout="first"
              containerStyle={styles.phoneContainer}
              textContainerStyle={styles.textInput}
              codeTextStyle={styles.codeTextStyle}
              countryPickerButtonStyle={styles.countryPickerButtonStyle}
              placeholder={t('Telephone')}
              textInputProps={{placeholderTextColor: '#BCB8B1'}}
              textInputStyle={styles.textInputStyle}
              onChangeFormattedText={text => {
                setPhoneNumber(text);
              }}
            />
              </View>
            <View style={styles.inputFields}>
             <TextInput
              placeholder={t('Nom boutique')}
              placeholderTextColor="rgba(28,28,28,0.2)"
              style={styles.inputFieldsText}
              value={shopName}
              onChangeText={(shopName)=>setShopName(shopName)}
            />
          </View>
          <View style={{marginVertical: 15}}>
        <Button ButtonText={t('Valider')} propsFun={CHECK} />
      </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      
      </>
}
    </SafeAreaView>
  );
};
export default Index;
