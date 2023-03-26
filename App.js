import React, { useState,useEffect } from 'react';
import { View,Text } from 'react-native';
import firebase from '@react-native-firebase/app'

//Not Routing
import Navigation from './navigarion/LoginNavigation';
console.disableYellowBox = true;
const App = () => {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyCDh__FZDsAe83Lb-K8kw6UJ1poFD1KQnk",
      authDomain: "pretanode.firebaseapp.com",
      databaseURL: "https://pretanode-default-rtdb.firebaseio.com",
      projectId: "pretanode",
      storageBucket: "pretanode.appspot.com",
      messagingSenderId: "212141452853",
      appId: "1:212141452853:web:96b48ccb830613ea754b7c",
      measurementId: "G-EGB8LSGRYT"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
   }else {
    firebase.initializeApp(firebaseConfig);
   }
  });
  return(
    <View style={{flex:1}}>
      <Navigation/>
    </View>
  )
} 
export default App;
