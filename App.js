import React, { useState } from 'react';
import { View,Text } from 'react-native';

//Not Routing
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
