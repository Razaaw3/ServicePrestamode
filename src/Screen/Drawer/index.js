import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Octicons';
import Cal from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/FontAwesome';
import Chat from 'react-native-vector-icons/Ionicons';

import Logo from '../../../Image/logo.png';
import Profile from '../../../Image/profile.png';
const Drawer = props => {
  const Next = () => {
    props.navigation.navigate('MyReservation');
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.MainDrawer}>
            <View style={styles.UpperContainer}>
              <View style={styles.ImageContainer}>
                <Image source={Profile} style={styles.ImageStyle} />
                <View>
                  <Text style={styles.NameStyle}>Emmanuel Macron</Text>
                  <Text style={styles.DesStyle}>Elysée, Paris 8ème</Text>
                </View>
                <Cal
                  onPress={Next}
                  name="close"
                  size={20}
                  color="#181461"
                  style={{marginTop: 15}}
                />
              </View>
            </View>
            <View style={styles.DrawerManu}>
              <Cal
                name="calendar"
                size={24}
                color="#EF233C"
                style={styles.DrawerIcon}
              />
              <Text style={styles.DrawerManuHeading}>Mes réservations</Text>
            </View>
            <View style={styles.DrawerManu}>
              <Cal
                name="pluscircleo"
                size={24}
                color="#EF233C"
                style={styles.DrawerIcon}
              />
              <Text style={styles.DrawerManuHeading}>Nouvelle réservation</Text>
            </View>
            <View style={styles.DrawerManu}>
              <User
                name="user-circle-o"
                size={24}
                color="#EF233C"
                style={styles.DrawerIcon}
              />
              <Text style={styles.DrawerManuHeading}>Profil</Text>
            </View>
            <View style={styles.DrawerManu}>
              <Chat
                name="ios-chatbubbles-outline"
                size={24}
                color="#EF233C"
                style={styles.DrawerIcon}
              />
              <Text style={styles.DrawerManuHeading}>Messagerie</Text>
            </View>
            <View style={styles.DrawerManu}>
              <Chat
                name="document-text-outline"
                size={24}
                color="#EF233C"
                style={styles.DrawerIcon}
              />
              <Text style={styles.DrawerManuHeading}>Factures</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Drawer;
