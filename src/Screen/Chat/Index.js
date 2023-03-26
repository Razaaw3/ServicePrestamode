import React, {useState, useEffect, useCallback} from 'react';
import {
  Bubble,
  GiftedChat,
  Send,
  Actions,
  ActionsProps,
} from 'react-native-gifted-chat';
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
console.disableYellowBox = true;
import {Avatar} from 'react-native-paper';
import styles from './styles';
import Back from 'react-native-vector-icons/Ionicons';
import * as CommonStyle from '../../helper/CommonStyle';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useTranslation} from 'react-i18next';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

//Icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
const Index = props => {
  const [messages, setMessages] = useState([]);
  const [filePath, setFilePath] = useState({});
  const [Photo, setPhoto] = useState('');
  const {t, i18n} = useTranslation();
  // const data = props.route.params;
  // const uid = auth().currentUser.uid;

  // const chooseFile = type => {
  //   let options = {
  //     mediaType: type,
  //     maxWidth: 300,
  //     maxHeight: 550,
  //     quality: 1,
  //   };
  //   launchImageLibrary(options, response => {
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
  //     setFilePath(response.assets);
  //     console.log(
  //       'responseresponse',
  //       response.assets.map(ls => ls.uri),
  //     );
  //     const filePathUri = response.assets.map(ls => ls.uri);
  //     const PathURL = filePathUri.toString().replace(/^\s+|\s+$/g, '');
      
  //       const msg = messages[0];
  //       const mymsg = {
  //         ...msg,
  //         _id: Math.random().toString(32).substring(2, 61),
  //         sendTo: data._id,
  //         sendBy: uid,
  //         image:PathURL,
  //         createdAt: new Date(),
  //         text:'',
  //         user:{
  //           _id:uid
  //         }
  //       };
  //       setMessages(previousMessages => GiftedChat.append(previousMessages, mymsg));
  //       const docId = data._id > uid ? `${uid}-${data._id}` : `${data._id}-${uid}`;
  //       firestore()
  //         .collection('ChatsRoom')
  //         .doc(docId)
  //         .collection('Messages')
  //         .add(mymsg)
  //         .then(() => {
  //           console.log('successfull', messages);
  //         });

  //   });
  // };
  // // function renderAction(props: Readonly<ActionsProps>) {
    
  // //   return (
  // //     <Actions
  // //       {...props}
  // //       onPressActionButton={console.log("sadsadasd")}
  // //       // options={{
  // //       //   ['Send Image']: chooseFile('photo'),
  // //       // }}
  // //       icon={() => (
  // //         <MaterialIcons name={'photo-library'} size={28} color={CommonStyle.BlueButton} />
  // //       )}
  // //       // onSend={args => console.log(args)}
  // //     />
  // //   )
  // // }

  // const allmessage =async()=>{
  //   const docId = data._id>uid ? `${uid}-${data._id}`:`${data._id}-${uid}`;
  //       const messageRef = firestore()
  //       .collection("ChatsRoom")
  //       .doc(docId) .collection('Messages')
  //       .orderBy("createdAt","desc")
  //       messageRef.onSnapshot(querySnapshot=>{
  //         if(querySnapshot){
            
          
  //         const allmessage = querySnapshot.docs.map(querySnapshot=>{
  //           if(querySnapshot.data().createdAt){
  //           return{
  //             ...querySnapshot.data(),
  //             createdAt:querySnapshot.data().createdAt.toDate()
  //           }
  //         }
  //         else{
  //           return{
  //             ...querySnapshot.data(),
  //             createdAt:new Date()
  //           }
  //         }
  //         })
  //         setMessages(allmessage)
  //         }
  //         else{
  //           alert("Unknown error occured")
  //         }
  //       })
       
  //     }
  //     useEffect(() => {
  //       allmessage();
  //       return(()=>{
  //         allmessage();
  //       })
  //     }, []);

  // const onSend = messages => {
  //   const msg = messages[0];
  //   const mymsg = {
  //     ...msg,
  //     sendTo: data._id,
  //     sendBy: uid,
  //   };
  //   setMessages(previousMessages => GiftedChat.append(previousMessages, mymsg));
  //   const docId = data._id > uid ? `${uid}-${data._id}` : `${data._id}-${uid}`;
  //   // const { _id, createdAt, text, user } = messages[0];
  //   firestore()
  //     .collection('ChatsRoom')
  //     .doc(docId)
  //     .collection('Messages')
  //     .add(mymsg)
  //     .then(() => {
  //       console.log('successfull', messages);
  //     });
  // };

  const bubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: CommonStyle.BlueButton,
          },
          left: {
            backgroundColor: '#EAECF2',
            marginRight: 70,
            color: '#EAECF2',
          },
        }}
      />
    );
  };
  return (
    <SafeAreaView style={{height: '100%', width: '100%'}}>
      <View style={styles.chatHeader}>
        <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
          <Back
            name="chevron-back"
            size={20}
            style={{marginHorizontal: 15}}
            color="#BFC4D3"
          />
        </TouchableOpacity>
        <Avatar.Image
          size={55}
          source={{uri: 'https://placeimg.com/140/140/any'}}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontFamily: CommonStyle.Bold,
            marginHorizontal: 20,
          }}>
          "Dummy Name"
        </Text>
      </View>
      <View style={{backgroundColor: CommonStyle.white, flex: 1}}>
        <GiftedChat
          renderActions={() => (
            <MaterialIcons
              style={styles.uploadImage}
              onPress={()=>{
                chooseFile('photo')
              }}
              name='photo-library'
              size={30}
              color='#000'
            />
          )}
          renderSend={props => (
            <Send {...props}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  marginHorizontal: 10,
                }}>
                {/* <Text style={{color:'black',fontSize:16,}}>{t("Send")}</Text> */}
                <Icon name="send" size={24} color={CommonStyle.BlueButton} />
              </View>
            </Send>
          )}
          textInputStyle={{color: CommonStyle.dark}}
          isTyping={true}
          messages={messages}
          // onSend={messages => onSend(messages)}
          renderBubble={bubble}
          minInputToolbarHeight={30}
          maxComposerHeight={100}
          alwaysShowSend
          // user={{
          //   _id: uid,
          // }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Index;
