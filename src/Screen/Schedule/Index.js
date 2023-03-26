import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
import styles from './styles';
import Bars from '../../../Image/bars.png';
import {useTranslation} from 'react-i18next';
import '../../config/i18n/index';
import Disponsibities from './Disponsibities';
import Reservation from './Reservation';
const Index = props => {
  const [reservation, setReservation] = useState(false)
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>props.navigation.goBack()}>
            <Image source={Bars} />
          </TouchableOpacity>
          <Text style={styles.headerHeading}>Planning</Text>
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={reservation===false?styles.activeTab:null} onPress={()=>setReservation(false)}>
            <Text style={[styles.tabText]}>Disponibilités</Text>
          </TouchableOpacity>
          <TouchableOpacity style={reservation?styles.activeTab:null} onPress={()=>setReservation(true)}>
            <Text style={[styles.tabText]}>Réservations</Text>
          </TouchableOpacity>
        </View>
        {
          reservation? <Reservation/>:<Disponsibities navigation={props.navigation}/>
        }

      </ScrollView>
    </SafeAreaView>
  );
};
export default Index;
