import React, { useState } from 'react';
import { View,Text } from 'react-native';
import SplashScreen from './src/Screen/splashScreen/index';
import LoginSignUp from './src/Screen/LoginSignUp/index';
import VerificationCode from './src/Screen/varficationCode/index';
import PhoneNumber from './src/Screen/phoneNumber/index';
import SignUp from './src/Screen/signup/index';
import Screen1 from './src/Screen/SkipScreen/Screen1';
import Screen2 from './src/Screen/SkipScreen/Screen2';
import Screen3 from './src/Screen/SkipScreen/Screen3';


//Not Routing
import Drawer from './src/Screen/Drawer/index';
import MyReservation from './src/Screen/Myreservations/index';
import LeaveComment from './src/Screen/LeaveComment/index'
import Navigation from './navigarion/LoginNavigation';
console.disableYellowBox = true;
const App = () => {
  return(
    <View style={{flex:1}}>
      <Navigation/>
    </View>
  )
} 
export default App;
