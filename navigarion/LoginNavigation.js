import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
import Benifits from '../src/Screen/Benifits/Index'
import Book from '../src/Screen/Book/Index'
import Schedule from '../src/Screen/Schedule/Index'
import History from '../src/Screen/History/Index'
import PaymentPlan from '../src/Screen/PaymentPlan/Index'
import DrawerBarber from '../src/Screen/DrawerBarber/Index'
import Login from '../src/Screen/login/index'

const LoginNavigation = () => {
    return ( 
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{
                headerShown: false
              }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Screen1" component={Screen1} />
                <Stack.Screen name="Screen2" component={Screen2}/>
                <Stack.Screen name="Screen3" component={Screen3} />
                <Stack.Screen name="LoginSignUp" component={LoginSignUp} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
                <Stack.Screen name="VerificationCode" component={VerificationCode} />
                <Stack.Screen name="LeaveComment" component={LeaveComment} />
                <Stack.Screen name="Inbox" component={Inbox} />
                <Stack.Screen name="Jobs" component={Jobs} />
                <Stack.Screen name="Translation" component={Translation} />
                <Stack.Screen name="Chat" component={Chat} />
                <Stack.Screen name="Subscription" component={Subscription} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Benifits" component={Benifits} />
                <Stack.Screen name="Book" component={Book} />
                <Stack.Screen name="Schedule" component={Schedule} />
                <Stack.Screen name="History" component={History} />
                <Stack.Screen name="DrawerBarber" component={DrawerBarber} />
                <Stack.Screen name="PaymentPlan" component={PaymentPlan} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default LoginNavigation;