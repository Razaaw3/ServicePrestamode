
import * as React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//  Login Module
import SplashScreen from '../src/Screen/splashScreen/index';
import Next from '../src/Screen/Next/index';
import LoginSignUp from '../src/Screen/LoginSignUp/index';
import Login from '../src/Screen/login/index';
import Signup from '../src/Screen/signup/index';
import ForgetPassword from '../src/Screen/forgetPassword/index';
import VarificationCode from '../src/Screen/varficationCode/index';
import SetPassword from '../src/Screen/setPassword/index';
import ResetSuccessfully from '../src/Screen/setPassword/reSetSuucess';
import AboutPhone from '../src/Screen/PhoneInformation/index'
//  Home
import Home from '../src/Screen/Home/index';
import AllTopRated from '../src/Screen/AllTopRated/allTopRated';
//  Article 
import Article from '../src/Screen/Article/article';
import ArticleDetaile from '../src/Screen/Article/articleDetaile';
import Notification from '../src/Screen/Notification/index';
import Category from '../src/Screen/Category/index';
import SelectCatagory from '../src/Screen/Category/selectCategory';
import DoctorProfile from '../src/Screen/DoctorProfile';
import AllTReview from '../src/Screen/DoctorProfile/allreview';
import DoneAppointment from '../src/Screen/Appointment/done';
import BookAppointment from '../src/Screen/Appointment/index';
// Drawer
import Drawer from '../src/Screen/Drawer/index';
import AboutApp from '../src/Screen/AboutApp/index';
import MyAppointment from '../src/Screen/MyAppointment';
import Rated from '../src/Screen/RatedTop/index';
import ContactUs from '../src/Screen/ContactUs/index';
import Setting from '../src/Screen/Setting/index';
import FamilyMember from '../src/Screen/FamilyMember/index';
import AddFamilyMember from '../src/Screen/FamilyMember/addMember';
import ScanCode from '../src/Screen/ShareQR/index';
import ShareProfile from '../src/Screen/ShareQR/shareProfile';
import ShareProfilePerson from '../src/Screen/ShareProfilePerson/index';
import MyReportMain from '../src/Screen/MyReportMain/index';
import LabReport from '../src/Screen/MyReportMain/LabReport';
import RadiologyReport from '../src/Screen/MyReportMain/RadiologyReport';
import Profile from '../src/Screen/Profile/index';
import EditProfile from '../src/Screen/Profile/EditProfile';
import Laboratory  from '../src/Screen/LaboratoryPharmacy/index';
import Pharmacy from '../src/Screen/LaboratoryPharmacy/pharmacy';
import InboxReport from '../src/Screen/InboxReport/index';

/////  Hearted
import Favorite from '../src/Screen/Favorite/index';

//// Search Map
import SearchMap from '../src/Screen/SearchMap/index';
import PharmacyMedicineSearch from '../src/Screen/PharmacyMedicineSearch/index';

//// Chat
import ChatList from '../src/Screen/Chat/index';
import ChatBox from '../src/Screen/Chat/ChatBox';
import VideoCall from '../src/Screen/Chat/VideoCall';

import '../src/config/i18n';

import UserAgreement from '../src/Screen/UserAgrement/Index'  

const DrawerStack = createStackNavigator();

function DrawerStackScreen() {
  return (
    <DrawerStack.Navigator initialRouteName='Drawer' headerMode='none'>
      <DrawerStack.Screen name="Drawer" component={Drawer} />
      <DrawerStack.Screen name="AboutApp" component={AboutApp} />
      <DrawerStack.Screen name="MyAppointment" component={MyAppointment} />
      <DrawerStack.Screen name="Rated" component={Rated} />
      <DrawerStack.Screen name="ContactUs" component={ContactUs} />
      <DrawerStack.Screen name="Setting" component={Setting} />
      <DrawerStack.Screen name="FamilyMember" component={FamilyMember} />
      <DrawerStack.Screen name="AddFamilyMember" component={AddFamilyMember} />
      <DrawerStack.Screen name="ScanCode" component={ScanCode} />
      <DrawerStack.Screen name="ShareProfile" component={ShareProfile} />
      <DrawerStack.Screen name="ShareProfilePerson" component={ShareProfilePerson} />
      <DrawerStack.Screen name="MyReportMain" component={MyReportMain} />
      <DrawerStack.Screen name="LabReport" component={LabReport} />
      <DrawerStack.Screen name="RadiologyReport" component={RadiologyReport} />
      <DrawerStack.Screen name="Profile" component={Profile} />
      <DrawerStack.Screen name="EditProfile" component={EditProfile} />
      <DrawerStack.Screen name="InboxReport" component={InboxReport} />
      
    </DrawerStack.Navigator>
  );
}

const InboxStack = createStackNavigator();

function InboxStackScreen() {
  return (
    <InboxStack.Navigator initialRouteName='ChatList' headerMode='none'>
      <InboxStack.Screen name="ChatList" component={ChatList} />
      <InboxStack.Screen name="ChatBox" component={ChatBox} />
      {/* <InboxStack.Screen name="VideoCall" component={VideoCall} /> */}
    </InboxStack.Navigator>
  );
}

const LocationStack = createStackNavigator();

function LocationStackScreen() {
  return (
    <LocationStack.Navigator initialRouteName='SearchMap' headerMode='none'>
      <LocationStack.Screen name="SearchMap" component={SearchMap} />
      <LocationStack.Screen name="Laboratory" component={Laboratory} />
      <LocationStack.Screen name="AllTReview" component={AllTReview} />
      <LocationStack.Screen name="Pharmacy" component={Pharmacy} />
      <LocationStack.Screen name="BookAppointment" component={BookAppointment} />
      <LocationStack.Screen name="DoneAppointment" component={DoneAppointment} />
      <LocationStack.Screen name="DoctorProfile" component={DoctorProfile} />
      <LocationStack.Screen name="PharmacyMedicineSearch" component={PharmacyMedicineSearch} />
    </LocationStack.Navigator>
  );
}

const HeartStack = createStackNavigator();

function HeartStackScreen() {
  return (
    <HeartStack.Navigator initialRouteName='Favorite' headerMode='none'>
      <HeartStack.Screen name="Favorite" component={Favorite} />
      <HeartStack.Screen name="SelectCatagory" component={SelectCatagory} />
      <HeartStack.Screen name="DoctorProfile" component={DoctorProfile} />
      <HeartStack.Screen name="AllTReview" component={AllTReview} />
      <HeartStack.Screen name="BookAppointment" component={BookAppointment} />
      <HeartStack.Screen name="DoneAppointment" component={DoneAppointment} />
    </HeartStack.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomesStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName='Home' headerMode='none'>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="AllTopRated" component={AllTopRated} />
      <HomeStack.Screen name="Article" component={Article} />
      <HomeStack.Screen name="ArticleDetaile" component={ArticleDetaile} />
      <HomeStack.Screen name="Notification" component={Notification} />
      <HomeStack.Screen name="Category" component={Category} />
      <HomeStack.Screen name="SelectCatagory" component={SelectCatagory} />
      <HomeStack.Screen name="DoctorProfile" component={DoctorProfile} />
      <HomeStack.Screen name="AllTReview" component={AllTReview} />
      <HomeStack.Screen name="BookAppointment" component={BookAppointment} />
      <HomeStack.Screen name="DoneAppointment" component={DoneAppointment} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
      <Tab.Navigator
        tabBarOptions={{
            showLabel:false,
            header:'none'
        }}
        screenOptions={{
          headerShown:false
        }}
        initialRouteName='Home'
      >
        <Tab.Screen name="Drawer" component={DrawerStackScreen} 
            options={{
                tabBarIcon: ({ focused }) => (
                <View style = {{width: 35, height: 35,backgroundColor:focused?'#c1dfec':'white',borderRadius:20,opacity:0.8}}>
                    <Image source={require('../Image/Side.png')} style = {{width: 15, height: 15,alignSelf:'center',marginTop:10,}}/>
                </View> 
            )}}
        />
        <Tab.Screen name="Inbox" component={InboxStackScreen} 
            options={{
                tabBarIcon: ({ focused }) => (
                <View style = {{width: 35, height: 35,backgroundColor:focused?'#c1dfec':'white',borderRadius:20,opacity:0.8}}>
                    <Image source={require('../Image/inbox.png')} style = {{width: 25, height: 25,alignSelf:'center',marginTop:5,}} />
                </View> 
            )}}
        />
        <Tab.Screen name="Location" component={LocationStackScreen} 
            options={{
                tabBarIcon: ({ focused }) => (
                <View style = {{width: 100, height: 100,borderRadius:30,opacity:1,marginTop:-25,backgroundColor: 'transparent'}}>
                    <View style = {{width: 55, height: 55,backgroundColor:focused?'#459DA1':'#459DA1',borderRadius:30,alignSelf:'center',marginTop:15}}>
                        <Image source={require('../Image/navi.png')} style = {{width: 31, height: 30,alignSelf:'center',marginTop:13,}} />
                    </View> 
                </View>
            )}}
        />
        <Tab.Screen name="Heart" component={HeartStackScreen} 
            options={{
                tabBarIcon: ({ focused }) => (
                <View style = {{width: 35, height: 35,backgroundColor:focused?'#c1dfec':'white',borderRadius:20,opacity:0.8}}>
                    <Image source={require('../Image/heart.png')} style = {{width: 23, height: 23,alignSelf:'center',marginTop:7,}} />
                </View> 
            )}}
        />
        <Tab.Screen name="Home" component={HomesStackScreen} 
            options={{
                tabBarIcon: ({ focused }) => (
                <View style = {{width: 35, height: 35,backgroundColor:focused?'#c1dfec':'white',borderRadius:20,opacity:0.8}}>
                    <Image source={require('../Image/home.png')} style = {{width: 25, height: 25,alignSelf:'center',marginTop:4,}} />
                </View> 
            )}}
        />
      </Tab.Navigator>
  );
}
const Stack = createStackNavigator();
export default function Auth(props){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen' headerMode='none'>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Next" component={Next}/>
        <Stack.Screen name="UserAgreement" component={UserAgreement} />
        <Stack.Screen name="LoginSignUp" component={LoginSignUp}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="VarificationCode" component={VarificationCode} />
        <Stack.Screen name="SetPassword" component={SetPassword} />
        <Stack.Screen name="ResetSuccessfully" component={ResetSuccessfully} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="VideoCall" component={VideoCall} />
        <Stack.Screen name="AboutPhone" component={AboutPhone} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
