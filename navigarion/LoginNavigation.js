import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as CommonStyle from '../src/helper/CommonStyle'
const Stack = createNativeStackNavigator();
import SplashScreen from '../src/Screen/splashScreen/index';
import LoginSignUp from '../src/Screen/LoginSignUp/index';
import VerificationCode from '../src/Screen/varficationCode/index';
import PhoneNumber from '../src/Screen/phoneNumber/index';
import SignUp from '../src/Screen/signup/index';
import Screen1 from '../src/Screen/SkipScreen/Screen1';
import Screen2 from '../src/Screen/SkipScreen/Screen2';
import Screen3 from '../src/Screen/SkipScreen/Screen3';
import LeaveComment from '../src/Screen/LeaveComment/index'
import Inbox from '../src/Screen/Inbox/Index'
import Jobs from '../src/Screen/Jobs/Index'
import Chat from '../src/Screen/Chat/Index'
import Translation from '../src/Screen/Translation/Index'
import Subscription from '../src/Screen/Subscription/Index'
import Welcome from '../src/Screen/Welcome/Index'
import Profile from '../src/Screen/Profile/Index'
import Profilestack from '../src/Screen/Profile/ProfileStack'
import Benifits from '../src/Screen/Benifits/Index'
import Book from '../src/Screen/Book/Index'
import Schedule from '../src/Screen/Schedule/Index'
import History from '../src/Screen/History/Index'
import PaymentPlan from '../src/Screen/PaymentPlan/Index'
import Home from '../src/Screen/DrawerBarber/Index'
import Login from '../src/Screen/login/index'
import Revenues from '../src/Screen/Revenues/Index'
import OtpVerification from '../src/Screen/varficationCode/index'
import Calendars from '../src/Screen/Schedule/Calendar';
import UploadImage from '../src/Screen/UploadImage/Index'

//ICONS
import Iconics from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
const Tab = createBottomTabNavigator();

function MyTabs() {
  const {t, i18n} = useTranslation()
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:CommonStyle.pureWhite,tabBarStyle:{position:'absolute',backgroundColor:CommonStyle.BlueButton,borderTopColor:"white",height:60,paddingBottom:5}}} initialRouteName='Home'>
    <Tab.Screen name="home" component={HomeStack}  options={{tabBarIcon:()=><Iconics name="md-heart-outline" size={28} color={CommonStyle.pureWhite}/>,title:t('Favoris')}}/>
    <Tab.Screen name="Inbox" component={Inbox} options={{tabBarIcon:()=><MaterialIcons name="chat-bubble-outline" size={28} color={CommonStyle.pureWhite}/>,title:t('Messages')}}/>
    <Tab.Screen name="Revenues" component={Revenues} options={{tabBarIcon:()=> <Feather name="calendar" color={CommonStyle.pureWhite} size={28} style={{alignSelf: 'center'}} />,title:t('Rendez-vous')}}/>
    <Tab.Screen name="ProfileStack" component={ProfilesStack} options={{tabBarIcon:()=><FontAwesome name="user-circle-o" color={CommonStyle.pureWhite} size={28} style={{alignSelf: 'center'}} />,title:t('Profil')}}/>
    <Tab.Screen
    component={AbonmentStack}
    name="AbonmentStack"
    options={{ tabBarLabel: "AbonmentStack",tabBarButton: () => null}}
  />
   <Tab.Screen
    component={PlanningStack}
    name="PlanningStack"
    options={{ tabBarLabel: "PlanningStack",tabBarButton: () => null}}
  />
  </Tab.Navigator>
  );
}


const Homestack = createNativeStackNavigator();
function HomeStack(){
  return(
<Homestack.Navigator screenOptions={{headerShown: false}}>
    <Homestack.Screen name='Home' component={Home} />
    <Homestack.Screen name="Jobs" component={Jobs} />
    <Homestack.Screen name="Benifits" component={Benifits} />
  </Homestack.Navigator>
  )
  
}

const ProfileStack = createNativeStackNavigator();
function ProfilesStack (){
  return(
    <ProfileStack.Navigator initialRouteName='Profilestack' screenOptions={{headerShown: false}}>
      <ProfileStack.Screen  name="Profile" component={Profile} /> 
      <ProfileStack.Screen  name="Profilestack" component={Profilestack} /> 
      <ProfileStack.Screen name="Subscription" component={Subscription} />
    </ProfileStack.Navigator>
  )
}
const Abonmentstack = createNativeStackNavigator();
function AbonmentStack (){
  return(
    <Abonmentstack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
      <Abonmentstack.Screen name="Welcome" component={Welcome} />
      {/* <Abonmentstack.Screen  name="Profilestack" component={Profilestack} />  */}
      <Abonmentstack.Screen name="Subscription" component={Subscription} />
      <Abonmentstack.Screen name="PaymentPlan" component={PaymentPlan} />
    </Abonmentstack.Navigator>
  )
}

const Planning = createNativeStackNavigator();
function PlanningStack (){
  return(
    <Planning.Navigator initialRouteName='Schedule' screenOptions={{headerShown: false}}>
      <Planning.Screen name="Schedule" component={Schedule} />
      <Planning.Screen name="Calendar" component={Calendars} />
    </Planning.Navigator>
  )
}
const LoginNavigation = () => {
    const Auth = () => {
        return (
          <Stack.Navigator
            initialRouteName="SignUp"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Otp" component={OtpVerification} />
            <Stack.Screen name='UploadImage' component={UploadImage} />
          </Stack.Navigator>
        );
      };
    return ( 
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{
                headerShown: false
              }}>
                {/* <Stack.Screen name="Revenues" component={Revenues} /> */}
                <Stack.Screen name="MyTabs" component={MyTabs} />
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="LoginSignUp" component={LoginSignUp} />
                <Stack.Screen name="Auth" component={Auth} />
                <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
                <Stack.Screen name="VerificationCode" component={VerificationCode} />
                {/* <Stack.Screen name="LeaveComment" component={LeaveComment} /> */}
                {/* <Stack.Screen name="Inbox" component={Inbox} /> */}
                
                <Stack.Screen name="Translation" component={Translation} />
                <Stack.Screen name="Chat" component={Chat} />
                {/* <Stack.Screen name="Subscription" component={Subscription} /> */}
                {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
                
                {/* <Stack.Screen name="Book" component={Book} /> */}

                {/* <Stack.Screen name="History" component={History} /> */}
                
                {/* <Stack.Screen name="PaymentPlan" component={PaymentPlan} /> */}

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default LoginNavigation;