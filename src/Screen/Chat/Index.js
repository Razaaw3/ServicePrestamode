// import React, { useState,useEffect,useCallback } from 'react';
// import { GiftedChat } from 'react-native-gifted-chat'
// import {View,Text,SafeAreaView,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
// console.disableYellowBox = true;
// import { Avatar } from 'react-native-paper';
// import styles from './styles';
// import Back from 'react-native-vector-icons/Ionicons'
// import * as CommonStyle from '../../helper/CommonStyle'
// import firestore from '@react-native-firebase/firestore';
// import auth from '@react-native-firebase/auth';
// import database from '@react-native-firebase/database';
// const Index = (props) => {
//   const [messages, setMessages] = useState([]);
//   const   data = props.route.params
//   const uid = auth().currentUser.email;
//   useEffect(() => {
//     // console.log("Dtata is ", data)
//     // // const collectionRef = firestore().collection(uid);
//     // // const q = collectionRef.orderBy('createdAt', 'desc');
//     // firestore().collection(uid)
//     // // .doc(data._id).collection("chat")
//     // .orderBy('createdAt')
//     // .get()
//     // .onSnapshot(querySnapshot=>{
//     //   console.log(querySnapshot)
//     //   console.log("sdads",querySnapshot._orders.map(doc => doc))
//     //   // setMessages(
//     //   //   querySnapshot.docs.map(doc => 
//     //   //     ({
//     //   //     _id: doc.data().uid,
//     //   //     createdAt: doc.data().createdAt.toDate(),
//     //   //     text: doc.data().text,
//     //   //     user: doc.data().user
//     //   //   })
//     //   //   )
//     //   // );
//     // })
//     // console.log("messagesmeassages",messages)

//     firestore()
//   .collection(uid)
//   // Order results
//   .orderBy('createdAt', 'desc')
//   .get()
//   .then(querySnapshot => {
//    console.log("czczxczczxczczczczc",querySnapshot)
//   });
//   }, []);

//     const onSend = useCallback((messages = []) => {
//     console.log(messages)
//     setMessages(previousMessages => GiftedChat.append(previousMessages, messages))

//   const { _id, createdAt, text, user } = messages[0];  
//       firestore().collection(uid)
//     .doc(data._id) .collection('Chat')
//     .add({
//       id:_id,
//       CreatedAt:createdAt,
//       Message:text,
//       User:user
//     })
//     .then(() => {
//      console.log("successfull",messages )
//     });
//   }, [])
//   return(
//     <SafeAreaView style={{height:'100%',width:'100%'}}>
//       <View style={styles.chatHeader}>
//         <TouchableOpacity onPress={()=>props.navigation.goBack(null)}>
//         <Back name='chevron-back' size={20} style={{marginHorizontal:15}} color='#BFC4D3'/>
//         </TouchableOpacity>
//         <Avatar.Image size={55} source={{uri:'https://placeimg.com/140/140/any'}} />
//         <Text style={{color:'black',fontSize:16,fontFamily:CommonStyle.Bold,marginHorizontal:20}}>{data.name}</Text>
//       </View>
//     <GiftedChat
//      messages={messages}
//      onSend={messages => onSend(messages)}
//      user={{
//        _id: uid,
//      }}
//   />
//      </SafeAreaView>
//   )
// } 
// export default Index;

// // import React, { useState,useEffect,useCallback } from 'react';
// // import { GiftedChat } from 'react-native-gifted-chat'
// // import {View,Text,SafeAreaView,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
// // console.disableYellowBox = true;
// // import { Avatar } from 'react-native-paper';
// // import styles from './styles';
// // import Back from 'react-native-vector-icons/Ionicons'
// // import * as CommonStyle from '../../helper/CommonStyle'
// // import firestore from '@react-native-firebase/firestore';
// // import auth from '@react-native-firebase/auth';
// // import database from '@react-native-firebase/database';
// // const Index = (props) => {
// //   const [messages, setMessages] = useState([]);

// //   useEffect(() => {
    // setMessages([
    //   {
    //     _id: 1,
    //     text: 'Hello developer',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: 'React Native',
    //       avatar: 'https://placeimg.com/140/140/any',
    //     },
    //   },
    // ])

    
// //   }, [])

// //   const onSend = useCallback((messages = []) => {
// //     console.log("mesage is : ",messages)
// //     setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
// //   }, [])

// //   return (
// //     <GiftedChat
// //       messages={messages}
// //       onSend={messages => onSend(messages)}
// //       user={{
// //         _id: 1,
// //       }}
// //     />
// //   )
// // } 
// // export default Index;
import React, { useState,useEffect,useCallback } from 'react';
import { Bubble, GiftedChat } from 'react-native-gifted-chat'
import {View,Text,SafeAreaView,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
console.disableYellowBox = true;
import { Avatar } from 'react-native-paper';
import styles from './styles';
import Back from 'react-native-vector-icons/Ionicons'
import * as CommonStyle from '../../helper/CommonStyle'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
const Index = (props) => {
  const [messages, setMessages] = useState([]);
  const   data = props.route.params
  const uid = auth().currentUser.uid;
  const allmessage =async()=>{
const docId = data._id>uid ? `${uid}-${data._id}`:`${data._id}-${uid}`;
    const messageRef = firestore()
    .collection("ChatsRoom")
    .doc(docId) .collection('Messages')
    .orderBy("createdAt","desc")
    messageRef.onSnapshot(querySnapshot=>{
      const allmessage = querySnapshot.docs.map(querySnapshot=>{
        if(querySnapshot.data().createdAt){
        return{
          ...querySnapshot.data(),
          createdAt:querySnapshot.data().createdAt.toDate()
        }
      }
      else{
        return{
          ...querySnapshot.data(),
          createdAt:new Date()
        }
      }
      })
      setMessages(allmessage)
    })
   
  }
  useEffect(() => {
    allmessage();
    return(()=>{
      allmessage();
    })
  }, []);

    const onSend = (messages) => {
    const msg =messages[0];
    const mymsg = {
      ...msg,
      sendTo:data._id,
      sendBy:uid
    }
    setMessages(previousMessages => GiftedChat.append(previousMessages, mymsg))
    const docId = data._id>uid ? `${uid}-${data._id}`:`${data._id}-${uid}`
  // const { _id, createdAt, text, user } = messages[0];  
      firestore().collection("ChatsRoom")
    .doc(docId) .collection('Messages')
    .add(mymsg)
    .then(() => {
     console.log("successfull",messages )
    });
  }
  const bubble = (props)=>{
    return(
      <Bubble
      {...props}
      wrapperStyle={{
        right:{
          backgroundColor:'#F81300'
        },
        left:{
          backgroundColor:'#EAECF2',
          marginRight:70,
          color:'#63697B'
        },
       
      }}
      />
    )
  }
  return(
    <SafeAreaView style={{height:'100%',width:'100%'}}>
      <View style={styles.chatHeader}>
        <TouchableOpacity onPress={()=>props.navigation.goBack(null)}>
        <Back name='chevron-back' size={20} style={{marginHorizontal:15}} color='#BFC4D3'/>
        </TouchableOpacity>
        <Avatar.Image size={55} source={{uri:'https://placeimg.com/140/140/any'}} />
        <Text style={{color:'black',fontSize:16,fontFamily:CommonStyle.Bold,marginHorizontal:20}}>{data.name}</Text>
      </View>
      <View style={{backgroundColor:CommonStyle.white,flex:1}}>      
    <GiftedChat
      isTyping={true}
     messages={messages}
     onSend={messages => onSend(messages)}
     renderBubble={bubble}
     user={{
       _id: uid,
     }}
  /></View>
     </SafeAreaView>
  )
} 
export default Index; 
