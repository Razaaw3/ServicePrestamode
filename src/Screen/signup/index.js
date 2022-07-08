// import React, {useState, useEffect, useRef} from 'react';
// import {
//   View,
//   SafeAreaView,
//   ScrollView,
//   Platform,
//   Text,
//   Image,
//   TextInput,
//   KeyboardAvoidingView,
//   TouchableOpacity,
//   PermissionsAndroid,
//   Modal,
//   ActivityIndicator
// } from 'react-native';
// import DropdownAlert from 'react-native-dropdownalert';
// import styles from './styles';
// import {
//   launchCamera,
//   launchImageLibrary
// } from 'react-native-image-picker';
// import Button from '../../Components/Button/index';
// import * as CommonStyle from '../../helper/CommonStyle';
// import {useTranslation} from 'react-i18next';
// import * as URL from '../../config/BaseURL/Index'
// import auth from '@react-native-firebase/auth';
// import database from '@react-native-firebase/database';
// var validator = require('validator');
// import BGPIC from '../../../Image/logo.png';
// import camera from '../../../Image/camera.jpg'
// import gallery from '../../../Image/gallery.jpg'
// import storage from '@react-native-firebase/storage';
// const VarificationCode = Routprops => {
//   const {t, i18n} = useTranslation();
//   const [name, setName] = useState('');
//   const [error, setError] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [address, setAddress] = useState('');
//   const [email, setEmail] = useState('');
//   const [filePath, setFilePath] = useState('');
//   const [modalPhot, setModalPhoto] = useState(false);
//   const [Photo,setPhoto] = useState(false);
//   const [UserID, setUserid] = useState('')
//   const [modalVisible, setModalVisible] = useState(false)
//   const [Password, setPassword] = useState('');
//   const [Loader, setLoader] = useState(true)
//   const [age, setAge] = useState('')
//   const [payment, setPayment] = useState('')
//   const [PhoneNumber, setPhoneNumber] = useState('')
//   const [shopName, setShopName] = useState('')
//   let dropDownAlertRef = useRef(null);
//   useEffect(() => {
    
//   }, [])
  
//   const requestCameraPermission = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.CAMERA,
//           {
//             title: 'Camera Permission',
//             message: 'App needs camera permission',
//           },
//         );
//         // If CAMERA Permission is granted
//         return granted === PermissionsAndroid.RESULTS.GRANTED;
//       } catch (err) {
//         console.warn(err);
//         return false;
//       }
//     } else return true;
//   };

//   const requestExternalWritePermission = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//           {
//             title: 'External Storage Write Permission',
//             message: 'App needs write permission',
//           },
//         );
//         // If WRITE_EXTERNAL_STORAGE Permission is granted
//         return granted === PermissionsAndroid.RESULTS.GRANTED;
//       } catch (err) {
//         console.warn(err);
//         alert('Write permission err', err);
//       }
//       return false;
//     } else return true;
//   };

//   const captureImage = async (type) => {
//     setFilePath('')
//     let options = {
//       mediaType: type,
//       maxWidth: 300,
//       maxHeight: 550,
//       quality: 1,
//       videoQuality: 'low',
//       durationLimit: 30, //Video max duration in seconds
//       saveToPhotos: true,
//     };
//     let isCameraPermitted = await requestCameraPermission();
//     let isStoragePermitted = await requestExternalWritePermission();
//     if (isCameraPermitted && isStoragePermitted) {
//       launchCamera(options, (response) => {
//         console.log('Response = ', response);

//         if (response.didCancel) {
//           alert('User cancelled camera picker');
//           return;
//         } else if (response.errorCode == 'camera_unavailable') {
//           alert('Camera not available on device');
//           return;
//         } else if (response.errorCode == 'permission') {
//           alert('Permission not satisfied');
//           return;
//         } else if (response.errorCode == 'others') {
//           alert(response.errorMessage);
//           return;
//         }
//         console.log('base64 -> ', response.base64);
//         console.log('uri -> ', response.uri);
//         console.log('width -> ', response.width);
//         console.log('height -> ', response.height);
//         console.log('fileSize -> ', response.fileSize);
//         console.log('type -> ', response.type);
//         console.log('fileName -> ', response.fileName);
//         setFilePath(response);
//         console.log("responseresponse",response.assets.map(ls=>ls.uri))
//         const filePathUri = response.assets.map(ls=>ls.uri)
//         const PathURL = filePathUri.toString().replace(/^\s+|\s+$/g,''); 
        
//         setFilePath(PathURL);
//         setPhoto(true);
//         console.log("PhotoPhoto",PathURL)
        
//       });
//     }
//   };
//   const uploadImage = async () => {
//     alert(UserID)
//     try {
//     const task = storage()
// .ref(`ProAppProfilePictures/${UserID}`)
// .putFile(filePath);
// // set progress state
// task.on('state_changed', snapshot => {
// //   setTransferred(
// //     Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
// //   );
// });
// } catch (e) {
// console.error("Error is ",e);
// }
// setTimeout(function(){
// const imageRef = storage().ref(`ProfilePicture/`+ UserID);
// imageRef
// .getDownloadURL()
// .then((url) => {
// console.log('Single CoverPhoto URL',url)
// setFilePath(url)
// setLoader(false)
// console.log('Single CoverPhoto.id',UserID)

// // UpdateData(url)
// })
// }, 5000);
// setTimeout(() => {
//   Routprops.navigation.navigate("Login")
// }, 7000);
// }

//   const chooseFile = (type) => {
//     setFilePath('')
//     let options = {
//       mediaType: type,
//       maxWidth: 300,
//       maxHeight: 550,
//       quality: 1,
//     };
//     launchImageLibrary(options, (response) => {
//       console.log('response.assets = ', response);

//       if (response.didCancel) {
//         alert('User cancelled camera picker');
//         return;
//       } else if (response.errorCode == 'camera_unavailable') {
//         alert('Camera not available on device');
//         return;
//       } else if (response.errorCode == 'permission') {
//         alert('Permission not satisfied');
//         return;
//       } else if (response.errorCode == 'others') {
//         alert(response.errorMessage);
//         return;
//       }
//       console.log('base64 -> ', response.base64);
//       console.log('uri -> ', response.uri);
//       console.log('width -> ', response.width);
//       console.log('height -> ', response.assets.height);
//       console.log('fileSize -> ', response.fileSize);
//       console.log('type -> ', response.type);
//       console.log('fileName -> ', response.fileName);
//       setFilePath(response);
//       console.log("responseresponse",response.assets.map(ls=>ls.uri))
//       const filePathUri = response.assets.map(ls=>ls.uri)
//       const PathURL = filePathUri.toString().replace(/^\s+|\s+$/g,''); 
      
//       setFilePath(PathURL);
//       setPhoto(true);
//       console.log("PhotoPhoto",PathURL)
//     });
//   };
//   const CHECK = () => {
//     const ComEmail = validator.isEmpty(email);
//     const ValEmail = validator.isEmail(email);
//     const ComFullName = validator.isEmpty(name);
//     const ComPassword = validator.isEmpty(Password);
//     const Comdate = validator.isEmpty(address);
//     const ComselectedGender = validator.isEmpty(firstName);
   
//     if (ComFullName === true) {
//       setError('Name is Empty');
//     } else if (ComselectedGender === true) {
//       setError('FirstName is Empty');
//     } else if (ComEmail === true) {
//       setError('Email is Empty');
//     } else if (ValEmail === false) {
//       setError('Email is invalid');
//     } else if (Comdate === true) {
//       setError('Address is Empty');
//     } else if (ComPassword === true) {
//       setError('Password is Empty');
//     } else {
      
//      auth().createUserWithEmailAndPassword(email,Password)
//      .then((user) => {
//       dropDownAlertRef.current?.alertWithType(
//         'success',
//         'Success',
//         'Successfully Registered',
//       );
//       // setUserid(...auth().currentUser.uid);
//       const userid=auth().currentUser.uid;
//       setUserid(userid);
//       setTimeout(() => {
//         setModalVisible(!modalVisible)
//         setLoader(false)
//       console.log("USer id is +Ods", userid)
//       database().ref(`user/${userid}`).set({
//           UserID:userid,
//           Name:name,
//           Email:email,
//           Address:address,
//           FirstName:firstName,
//           Password:Password,
//           Age:age,
//           Payment:payment,
//           PhoneNumber:PhoneNumber,
//           ShopName:shopName
//           })
//       }, 3000);
      
//       if (user) {
//         auth()
//           .currentUser.updateProfile({
//             displayName: name
//           })
//           // .then(setModalVisible(modalVisible))
//           .catch((error) => {
//             dropDownAlertRef.current?.alertWithType(
//               'error',
//               'Error',
//               error,
//             );
//           });
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//       if (error.code === "auth/email-already-in-use") {
//         dropDownAlertRef.current?.alertWithType(
//           'error',
//           'Error',
//           "That email address is already in use!"
//         );
//       } else {
//         dropDownAlertRef.current?.alertWithType(
//           'error',
//           'Error',
//           error.message
//         );
//       }
//     });
//     }
//   };
//   return (
//     <SafeAreaView style={styles.MainContainer}>
//       <DropdownAlert ref={dropDownAlertRef} />
//       <KeyboardAvoidingView
//         keyboardVerticalOffset={80}
//         style={{flex: 1}}
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
//         <ScrollView>
//           <View style={styles.container}>
        
//           <Image source={BGPIC} style={styles.ImagesStyle} />
        
            
//             <View style={styles.InputContainer}>
//               <TextInput
//                 style={{marginLeft: 20,color:CommonStyle.dark}}
//                 placeholder={t('Nom')}
//                 placeholderTextColor="rgba(28,28,28,.4)"
//                 onChangeText={name => setName(name)}
//               />
//             </View>
//             <View style={styles.InputContainer}>
//               <TextInput
//                 style={{marginLeft: 20,color:CommonStyle.dark}}
//                 placeholder={t('Prénom')}
//                 placeholderTextColor="rgba(28,28,28,.4)"
//                 onChangeText={name => setFirstName(name)}
//               />
//             </View>
//             <View style={styles.InputContainer}>
//               <TextInput
//                 style={{marginLeft: 20,color:CommonStyle.dark}}
//                 placeholder="E-mail"
//                 placeholderTextColor="rgba(28,28,28,.4)"
//                 onChangeText={name => setEmail(name)}
//               />
//             </View>
//             <View style={styles.InputContainer}>
//               <TextInput
//                 style={{marginLeft: 20, color:CommonStyle.dark}}
//                 placeholder="Adresse"
//                 placeholderTextColor="rgba(28,28,28,.4)"
//                 onChangeText={name => setAddress(name)}
//               />
//             </View>
//             <View style={styles.InputContainer}>
//               <TextInput
//                 style={{marginLeft: 20,color:CommonStyle.dark}}
//                 placeholder={t('Mot de passe')}
//                 placeholderTextColor="rgba(28,28,28,.4)"
//                 onChangeText={name => setPassword(name)}
//               />
//             </View>
//             {/* <TouchableOpacity onPress={()=>setModalPhoto(!modalPhot)}>
//             <View style={[styles.InputContainer,{justifyContent:"center"}]}>
//               <Text style={{marginLeft: 20,color:"rgba(28,28,28,.4)"}}>{t('Photo de profil')}</Text>
//             </View>
//             </TouchableOpacity> */}
//             {/* <View style={[styles.InputContainer,{justifyContent:"center"}]}>
//               <Text></Text>
//             </View> */}

//             <Text
//               style={{
//                 alignSelf: 'center',
//                 color: 'red',
//                 fontFamily: CommonStyle.Regular,
//                 fontSize: 12,
//               }}>
//               {error}
//             </Text>
//             <View style={{marginTop: 30}} />
//             <Button
//               ButtonText={t('Valider')}
//               propsFun={CHECK}
//               ButtonStyle={'red'}
//             />
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//       <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalPhot}
//                 onRequestClose={() => {
//                     setModalPhoto(!modalPhot);
//                 }}
//             >
//                 <View style={styles.modal}>
//                   <TouchableOpacity onPress={() => captureImage('photo')}>
//                    <View style={{justifyContent:'center',alignItems:'center'}}>
//                       <View style={{width:50,height:50}}>
//                         <Image source={camera} resizeMode="contain" style={{width:'100%',height:"100%"}} />
//                       </View>
//                       <Text>Camera</Text>
//                    </View>
//                    </TouchableOpacity>
//                    <TouchableOpacity onPress={() => chooseFile('photo')}>
//                    <View style={{justifyContent:'center',alignItems:'center'}}>
//                       <View style={{width:50,height:50}}>
//                         <Image source={gallery} resizeMode="contain" style={{width:'100%',height:"100%"}} />
//                       </View>
//                       <Text style={{color:'black'}}>Gallery</Text>
//                    </View>
//                    </TouchableOpacity>
//                 </View>
//             </Modal>
//             <Modal
//                 animationType="slide"
//                 transparent={false}
//                 visible={modalVisible}
//                 onRequestClose={() => {
//                     setModalPhoto(!modalVisible);
//                 }}
//             >
//                {
//       Loader===true?(
//       <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
//       <ActivityIndicator/>
//       </View>
//       )
//     :
//                 <View style={{height:"100%"}}>
//                 <View style={{width:70,height:70,marginLeft:'auto',marginRight:'auto',marginVertical:50  }}>
//                     {
//                       Photo===false?
//                       <Image source={{uri:URL.ProfileImage}} style={{width:"100%",height:"100%"}} />
//                        :
                      
//                       <Image source={{uri:filePath}} style={styles.ImagesStyle} />
                     
//                     }
//                </View>
//       <View style={{marginTop:'auto',marginBottom:70}}>
//         <View>
//             <Button
//                 ButtonText={'Launch Camera for Image'} 
//                 propsFun={() => captureImage('photo')}
//             />
//         </View>
        
//         <View >
//             <Button
//                 ButtonText={'Choose Image'} 
//                 propsFun={() => chooseFile('photo')}
//             />
//         </View>
//         <View style={{marginTop:40}}>
//             <Button
//                 ButtonText={'Upload'} 
//                 propsFun={uploadImage}
//             />
//         </View>
//                 </View>
//                 </View>
// }
//             </Modal>
//     </SafeAreaView>
//   );
// };
// export default VarificationCode;


import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  PermissionsAndroid,
  Modal,
  ActivityIndicator,
  Alert
} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import styles from './styles';
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';
import Button from '../../Components/Button/index';
import * as CommonStyle from '../../helper/CommonStyle';
import {useTranslation} from 'react-i18next';
import * as URL from '../../config/BaseURL/Index'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
var validator = require('validator');
import BGPIC from '../../../Image/logo.png';
import camera from '../../../Image/camera.jpg'
import gallery from '../../../Image/gallery.jpg'
import storage from '@react-native-firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
const VarificationCode = Routprops => {
  const {t, i18n} = useTranslation();
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [filePath, setFilePath] = useState({});
  const [modalPhot, setModalPhoto] = useState(false);
  const [Photo,setPhoto] = useState('');
  const [UserID, setUserid] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [Password, setPassword] = useState('');
  const [Loader, setLoader] = useState(true)
  const [age, setAge] = useState('')
  const [payment, setPayment] = useState('')
  const [PhoneNumber, setPhoneNumber] = useState('')

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  let dropDownAlertRef = useRef(null);
  useEffect(() => {
    
  }, [])
  
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
        console.log("responseresponse",response.assets.map(ls=>ls.uri))
        const filePathUri = response.assets.map(ls=>ls.uri)
        const PathURL = filePathUri.toString().replace(/^\s+|\s+$/g,''); 
        setPhoto(PathURL);

      });
    }
  };

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('response.assets = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.assets.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response.assets);
      console.log("responseresponse",response.assets.map(ls=>ls.uri))
      const filePathUri = response.assets.map(ls=>ls.uri)
      const PathURL = filePathUri.toString().replace(/^\s+|\s+$/g,''); 
      setPhoto(PathURL);
    });
  };
  // const uploadImage = async () => {
  //   const { uri } = Photo;
  //   const filename = uri.substring(uri.lastIndexOf('/') + 1);
  //   const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
  
  //   setUploading(true);
  //   setTransferred(0);
  
  //   const task = storage()
  //     .ref(filename)
  //     .putFile(uploadUri);
  
  //   // set progress state
  //   task.on('state_changed', snapshot => {
  //     setTransferred(
  //       Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
  //     );
  //   });
  
  //   try {
  //     await task;
  //   } catch (e) {
  //     console.error(e);
  //   }
  
  //   setUploading(false);
  
  //   Alert.alert(
  //     'Photo uploaded!',
  //     'Your photo has been uploaded to Firebase Cloud Storage!'
  //   );
  
  //   setImage(null);
  // };

  const uploadImage = async () => {
    // alert("sasdas")
//     setLoader(true)
//     try {
//     const task = storage()
//     console.log(task)
// .ref(`ProfilePicture/${UserID}`)
// .putFile(filePath);
// // set progress state
// task.on('state_changed', snapshot => {
//       console.log("snapshot data is : ",snapshot)
// });
// } catch (e) {
// console.error("Error is ",e);
// setLoader(false)
// }
// setTimeout(function(){
// const imageRef = storage().ref(`ProfilePicture/`+ UserID);
// imageRef
// .getDownloadURL()
// .then((url) => {
// console.log('Single CoverPhoto URL',url)
// setFilePath(url)
// setLoader(false)
// console.log('Single CoverPhoto.id',UserID)

// // UpdateData(url)
// })
// }, 5000);

const reference = storage().ref(`ProAppProfilePictures/`+ UserID)
const path = Photo;
const task =  reference.putFile(path)
task.on('state_changed', taskSnapshot => {
  Alert.alert("Upoading",`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
});

task.then(() => {
  console.log('Image uploaded to the bucket!');
    const imageRef = storage().ref(`ProAppProfilePictures/`+ UserID);
    imageRef
    .getDownloadURL()
    .then((url) => {
    console.log('Single CoverPhoto URL',url)
    setFilePath(url)
    setLoader(false)
    console.log('Single CoverPhoto.id',UserID)
    console.log('Single filePath.id',filePath)
    if(filePath.length!==0){
      Routprops.navigation.navigate("Login")
    }
    
    // UpdateData(url)
    })
   
});

// setTimeout(() => {
//   Routprops.navigation.navigate("Login")
// }, 7000);


}

  // const chooseFile = (type) => {
  //   setFilePath('')
  //   let options = {
  //     mediaType: type,
  //     maxWidth: 300,
  //     maxHeight: 550,
  //     quality: 1,
  //   };
  //   launchImageLibrary(options, (response) => {
  //     console.log('response.assets = ', response);

  //     if (response.didCancel) {
  //       alert('User cancelled camera picker');
  //       return;
  //     } else if (response.errorCode == 'camera_unavailable') {
  //       alert('Camera not available on device');
  //       return;
  //     } else if (response.errorCode == 'permission') {
  //       alert('Permission not satisfied');
  //       return;
  //     } else if (response.errorCode == 'others') {
  //       alert(response.errorMessage);
  //       return;
  //     }
  //     console.log('base64 -> ', response.base64);
  //     console.log('uri -> ', response.uri);
  //     console.log('width -> ', response.width);
  //     console.log('height -> ', response.assets.height);
  //     console.log('fileSize -> ', response.fileSize);
  //     console.log('type -> ', response.type);
  //     console.log('fileName -> ', response.fileName);
  //     setFilePath(response);
  //     console.log("responseresponse",response.assets.map(ls=>ls.uri))
  //     const filePathUri = response.assets.map(ls=>ls.uri)
  //     const PathURL = filePathUri.toString().replace(/^\s+|\s+$/g,''); 
      
  //     setFilePath(PathURL);
  //     setPhoto(true);
  //     console.log("PhotoPhoto",PathURL)
  //   });
  // };
  const CHECK = () => {
    const ComEmail = validator.isEmpty(email);
    const ValEmail = validator.isEmail(email);
    const ComFullName = validator.isEmpty(name);
    const ComPassword = validator.isEmpty(Password);
    const Comdate = validator.isEmpty(address);
    const ComselectedGender = validator.isEmpty(firstName);
   
    if (ComFullName === true) {
      setError('Name is Empty');
    } else if (ComselectedGender === true) {
      setError('FirstName is Empty');
    } else if (ComEmail === true) {
      setError('Email is Empty');
    } else if (ValEmail === false) {
      setError('Email is invalid');
    } else if (Comdate === true) {
      setError('Address is Empty');
    } else if (ComPassword === true) {
      setError('Password is Empty');
    } else {      
     auth().createUserWithEmailAndPassword(email,Password)
     .then((user) => {
      dropDownAlertRef.current?.alertWithType(
        'success',
        'Success',
        'Successfully Registered',
      );
      // setUserid(...auth().currentUser.uid);
      const userid=auth().currentUser.uid;
      setUserid(userid);
      setTimeout(() => {
        setModalVisible(!modalVisible)
        setLoader(false)
      console.log("USer id is +Ods", userid)
      database().ref(`user/${userid}`).set({
          UserID:userid,
          Name:name,
          Email:email,
          Address:address,
          FirstName:firstName,
          Password:Password,
          Age:age,
          Payment:payment,
          PhoneNumber:PhoneNumber,
          })
      }, 3000);
      
      if (user) {
        auth()
          .currentUser.updateProfile({
            displayName: name
          })
          // .then(setModalVisible(modalVisible))
          .catch((error) => {
            dropDownAlertRef.current?.alertWithType(
              'error',
              'Error',
              error,
            );
          });
      }
    })
    .catch((error) => {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        dropDownAlertRef.current?.alertWithType(
          'error',
          'Error',
          "That email address is already in use!"
        );
      } else {
        dropDownAlertRef.current?.alertWithType(
          'error',
          'Error',
          error.message
        );
      }
    });
    }
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      <DropdownAlert ref={dropDownAlertRef} />
      <KeyboardAvoidingView
        keyboardVerticalOffset={80}
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <View style={styles.container}>
        
          <Image source={BGPIC} style={styles.ImagesStyle} />
        
            
            <View style={styles.InputContainer}>
              <TextInput
                style={{marginLeft: 20,color:CommonStyle.dark}}
                placeholder={t('Nom')}
                placeholderTextColor="rgba(28,28,28,.4)"
                onChangeText={name => setName(name)}
              />
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={{marginLeft: 20,color:CommonStyle.dark}}
                placeholder={t('Prénom')}
                placeholderTextColor="rgba(28,28,28,.4)"
                onChangeText={name => setFirstName(name)}
              />
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={{marginLeft: 20,color:CommonStyle.dark}}
                placeholder="E-mail"
                placeholderTextColor="rgba(28,28,28,.4)"
                onChangeText={name => setEmail(name)}
              />
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={{marginLeft: 20,color:CommonStyle.dark}}
                placeholder="Adresse"
                placeholderTextColor="rgba(28,28,28,.4)"
                onChangeText={name => setAddress(name)}
              />
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={{marginLeft: 20,color:CommonStyle.dark}}
                placeholder={t('Mot de passe')}
                placeholderTextColor="rgba(28,28,28,.4)"
                onChangeText={name => setPassword(name)}
              />
            </View>
            {/* <TouchableOpacity onPress={()=>setModalPhoto(!modalPhot)}>
            <View style={[styles.InputContainer,{justifyContent:"center"}]}>
              <Text style={{marginLeft: 20,color:"rgba(28,28,28,.4)"}}>{t('Photo de profil')}</Text>
            </View>
            </TouchableOpacity> */}
            {/* <View style={[styles.InputContainer,{justifyContent:"center"}]}>
              <Text></Text>
            </View> */}

            <Text
              style={{
                alignSelf: 'center',
                color: 'red',
                fontFamily: CommonStyle.Regular,
                fontSize: 12,
              }}>
              {error}
            </Text>
            <View style={{marginTop: 30}} />
            <Button
              ButtonText={t('Valider')}
              propsFun={CHECK}
              ButtonStyle={'red'}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Modal
                animationType="slide"
                transparent={true}
                visible={modalPhot}
                onRequestClose={() => {
                    setModalPhoto(!modalPhot);
                }}
            >
                <View style={styles.modal}>
                  <TouchableOpacity onPress={() => captureImage('photo')}>
                   <View style={{justifyContent:'center',alignItems:'center'}}>
                      <View style={{width:50,height:50}}>
                        <Image source={camera} resizeMode="contain" style={{width:'100%',height:"100%"}} />
                      </View>
                      <Text>Camera</Text>
                   </View>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={() => chooseFile('photo')}>
                   <View style={{justifyContent:'center',alignItems:'center'}}>
                      <View style={{width:50,height:50}}>
                        <Image source={gallery} resizeMode="contain" style={{width:'100%',height:"100%"}} />
                      </View>
                      <Text style={{color:'black'}}>Gallery</Text>
                   </View>
                   </TouchableOpacity>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalPhoto(!modalVisible);
                }}
            >
               {
      Loader===true?(
      <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator/>
      </View>
      )
    :
                <View style={{height:"100%"}}>
                <View style={{width:70,height:70,marginLeft:'auto',marginRight:'auto',marginVertical:50  }}>
                    {
                      Photo===''?
                      <Image source={{uri:URL.ProfileImage}} style={{width:"100%",height:"100%"}} />
                       :
                      
                      <Image source={{uri:Photo}} style={styles.ImagesStyle} />
                     
                    }
               </View>
      <View style={{marginTop:'auto',marginBottom:70}}>
        <View>
            <Button
                ButtonText={'Launch Camera for Image'} 
                propsFun={() => captureImage('photo')}
            />
        </View>
        
        <View >
            <Button
                ButtonText={'Choose Image'} 
                propsFun={() => chooseFile('photo')}
            />
        </View>
        <View style={{marginTop:40}}>
            <Button
                ButtonText={'Upload'} 
                propsFun={uploadImage}
            />
        </View>
                </View>
                </View>
}
            </Modal>
    </SafeAreaView>
  );
};
export default VarificationCode;

