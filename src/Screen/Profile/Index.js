// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   SafeAreaView,
//   ScrollView,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   ActivityIndicator
// } from 'react-native';
// import styles from './styles';
// import * as CommonStyle from '../../helper/CommonStyle';
// import Bars from '../../../Image/bars.png';
// import Button from '../../Components/Button/index';
// import {useTranslation} from 'react-i18next';
// import auth from '@react-native-firebase/app'
// const Index = Routprops => {
//   const [Loader, setLoader] = useState(true)
//   const [age, setAge] = useState("")
// const [Name, setName] = useState("")
// const [Email, setEmail] = useState("")
// const [payment, setPayment] = useState("")
// const [Address, setAddress] = useState("")
// const [phoneNumber, setPhoneNumber] = useState("")
// let data;
//   useEffect(() => {
//     const uid = auth().currentUser.uid;
    
//     database()
//     .ref(`user/${uid}`)
//     .once('value')
//     .then(snapshot=>{
//       // console.log("Snapshot data is : ",snapshot)  
//        data = snapshot.val();
//       console.log("Data is : ",data)
//       setName(data.Name)
//       console.log("NameName",Name)
//       setEmail(data.Email)
//       setAge(data.Age)
//       setPayment(data.Payment)
//       setPhoneNumber(data.PhoneNumber)
//       // console.log("NameName",Email)
//       setAddress(data.Address)
//       setLoader(false)
      
      
//     })
//     // if(Name!=="")
//     //     setLoader(false)
    
    
//   }, [data])
  
  
//   const {t, i18n} = useTranslation();

//   const CHECK = () => {
//     const uid = auth().currentUser.uid;
//     database()
//     .ref(`user/${uid}`)
//     .update({
//           Name:Name,
//           Email:Email,
//           Address:Address,
//           Age:age,
//           PhoneNumber:phoneNumber,
//           Payment:payment
//     })
//     // .once('value')
//     // .then(snapshot=>{
//     //   // console.log("Snapshot data is : ",snapshot)  
//     //   let data = snapshot.val();
//     //   console.log("Data is : ",data)
//       // setName(data.Name)
//       // setEmail(data.Email)
//       // setAddress(data.Address)
//       // setPassword(data.Password)
      
//     // })
//     if(Name!=="")
//       setLoader(false)
    
//     Routprops.navigation.replace('DrawerBarber');
//   };

//   return (
//     <SafeAreaView style={styles.MainContainer}>
//      {Loader===true?
//         <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
//         <ActivityIndicator/>
//         </View>
//         :
//         <>
//       <ScrollView>
//         <View style={styles.HeaderContainer}>
//           <TouchableOpacity
//             onPress={() => Routprops.navigation.navigate('DrawerBarber')}>
//             <View
//               style={{height: 20, width: 20, marginBottom: 20, marginTop: 6}}>
//               <Image
//                 source={Bars}
//                 resizeMode="contain"
//                 style={{width: '100%', height: '100%'}}
//               />
//             </View>
//           </TouchableOpacity>
//           <View>
//             <Text
//               style={{
//                 color: CommonStyle.BlueColor,
//                 fontSize: 24,
//                 fontFamily: CommonStyle.Bold,
//               }}>
//               {t('Profil')}
//             </Text>
//           </View>
//         </View>
//         <View style={styles.inputContainer}>
//           <View style={styles.inputFields}>
//             <TextInput
//               placeholder={t('Nom')}
//               placeholderTextColor="rgba(28,28,28,0.2)"
//               style={styles.inputFieldsText}
//             />
//           </View>
//           <View style={styles.inputFields}>
//             <TextInput
//               placeholder={t('Prénom')}
//               placeholderTextColor="rgba(28,28,28,0.2)"
//               style={styles.inputFieldsText}
//             />
//           </View>
//           <View style={styles.inputFields}>
//             <TextInput
//               placeholder={t('Age')}
//               placeholderTextColor="rgba(28,28,28,0.2)"
//               style={styles.inputFieldsText}
//             />
//           </View>
//           <View style={styles.inputFields}>
//             <TextInput
//               placeholder={t('Adresse')}
//               placeholderTextColor="rgba(28,28,28,0.2)"
//               style={styles.inputFieldsText}
//             />
//           </View>
//           <View style={styles.inputFields}>
//             <TextInput
//               placeholder={t('Email')}
//               placeholderTextColor="rgba(28,28,28,0.2)"
//               style={styles.inputFieldsText}
//             />
//           </View>
//           <View style={styles.inputFields}>
//             <TextInput
//               placeholder={t('Mot de passe')}
//               placeholderTextColor="rgba(28,28,28,0.2)"
//               style={styles.inputFieldsText}
//             />
//           </View>
//           <View style={styles.inputField}>
//             <Text
//               style={{
//                 fontFamily: CommonStyle.Regular,
//                 fontSize: 16,
//                 width: '15%',
//                 color: '#2A2AC0',
//                 textAlign: 'center',
//               }}>
//               +33
//             </Text>
//             <TextInput
//               placeholder="6 55 23 27 43"
//               placeholderTextColor="rgba(28,28,28,0.2)"
//               style={styles.inputFieldsText}
//             />
//           </View>
//           <View style={styles.inputFields}>
//             <TextInput
//               placeholder={t('Pseudo - Nom boutique')}
//               placeholderTextColor="rgba(28,28,28,0.2)"
//               style={styles.inputFieldsText}
//             />
//           </View>
//           <View style={styles.inputFields}>
//             <TextInput
//               placeholder={t('Moyen de paiement')}
//               placeholderTextColor="rgba(28,28,28,0.2)"
//               style={styles.inputFieldsText}
//             />
//           </View>
//         </View>
//       </ScrollView>
//       <View style={{marginVertical: 15}}>
//         <Button ButtonStyle="red" ButtonText={t('Valider')} propsFun={CHECK} />
//       </View>
//       </>
// }
//     </SafeAreaView>
//   );
// };
// export default Index;
import React, {useState, useEffect} from 'react';
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
import database from '@react-native-firebase/database';
const Index = Routprops => {
  const [Loader, setLoader] = useState(true)
  const [age, setAge] = useState("")
const [Name, setName] = useState("")
const [Email, setEmail] = useState("")
const [payment, setPayment] = useState("")
const [Address, setAddress] = useState("")
const [phoneNumber, setPhoneNumber] = useState("")
const [shopName, setShopName] = useState("")
let data;
  useEffect(() => {
    const uid = auth().currentUser.uid;
    
    database()
    .ref(`user/${uid}`)
    .once('value')
    .then(snapshot=>{
      console.log("Snapshot data is : ",snapshot)  
       data = snapshot.val();
      console.log("Data is : ",data)
      setName(data.Name)
      console.log("NameName",Name)
      setEmail(data.Email)
      setAge(data.Age)
      setPayment(data.Payment)
      setPhoneNumber(data.PhoneNumber)
      // console.log("NameName",Email)
      setAddress(data.Address)
      setShopName(data.ShopName)
      setLoader(false)
      
      
    })
    // if(Name!=="")
    //     setLoader(false)
    
    
  }, [data])
  
  
  const {t, i18n} = useTranslation();

  const CHECK = () => {
    const uid = auth().currentUser.uid;
    database()
    .ref(`user/${uid}`)
    .update({
          Name:Name,
          Email:Email,
          Address:Address,
          Age:age,
          PhoneNumber:phoneNumber,
          Payment:payment,
          ShopName:shopName
    })
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
    if(Name!=="")
      setLoader(false)
    
    Routprops.navigation.replace('MyTabs');
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
                  color: CommonStyle.BlueColor,
                  fontSize: 24,
                  fontFamily: CommonStyle.Bold,
                }}>
                {t('Profil')}
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
            {/* <View style={styles.inputFields}>
              <TextInput
                placeholder={t('Mot de passe')}
                placeholderTextColor="rgba(28,28,28,0.2)"
                style={{
                  fontFamily: CommonStyle.Regular,
                  fontSize: 16,
                  width: '85%',
                  alignSelf: 'center',
                }}
                onChangeText={(name)=>setName(name)}
                value={Password}
              />
            </View> */}
            <View style={styles.inputField}>
              <Text
                style={{
                  fontFamily: CommonStyle.Regular,
                  fontSize: 16,
                  width: '15%',
                  color: '#2A2AC0',
                  textAlign: 'center',
                }}>
                +33
              </Text>
              <TextInput
                placeholder="6 55 23 27 43"
                onChangeText={(phn)=>setPhoneNumber(phn)}
                placeholderTextColor="rgba(28,28,28,0.2)"
                style={{
                  fontFamily: CommonStyle.Regular,
                  fontSize: 16,
                  width: '85%',
                  alignSelf: 'center',
                  color: CommonStyle.dark
                }}
                value={phoneNumber}
              />
            </View>
            <View style={styles.inputFields}>
             <TextInput
              placeholder={t('Pseudo - Nom boutique')}
              placeholderTextColor="rgba(28,28,28,0.2)"
              style={styles.inputFieldsText}
              value={shopName}
              onChangeText={(shopName)=>setShopName(shopName)}
            />
          </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={{marginVertical: 15}}>
        <Button ButtonStyle="red" ButtonText={t('Valider')} propsFun={CHECK} />
      </View>
      </>
}
    </SafeAreaView>
  );
};
export default Index;
