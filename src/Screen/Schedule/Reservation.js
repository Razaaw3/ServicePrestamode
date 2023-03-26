import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Avatar } from 'react-native-paper';
import * as CommonStyle from '../../helper/CommonStyle';
import styles from './styles';
import '../../config/i18n/index';
const Reservation = () => {
    const [List, setList] = useState([
        {id: 1},
        {id: 2},
        {id: 3},
      ]);
  const FlatListView = ({item, index}) => {
    return (
      <View style={styles.card}>
        <View style={{width:'20%'}}>
          <Avatar.Image source={require('../../../Image/profile.png')} size = {50} alignSelf='center'/>
        </View>
        <View style={{width:'40%'}}>
          <Text style={{color:CommonStyle.BlueButton,fontFamily:CommonStyle.Bold,fontSize:14}}>En attente</Text>
          <Text style={{color:"grey",fontFamily:CommonStyle.Regular,fontSize:12}}>Emmanuel</Text>
          <Text style={{color:"grey",fontFamily:CommonStyle.Regular,fontSize:12}}>Box braids</Text>
          <TouchableOpacity>
          <Text style={{color:CommonStyle.RedButton,fontFamily:CommonStyle.Bold,fontSize:14,marginTop:5}}>Annulers</Text>
          </TouchableOpacity>
        </View>
        <View style={{width:'40%',alignItems:'flex-end'}}>
          <Text style={{color:CommonStyle.BlueButton,fontFamily:CommonStyle.Bold,fontSize:14}}>12/01/2019</Text>
          <Text style={{color:CommonStyle.BlueButton,fontFamily:CommonStyle.Regular,fontSize:12}}>14:30</Text>
          <TouchableOpacity style={styles.button}>
          <Text style={{color:CommonStyle.pureWhite,fontFamily:CommonStyle.Bold,fontSize:14,marginTop:5}}>Envoyer un message</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  };

  return (
    <>
    <View>
    <Text style={styles.ResHeading} >Réservations à venir</Text>
    <FlatList
    data={List}
    renderItem={FlatListView}
     />
  </View>
  <View marginTop={70}>
  <Text style={styles.ResHeading} >Réservations passées</Text>
    <FlatList
    data={List}
    renderItem={FlatListView}
     />
  </View>
  </>

  )
}

export default Reservation